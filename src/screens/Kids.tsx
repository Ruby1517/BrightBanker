import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import Card from '../components/Card';
import { colors, spacing } from '../styles/theme';
import { useKids } from '../state/KidContext';

export default function Kids(){
  const { kids, selectedKidId, selectKid, reloadKids, addKid, loading, error } = useKids();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(()=>{ reloadKids(); },[]);

  async function onAdd(){
    try{
      if(!name.trim()) return Alert.alert('Missing name', 'Please enter a name.');
      const n = name.trim();
      const a = age ? parseInt(age, 10) : undefined;
      await addKid(n, isNaN(a as any) ? undefined : a);
      setName(''); setAge('');
    }catch(e:any){ Alert.alert('Add kid failed', e.message || 'Unknown error'); }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Dashboard</Text>

      <Card style={{ marginBottom: spacing(1) }}>
        <Text style={{ color: colors.sub, marginBottom: 6 }}>Add Kid</Text>
        <View style={{ flexDirection:'row', gap: 8 }}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={colors.sub}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[styles.input, { width: 90 }]}
            placeholder="Age"
            placeholderTextColor={colors.sub}
            keyboardType="number-pad"
            value={age}
            onChangeText={setAge}
          />
          <TouchableOpacity onPress={onAdd} style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Card>

      {/* Navigation handled via navbar menu; removed inline nav buttons */}

      {loading && <ActivityIndicator color={colors.accent} style={{ marginVertical: 8 }} />}
      {!!error && <Text style={{ color: '#ef4444', marginBottom: 8 }}>{error}</Text>}

      <FlatList
        data={kids}
        keyExtractor={(k)=>k.id}
        renderItem={({ item })=>{
          const onOpen = async ()=>{ await selectKid(item.id); navigation.navigate('KidHome', { kidId: item.id }); };
          return (
            <TouchableOpacity activeOpacity={0.9} onPress={onOpen}>
              <Card style={{ marginBottom: 10 }}>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                  <View>
                    <Text style={{ color: colors.text, fontWeight:'800' }}>{item.name}</Text>
                    {item.age != null && <Text style={{ color: colors.sub, marginTop: 2 }}>Age {item.age}</Text>}
                    {item.jars && (
                      <Text style={{ color: colors.sub, marginTop: 4 }}>
                        Save ${(item.jars.save/100).toFixed(2)} · Spend ${(item.jars.spend/100).toFixed(2)} · Share ${(item.jars.share/100).toFixed(2)}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={async ()=>{ await selectKid(item.id); }} style={[styles.pickBtn, selectedKidId===item.id && { backgroundColor: colors.accent }]}>
                    <Text style={[styles.pickBtnText, selectedKidId===item.id && { color: '#052b16' }]}>
                      {selectedKidId===item.id ? 'Selected' : 'Select'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </TouchableOpacity>
          );
        }}
      />

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={()=> navigation.navigate('ParentDashboard')} style={styles.dashBtn}>
          <Text style={styles.dashBtnText}>Recent Activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg, padding: spacing(2) },
  title: { color: colors.text, fontWeight: '800', fontSize: 22, marginBottom: spacing(1) },
  input: { flex:1, backgroundColor: 'white', borderColor:'#e5e7eb', borderWidth:1, borderRadius:10, padding:10, color: colors.text },
  addBtn: { backgroundColor: '#2563eb', borderRadius: 10, paddingHorizontal: 16, alignItems:'center', justifyContent:'center' },
  addBtnText: { color: 'white', fontWeight:'800' },
  pickBtn: { backgroundColor: '#1f2937', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  pickBtnText: { color: 'white', fontWeight: '700' },
  openBtn: { backgroundColor: '#2563eb', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  openBtnText: { color: 'white', fontWeight:'800' }
  ,dashBtn: { backgroundColor: '#1e293b', borderRadius: 10, paddingVertical: 10, alignItems:'center' },
  dashBtnText: { color: 'white', fontWeight:'800' }
});
