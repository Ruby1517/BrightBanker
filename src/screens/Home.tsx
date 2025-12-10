import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Card from '../components/Card';
import BrandHero from '../components/BrandHero';
import PiggyBank from '../components/PiggyBank';
import { playCoinSfx } from '../lib/sfx';
import { colors, spacing } from '../styles/theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { useMoney } from '../state/MoneyContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props){
  const { balances, lastDeposit } = useMoney();
  const max = Math.max(100, balances.save, balances.spend, balances.share);
  const fmt = (c:number)=> `$${(c/100).toFixed(2)}`;
  const pulse = lastDeposit?.at || 0;
  const saveCoins = Math.min(12, Math.max(0, Math.round((lastDeposit?.save || 0) / 100)));
  const spendCoins = Math.min(12, Math.max(0, Math.round((lastDeposit?.spend || 0) / 100)));
  const shareCoins = Math.min(12, Math.max(0, Math.round((lastDeposit?.share || 0) / 100)));
  return (
    <ImageBackground
      source={require('../../assets/icon.png')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.bgImage}
    >
      <View style={styles.content}>
      <BrandHero />
      <Text style={styles.title}>Your Banks</Text>
      <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
        <PiggyBank color="#22c55e" label="Save" amountLabel={fmt(balances.save)} percent={balances.save / max} size={84} animateCount={saveCoins} pulse={pulse} floatingCoins onDrop={()=> playCoinSfx(3)} />
        <PiggyBank color="#f59e0b" label="Spend" amountLabel={fmt(balances.spend)} percent={balances.spend / max} size={84} animateCount={spendCoins} pulse={pulse} floatingCoins onDrop={()=> playCoinSfx(3)} />
        <PiggyBank color="#3b82f6" label="Share" amountLabel={fmt(balances.share)} percent={balances.share / max} size={84} animateCount={shareCoins} pulse={pulse} floatingCoins onDrop={()=> playCoinSfx(3)} />
      </View>

      <Card>
        <Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginBottom: 6 }}>
          BrightBanker — Money made fun for families
        </Text>
        <Text style={{ color: colors.sub, marginBottom: 8 }}>
          Kids learn to Save, Spend, and Share with playful banks, moving coins, and simple goals.
        </Text>
        <Text style={{ color: colors.sub }}>
          • Visual banks grow with every deposit
        </Text>
        <Text style={{ color: colors.sub }}>
          • Parent dashboard to track activity by kid
        </Text>
        <Text style={{ color: colors.sub }}>
          • Friendly AI coach to guide smart choices
        </Text>
      </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.bg },
  content: { flex:1, padding: spacing(2), gap: spacing(2) },
  title: { color: colors.text, fontSize: 22, fontWeight: '700' },
  bgImage: { opacity: 0.06 },
  
});
