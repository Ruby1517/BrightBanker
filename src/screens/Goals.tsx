import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Card from '../components/Card';
import { colors, spacing } from '../styles/theme';

function weeksToGoal(targetCents: number, savedCents: number, weeklySave: number) {
  const remaining = Math.max(0, targetCents - savedCents);
  return weeklySave > 0 ? Math.ceil(remaining / weeklySave) : Infinity;
}

export default function Goals() {
  const [title, setTitle] = useState('Lego set');
  const [target, setTarget] = useState('36.00');
  const [weekly, setWeekly] = useState('6.00');
  const saved = 0; // MVP local

  const eta = useMemo(() => {
    const t = Math.round(parseFloat(target || '0') * 100);
    const w = Math.round(parseFloat(weekly || '0') * 100);
    return weeksToGoal(t, saved, w);
  }, [target, weekly, saved]);

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.label}>Goal title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        <Text style={styles.label}>Target ($)</Text>
        <TextInput style={styles.input} keyboardType="decimal-pad" value={target} onChangeText={setTarget} />
        <Text style={styles.label}>Weekly save ($)</Text>
        <TextInput style={styles.input} keyboardType="decimal-pad" value={weekly} onChangeText={setWeekly} />
        <View style={{ height: 12 }} />
        <Text style={{ color: colors.sub }}>ETA: {eta === Infinity ? '—' : `${eta} week(s)`}</Text>
        <View style={{ height: 12 }} />
        <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Saved', 'Goal saved (MVP).')}>
          <Text style={styles.btnText}>Save Goal</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: spacing(2) },
  label: { color: colors.text, marginBottom: 6 },
  input: { backgroundColor: 'white', borderColor: '#e5e7eb', borderWidth: 1, borderRadius: 10, padding: 10, color: colors.text, marginBottom: 12 },
  btn: { backgroundColor: colors.accent, borderRadius: 12, padding: 14, alignItems: 'center' },
  btnText: { color: '#052b16', fontWeight: '800' }
});
