import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, Animated } from 'react-native';

type Props = {
  color: string;
  label?: string;
  amountLabel?: string;
  percent: number; // 0..1
  size?: number;   // base size (width of body)
  style?: ViewStyle;
  variant?: 'coins' | 'liquid';
  animateCount?: number;
  pulse?: number; // change this value to retrigger animation
};

export default function Jar({ color, label, amountLabel, percent, size = 64, style, variant = 'coins', animateCount = 0, pulse }: Props){
  const bodyW = size;
  const bodyH = Math.round(size * 1.4);
  const neckW = Math.round(size * 0.5);
  const capW  = Math.round(size * 0.7);
  const neckH = 8;
  const capH  = 10;
  const clamped = Math.max(0, Math.min(1, percent));
  const fillH = clamped * (bodyH - 6); // liquid height

  // Coin layout (grid) within the body bounds
  const pad = 6;
  const coinSize = Math.max(10, Math.floor(bodyW / 6));
  const cols = Math.max(1, Math.floor((bodyW - pad * 2) / coinSize));
  const rows = Math.max(1, Math.floor((bodyH - pad * 2) / coinSize));
  const capacity = cols * rows;
  const coins = Math.min(capacity, Math.max(0, Math.round(clamped * capacity)));

  // Drop-in animation coins (ephemeral)
  const [drops, setDrops] = useState<Array<{ key:string; left:number; d:number; ty:Animated.Value; op:Animated.Value }>>([]);
  const lastPulse = useRef<number|undefined>(undefined);

  useEffect(()=>{
    if (!animateCount) return;
    if (pulse === lastPulse.current) return;
    lastPulse.current = pulse;
    const count = Math.min(12, Math.max(1, animateCount));
    const arr: Array<{ key:string; left:number; d:number; ty:Animated.Value; op:Animated.Value }> = [];
    for(let i=0;i<count;i++){
      const d = Math.min(18, Math.max(10, Math.floor(bodyW/6)));
      const left = pad + Math.random() * (bodyW - pad*2 - d);
      const ty = new Animated.Value(-Math.random() * (bodyH*0.8));
      const op = new Animated.Value(0);
      arr.push({ key: `${pulse}-${i}-${Math.random()}`, left, d, ty, op });
    }
    setDrops(arr);
    // kick animations on next frame
    requestAnimationFrame(()=>{
      const anims = arr.map((it, idx)=> Animated.sequence([
        Animated.parallel([
          Animated.timing(it.ty, { toValue: 0, duration: 500 + Math.random()*300, useNativeDriver: true }),
          Animated.timing(it.op, { toValue: 1, duration: 200, useNativeDriver: true })
        ]),
        Animated.timing(it.op, { toValue: 0, delay: 400, duration: 250, useNativeDriver: true })
      ]));
      Animated.stagger(60, anims).start();
      // cleanup after last finishes
      setTimeout(()=> setDrops([]), 1500);
    });
  }, [pulse, animateCount, bodyW, bodyH]);

  return (
    <View style={[styles.container, style]}>      
      <View style={{ alignItems: 'center' }}>
        {/* Cap */}
        <View style={[styles.cap, { width: capW, height: capH }]} />
        {/* Neck */}
        <View style={[styles.neck, { width: neckW, height: neckH }]} />
        {/* Body */}
        <View style={[styles.body, { width: bodyW, height: bodyH }]}>         
          {variant === 'liquid' ? (
            <View style={[styles.fill, { height: fillH, backgroundColor: color }]} />
          ) : (
            <View style={styles.coinLayer}>
              {Array.from({ length: coins }).map((_, i) => {
                const rowFromBottom = Math.floor(i / cols);
                const col = i % cols;
                const left = pad + col * coinSize + (coinSize - Math.min(coinSize, 18)) / 2;
                const bottom = pad + rowFromBottom * coinSize + (coinSize - Math.min(coinSize, 18)) / 2;
                const d = Math.min(coinSize, 18);
                return (
                  <View key={i} style={[styles.coin, {
                    width: d, height: d, left, bottom,
                    backgroundColor: color,
                  }]}
                  />
                );
              })}
            </View>
          )}
          {/* Drop-in overlays */}
          {drops.map(it=> (
            <Animated.View key={it.key} style={[styles.dropCoin, {
              left: it.left,
              transform: [{ translateY: it.ty }],
              opacity: it.op,
              width: it.d, height: it.d, backgroundColor: color
            }]} />
          ))}
        </View>
      </View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      {!!amountLabel && <Text style={styles.amount}>{amountLabel}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  cap: {
    backgroundColor: '#cbd5e1',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  neck: {
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    marginTop: 2,
    marginBottom: 2,
  },
  body: {
    borderColor: '#94a3b8',
    borderWidth: 2,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  fill: {
    width: '100%',
    opacity: 0.85,
  },
  coinLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  coin: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  dropCoin: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  label: { marginTop: 6, fontWeight: '700', color: '#111827' },
  amount: { color: '#6b7280', fontSize: 12 },
});
