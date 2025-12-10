import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE } from '../config';
import { useAuth } from './AuthContext';

export type Kid = { id: string; name: string; age?: number; jars?: { save:number; spend:number; share:number } };

interface KidState {
  kids: Kid[];
  selectedKidId: string | null;
  selectKid: (id: string | null) => Promise<void>;
  reloadKids: () => Promise<void>;
  addKid: (name: string, age?: number) => Promise<Kid>;
  loading: boolean;
  error: string | null;
}

const CTX = createContext<KidState>({
  kids: [], selectedKidId: null,
  selectKid: async()=>{}, reloadKids: async()=>{}, addKid: async()=>{ return { id:'', name:'' }; },
  loading: false, error: null,
});

export function KidProvider({ children }:{ children: React.ReactNode }){
  const { token } = useAuth();
  const [kids, setKids] = useState<Kid[]>([]);
  const [selectedKidId, setSelectedKidId] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  useEffect(()=>{
    (async ()=>{
      const saved = await AsyncStorage.getItem('bb_selected_kid');
      if(saved) setSelectedKidId(saved);
      if(token) await reloadKids();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function reloadKids(){
    if(!token) return;
    setLoading(true); setError(null);
    try{
      const res = await fetch(`${API_BASE}/api/kid`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const j = await res.json();
      const list: Kid[] = (j.kids || []).map((k:any)=> ({ id: k._id || k.id, name: k.name, age: k.age, jars: k.jars }));
      setKids(list);
      // Auto-select first if none selected
      if(!selectedKidId && list.length){ await selectKid(list[0].id); }
    }catch(e:any){ setError(e.message || 'Failed to load kids'); }
    finally{ setLoading(false); }
  }

  async function addKid(name:string, age?:number){
    if(!token) throw new Error('Not authenticated');
    const res = await fetch(`${API_BASE}/api/kid`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type':'application/json' },
      body: JSON.stringify({ name, age })
    });
    if(!res.ok){ const j = await res.json().catch(()=>({})); throw new Error(j.error || 'Failed to add kid'); }
    const j = await res.json();
    const kid: Kid = { id: j.kid._id || j.kid.id, name: j.kid.name, age: j.kid.age, jars: j.kid.jars };
    setKids(prev=> [kid, ...prev]);
    if(!selectedKidId) await selectKid(kid.id);
    return kid;
  }

  async function selectKid(id: string | null){
    setSelectedKidId(id);
    if(id) await AsyncStorage.setItem('bb_selected_kid', id);
    else await AsyncStorage.removeItem('bb_selected_kid');
  }

  return (
    <CTX.Provider value={{ kids, selectedKidId, selectKid, reloadKids, addKid, loading, error }}>
      {children}
    </CTX.Provider>
  );
}

export const useKids = ()=> useContext(CTX);

