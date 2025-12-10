import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import Card from '../components/Card';
import SplitMoney from '../components/SplitMoney';
import { colors, spacing } from '../styles/theme';
import { useMoney } from '../state/MoneyContext';
import { useAuth } from '../state/AuthContext';
import { API_BASE } from '../config';
import { useKids } from '../state/KidContext';

export default function AddMoney(){
  const [income, setIncome] = useState('20.00');
  const { addDeposit } = useMoney();
  const { token } = useAuth();
  const { reloadKids } = useKids();
  const route = useRoute() as any;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const kidId: string | undefined = route.params?.kidId;

  async function onConfirm(parts:{save:number;spend:number;share:number}){
    const total = Math.round((parseFloat(income || '0') || 0) * 100);
    try{
      if (kidId && token){
        const res = await fetch(`${API_BASE}/api/transactions/deposit`, {
          method: 'POST',
          headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ kidId, save: parts.save, spend: parts.spend, share: parts.share })
        });
        if(!res.ok){ const j = await res.json().catch(()=>({})); throw new Error(j.error || `${res.status} ${res.statusText}`); }
        await reloadKids();
        Alert.alert('Added!', 'Money divided into jars.', [{ text:'OK', onPress: ()=> navigation.goBack() }]);
      } else {
        // Fallback to local-only state
        await addDeposit(total, parts);
        Alert.alert('Added!', 'Money divided into jars.', [{ text:'OK', onPress: ()=> navigation.goBack() }]);
      }
    }catch(e:any){
      Alert.alert('Add money failed', e.message || 'Unknown error');
    }
  }

  const cents = Math.round((parseFloat(income||'0')||0) * 100);

  return (
    <View style={styles.container}>
      <Card>
        <Text style={{ color: colors.text, marginBottom: 8 }}>Income amount ($)</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          value={income}
          onChangeText={setIncome}
          placeholder="e.g., 20.00"
          placeholderTextColor={colors.sub}
        />
        <View style={{ height: 12 }} />
        <SplitMoney incomeCents={cents} onConfirm={onConfirm} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg, padding: spacing(2) },
  input: { borderWidth: 1, borderColor: '#333', borderRadius: 10, padding: 10, color: colors.text }
});
