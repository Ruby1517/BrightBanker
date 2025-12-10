import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../lib/api';
import { API_BASE } from '../config';

type User = { id: string; email: string; familyId: string };
interface AuthState {
  token: string | null;
  user: User | null;
  familyName: string | null;
  login(email: string, password: string): Promise<void>;
  register(email: string, password: string, familyName?: string): Promise<void>;
  logout(): Promise<void>;
}

const CTX = createContext<AuthState>({
  token: null, user: null, familyName: null,
  login: async()=>{}, register: async()=>{}, logout: async()=>{}
});

export function AuthProvider({ children }:{ children: React.ReactNode }){
  const [token, setToken] = useState<string|null>(null);
  const [user, setUser] = useState<User|null>(null);
  const [familyName, setFamilyName] = useState<string|null>(null);

  useEffect(()=>{
    (async ()=>{
      const t = await AsyncStorage.getItem('bb_token');
      if(t){ setToken(t); await refreshMe(t); }
    })();
  },[]);

  async function refreshMe(tok: string){
    const res = await fetch(`${API_BASE}/api/me`, {
      headers: { Authorization: `Bearer ${tok}`}
    });
    if(res.ok){
      const j = await res.json();
      setUser(j.user);
      setFamilyName(j.family?.name ?? null);
    }
  }

  async function login(email: string, password: string){
    const payload = { email: email.trim().toLowerCase(), password: password.trim() };
    const j = await api('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });
    await AsyncStorage.setItem('bb_token', j.token);
    setToken(j.token);
    await refreshMe(j.token);
  }

  async function register(email: string, password: string, familyName?: string){
    const payload = { email: email.trim().toLowerCase(), password: password.trim(), familyName: familyName?.trim() };
    const j = await api('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });
    await AsyncStorage.setItem('bb_token', j.token);
    setToken(j.token);
    await refreshMe(j.token);
  }

  async function logout(){
    setToken(null); setUser(null); setFamilyName(null);
    await AsyncStorage.removeItem('bb_token');
  }

  return <CTX.Provider value={{ token, user, familyName, login, register, logout }}>{children}</CTX.Provider>;
}

export const useAuth = ()=> useContext(CTX);
