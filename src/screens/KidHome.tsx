import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PiggyBank from '../components/PiggyBank';
import { colors, spacing } from '../styles/theme';
import { useKids } from '../state/KidContext';

type RouteParams = { kidId: string };

export default function KidHome(){
  const route = useRoute() as any;
  const navigation = useNavigation<any>();
  const { kids } = useKids();
  const kidId = (route.params as RouteParams)?.kidId;
  const kid = useMemo(()=> kids.find(k => k.id === kidId), [kids, kidId]);

  const save = kid?.jars?.save || 0;
  const spend = kid?.jars?.spend || 0;
  const share = kid?.jars?.share || 0;
  const max = Math.max(100, save, spend, share);
  const fmt = (c:number)=> `$${(c/100).toFixed(2)}`;

  useEffect(()=>{
    navigation.setOptions({
      title: kid?.name ? `${kid.name}'s Banks` : 'Kid Banks',
    });
  }, [navigation, kidId, kid?.name]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{kid?.name ? `${kid.name}'s Banks` : 'Kid Banks'}</Text>
      <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
        <PiggyBank color="#22c55e" label="Save" amountLabel={fmt(save)} percent={save / max} size={84} />
        <PiggyBank color="#f59e0b" label="Spend" amountLabel={fmt(spend)} percent={spend / max} size={84} />
        <PiggyBank color="#3b82f6" label="Share" amountLabel={fmt(share)} percent={share / max} size={84} />
      </View>
      <View style={{ marginTop: spacing(2), gap: 12 }}>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('AddMoney', { kidId })}>
          <Text style={styles.btnText}>Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Goals')}>
          <Text style={styles.btnText}>Add Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Coach')}>
          <Text style={styles.btnText}>AI Coach</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg, padding: spacing(2), gap: spacing(2) },
  title: { color: colors.text, fontSize: 22, fontWeight: '700' },
  btn: { backgroundColor: '#2563eb', borderRadius: 12, padding: 14, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: '700' }
});
