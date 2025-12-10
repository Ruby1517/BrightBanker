import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../state/AuthContext';
import { colors, spacing } from '../styles/theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props){
  const { login } = useAuth();
  const [email, setEmail] = useState('parent@example.com');
  const [password, setPassword] = useState('secret123');
  const [busy, setBusy] = useState(false);

  async function onLogin(){
    try{
      setBusy(true);
      await login(email, password);
    }catch(e:any){
      Alert.alert('Login failed', e.message);
    }finally{ setBusy(false); }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back 👋</Text>
      <TextInput style={styles.input} autoCapitalize="none" placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.btn} onPress={onLogin} disabled={busy}>
        <Text style={styles.btnText}>{busy ? 'Signing in...' : 'Sign In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
        <Text style={{ color: colors.sub, marginTop: 10 }}>New here? Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg, padding: spacing(3) },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: spacing(2) },
  input: { backgroundColor: 'white', borderColor:'#e5e7eb', borderWidth:1, borderRadius:10, padding:12, marginBottom:12 },
  btn: { backgroundColor: colors.accent, borderRadius: 12, padding: 14, alignItems:'center' },
  btnText: { color: '#052b16', fontWeight: '800' }
});
