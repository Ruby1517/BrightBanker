import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from '../styles/theme';

export default function SplitMoney({ incomeCents = 2000, onConfirm }: { incomeCents?: number, onConfirm: (parts:{save:number;spend:number;share:number})=>void }) {
  const [savePct, setSavePct] = useState(50);
  const [spendPct, setSpendPct] = useState(40);
  const sharePct = Math.max(0, 100 - savePct - spendPct);

  const amounts = useMemo(()=> ({
    save:  Math.round(incomeCents * (savePct/100)),
    spend: Math.round(incomeCents * (spendPct/100)),
    share: Math.round(incomeCents * (sharePct/100)),
  }), [incomeCents, savePct, spendPct, sharePct]);

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ color: colors.text }}>Income: ${(incomeCents/100).toFixed(2)}</Text>
      <Text style={{ color: colors.text }}>Save {savePct}% → ${(amounts.save/100).toFixed(2)}</Text>
      <Slider value={savePct} minimumValue={0} maximumValue={100} step={1} onValueChange={setSavePct} />
      <Text style={{ color: colors.text }}>Spend {spendPct}% → ${(amounts.spend/100).toFixed(2)}</Text>
      <Slider value={spendPct} minimumValue={0} maximumValue={100} step={1} onValueChange={setSpendPct} />
      <Text style={{ color: colors.text }}>Share {sharePct}% → ${(amounts.share/100).toFixed(2)}</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Button title="50/40/10" onPress={()=>{setSavePct(50); setSpendPct(40);}} />
        <Button title="60/30/10" onPress={()=>{setSavePct(60); setSpendPct(30);}} />
        <Button title="70/20/10" onPress={()=>{setSavePct(70); setSpendPct(20);}} />
      </View>
      <Button title="Confirm" onPress={()=>onConfirm(amounts)} />
    </View>
  );
}
