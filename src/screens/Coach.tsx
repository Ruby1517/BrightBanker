import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../components/Card';
import { colors, spacing } from '../styles/theme';

function basicCoach(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes('allowance') || lower.includes('money')) {
    return 'Try 60% Save, 30% Spend, 10% Share. Want to try?';
  }
  if (lower.includes('lego') || lower.includes('toy')) {
    return 'Saving $6/week means a $36 toy in 6 weeks. You got this!';
  }
  if (lower.includes('donate') || lower.includes('share')) {
    return 'Sharing helps others – even $1 matters.';
  }
  return 'Set a goal and add a little each week. What are you saving for?';
}

export default function Coach() {
  const [input, setInput] = useState('I got $10 from grandma.');
  const [history, setHistory] = useState<{ role: 'kid' | 'coach'; text: string }[]>([
    { role: 'coach', text: 'Hi! I am your money coach. Ask me about saving, spending, or sharing.' }
  ]);

  function send() {
    const kidMsg = input.trim();
    if (!kidMsg) return;
    const reply = basicCoach(kidMsg);
    setHistory((h) => [...h, { role: 'kid', text: kidMsg }, { role: 'coach', text: reply }]);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Card>
        <ScrollView style={{ maxHeight: 300 }}>
          {history.map((m, i) => (
            <Text key={i} style={{ color: m.role === 'kid' ? colors.text : colors.sub, marginBottom: 8 }}>
              {m.role === 'kid' ? 'You: ' : 'Coach: '}
              {m.text}
            </Text>
          ))}
        </ScrollView>
        <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Type your message..." />
        <TouchableOpacity style={styles.btn} onPress={send}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: spacing(2) },
  input: { backgroundColor: 'white', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 10, padding: 10, marginTop: 8 },
  btn: { backgroundColor: '#2563eb', borderRadius: 12, padding: 12, alignItems: 'center', marginTop: 8 },
  btnText: { color: 'white', fontWeight: '700' }
});
