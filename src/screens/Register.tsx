import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../state/AuthContext';
import { colors, spacing } from '../styles/theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function Register({ navigation }: Props){
  const { register } = useAuth();
  const [email, setEmail] = useState('parent@example.com');
  const [password, setPassword] = useState('secret123');
  const [familyName, setFamilyName] = useState('Hoseinzadeh Family');
  const [busy, setBusy] = useState(false);

  async function onRegister(){
    try{
      setBusy(true);
      await register(email, password, familyName);
    }catch(e:any){
      Alert.alert('Register failed', e.message);
    }finally{ setBusy(false); }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your family account 🏡</Text>
      <TextInput style={styles.input} autoCapitalize="none" placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Family name" value={familyName} onChangeText={setFamilyName} />
      <TouchableOpacity style={styles.btn} onPress={onRegister} disabled={busy}>
        <Text style={styles.btnText}>{busy ? 'Creating...' : 'Create Account'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{ color: colors.sub, marginTop: 10 }}>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg, padding: spacing(3) },
  title: { fontSize: 22, fontWeight: '800', color: colors.text, marginBottom: spacing(2) },
  input: { backgroundColor: 'white', borderColor:'#e5e7eb', borderWidth:1, borderRadius:10, padding:12, marginBottom:12 },
  btn: { backgroundColor: colors.accent, borderRadius: 12, padding: 14, alignItems:'center' },
  btnText: { color: '#052b16', fontWeight: '800' }
});
