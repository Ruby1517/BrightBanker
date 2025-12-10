import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import { colors, spacing } from '../styles/theme';
import { useAuth } from '../state/AuthContext';
import { useKids } from '../state/KidContext';
import { API_BASE } from '../config';

export default function ParentDashboard(){
  const { token } = useAuth();
  const { kids, reloadKids } = useKids();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [byKid, setByKid] = useState<Record<string, any[]>>({});

  async function reload(){
    if(!token) return;
    setLoading(true); setError(null);
    try{
      // Fetch kids fresh to avoid state timing issues
      const kRes = await fetch(`${API_BASE}/api/kid`, { headers: { Authorization: `Bearer ${token}` } });
      const kJson = await kRes.json();
      const kList: Array<{ id:string; _id?:string; name:string }>= (kJson.kids||[]).map((k:any)=> ({ id: k._id || k.id, name: k.name }));
      const results = await Promise.all(kList.map(async (k)=>{
        const res = await fetch(`${API_BASE}/api/transactions?kidId=${encodeURIComponent(k.id)}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if(!res.ok) return [k.id, [] as any[]] as const;
        const j = await res.json();
        return [k.id, (j.transactions||[])] as const;
      }));
      const map: Record<string, any[]> = {};
      for (const [kidId, txs] of results){ map[kidId] = txs; }
      setByKid(map);
      // Optionally refresh global kids state
      await reloadKids();
    }catch(e:any){ setError(e.message || 'Failed to load activity'); }
    finally{ setLoading(false); }
  }

  useEffect(()=>{ reload(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom: 8 }}>
        <Text style={{ color: colors.text, fontWeight:'800', fontSize: 18 }}>Recent Activity</Text>
        <TouchableOpacity onPress={reload} style={[styles.btn, { paddingVertical: 8, paddingHorizontal: 12 }]}>
          <Text style={styles.btnText}>Reload</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator color={colors.accent} style={{ marginBottom: 8 }} />}
      {!!error && <Text style={{ color: '#ef4444', marginBottom: 8 }}>{error}</Text>}

      <FlatList
        data={kids}
        keyExtractor={(k)=>k.id}
        renderItem={({ item })=>{
          const txs = (byKid[item.id]||[]).slice(0,5);
          return (
            <Card style={{ marginBottom: 10 }}>
              <Text style={{ color: colors.text, fontWeight:'800', marginBottom: 6 }}>{item.name}</Text>
              {txs.length === 0 ? (
                <Text style={{ color: colors.sub }}>No recent activity</Text>
              ) : (
                txs.map(tx => (
                  <Text key={tx._id || tx.id} style={{ color: colors.sub, marginBottom: 6 }}>
                    {new Date(tx.createdAt).toLocaleString()} · {tx.type} · {tx.jar} · ${(tx.amount/100).toFixed(2)} {tx.note? `· ${tx.note}`:''}
                  </Text>
                ))
              )}
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg, padding: spacing(2) },
  btn: { backgroundColor: '#1e293b', borderRadius: 12, padding: 12, alignItems:'center' },
  btnText: { color: 'white', fontWeight: '700' }
});
