import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Pressable, Modal, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { useAuth } from '../state/AuthContext';

export default function HeaderNav(){
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { familyName, logout } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text style={styles.link}>Home</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>setOpen(true)}>
        <Text style={styles.family} numberOfLines={1}>{familyName || 'Family'}</Text>
      </TouchableOpacity>
      <Modal transparent visible={open} animationType="fade" onRequestClose={()=>setOpen(false)}>
        <View style={styles.modalRoot}>
          <Pressable style={styles.modalBackdrop} onPress={()=>setOpen(false)} />
          <View style={styles.modalMenu}>
            <TouchableOpacity onPress={async ()=>{ setOpen(false); await logout(); }}>
              <Text style={styles.menuItem}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection:'row', alignItems:'center', gap: 12 },
  link: { color: '#2563eb', fontWeight: '800' },
  family: { color: '#64748b', fontWeight:'800', maxWidth: 140 },
  modalRoot: { flex:1, paddingTop: (Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 44) + 8, paddingRight: 10, alignItems:'flex-end' },
  modalBackdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.02)' },
  modalMenu: { backgroundColor: 'white', borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10, shadowColor:'#000', shadowOpacity:0.2, shadowRadius:8, elevation:6 },
  menuItem: { color:'#111827', paddingVertical:6, fontWeight:'700' }
});
