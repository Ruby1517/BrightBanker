import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, spacing } from '../styles/theme';

function KidAvatar({ skin='#fde68a', shirt='#60a5fa' }:{ skin?:string; shirt?:string }){
  return (
    <View style={[styles.avatarWrap]}>
      <View style={[styles.head, { backgroundColor: skin }]}>
        <View style={[styles.eye, { left: 10 }]} />
        <View style={[styles.eye, { right: 10 }]} />
        <View style={styles.mouth} />
      </View>
      <View style={[styles.body, { backgroundColor: shirt }]} />
    </View>
  );
}

export default function BrandHero(){
  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <Image source={require('../../assets/icon.png')} resizeMode="contain" style={styles.logo} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.brand}>BrightBanker</Text>
          <Text style={styles.tagline}>Money made fun for families</Text>
        </View>
      </View>
      <View style={styles.kidsRow}>
        <KidAvatar skin="#fde68a" shirt="#60a5fa" />
        <KidAvatar skin="#fca5a5" shirt="#22c55e" />
        <KidAvatar skin="#fef3c7" shirt="#f59e0b" />
        <KidAvatar skin="#e9d5ff" shirt="#38bdf8" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'transparent', marginBottom: spacing(1) },
  brandRow: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 44, height: 44, borderRadius: 10 },
  brand: { color: colors.text, fontWeight: '900', fontSize: 20 },
  tagline: { color: colors.sub },
  kidsRow: { flexDirection: 'row', gap: 14, marginTop: spacing(1) },
  avatarWrap: { alignItems: 'center' },
  head: {
    width: 34, height: 34, borderRadius: 34, position: 'relative',
    borderColor: '#11182722', borderWidth: 1
  },
  eye: {
    position: 'absolute', top: 12, width: 5, height: 5, borderRadius: 5, backgroundColor: '#0f172a'
  },
  mouth: {
    position: 'absolute', bottom: 9, left: 9, right: 9, height: 6,
    borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: '#0f172a22'
  },
  body: { width: 34, height: 18, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, marginTop: -2 }
});

