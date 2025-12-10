import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, Animated } from 'react-native';

type Props = {
  color: string;
  label?: string;
  amountLabel?: string;
  percent: number; // 0..1
  size?: number;   // base width of the body
  style?: ViewStyle;
  animateCount?: number;
  pulse?: number; // change value to retrigger drop animation
  floatingCoins?: boolean; // show gentle floating coins inside
  onDrop?: ()=>void; // callback when a drop animation starts (for sound)
};

export default function PiggyBank({ color, label, amountLabel, percent, size = 80, style, animateCount = 0, pulse, floatingCoins = false, onDrop }: Props){
  const bodyW = size;
  const bodyH = Math.max(40, Math.round(size * 0.6));
  const head = Math.round(size * 0.36);
  const ear = Math.round(head * 0.28);
  const leg = Math.round(bodyH * 0.18);
  const slotW = Math.max(16, Math.round(size * 0.22));
  const slotH = 6;
  const clamped = Math.max(0, Math.min(1, percent));
  const fillH = Math.round(clamped * (bodyH - 6));

  const slotCenterX = bodyW * 0.45; // slot sits slightly left of center

  // Animated drop coins
  type Drop = { key: string; left: number; ty: Animated.Value; op: Animated.Value; d: number };
  const [drops, setDrops] = useState<Drop[]>([]);
  const lastPulse = useRef<number|undefined>(undefined);

  useEffect(()=>{
    if (!animateCount) return;
    if (pulse === lastPulse.current) return;
    lastPulse.current = pulse;
    const count = Math.min(12, Math.max(1, animateCount));
    const newDrops: Drop[] = [];
    for(let i=0;i<count;i++){
      const d = 14 + Math.random()*4;
      const spread = Math.max(6, slotW/2);
      const left = slotCenterX - d/2 + (Math.random()*spread*2 - spread);
      const ty = new Animated.Value(-bodyH*0.9 - Math.random()*30);
      const op = new Animated.Value(0);
      newDrops.push({ key: `${pulse}-${i}-${Math.random()}`, left, d, ty, op });
    }
    setDrops(newDrops);
    if (onDrop) { try { onDrop(); } catch {} }
    requestAnimationFrame(()=>{
      const anims = newDrops.map((it)=> Animated.sequence([
        Animated.parallel([
          Animated.timing(it.ty, { toValue: 0, duration: 550 + Math.random()*300, useNativeDriver: true }),
          Animated.timing(it.op, { toValue: 1, duration: 200, useNativeDriver: true }),
        ]),
        Animated.timing(it.op, { toValue: 0, delay: 350, duration: 250, useNativeDriver: true })
      ]));
      Animated.stagger(70, anims).start();
      setTimeout(()=> setDrops([]), 1800);
    });
  }, [pulse, animateCount, bodyH, slotW, slotCenterX]);

  // Gentle floating coins inside belly
  type Floater = { key:string; left:number; d:number; y:Animated.Value; dir:1|-1 };
  const [floaters, setFloaters] = useState<Floater[]>([]);
  useEffect(()=>{
    if(!floatingCoins){ setFloaters([]); return; }
    const count = 6;
    const arr: Floater[] = [];
    for(let i=0;i<count;i++){
      const d = 8 + Math.random()*6;
      const left = Math.random()*(bodyW - d);
      const start = Math.random()*(fillH>8?fillH:bodyH*0.6);
      const y = new Animated.Value(start);
      arr.push({ key:`f-${i}`, left, d, y, dir: (Math.random()>0.5?1:-1) as 1|-1 });
    }
    setFloaters(arr);
    const loops = arr.map((f)=> Animated.loop(
      Animated.sequence([
        Animated.timing(f.y, { toValue: Math.max(4, Math.min((fillH||bodyH*0.6)-4, (f.dir===1? f.y.__getValue()+10 : f.y.__getValue()-10))), duration: 1200+Math.random()*800, useNativeDriver: true }),
        Animated.timing(f.y, { toValue: Math.max(4, Math.min((fillH||bodyH*0.6)-4, (f.dir===1? f.y.__getValue()-10 : f.y.__getValue()+10))), duration: 1200+Math.random()*800, useNativeDriver: true })
      ])
    ));
    loops.forEach(l=> l.start());
    return ()=> loops.forEach(l=> l.stop());
  }, [floatingCoins, bodyW, bodyH, fillH]);

  return (
    <View style={[styles.container, style]}> 
      <View style={{ width: bodyW + head/2, height: bodyH + leg + 20 }}>
        {/* Slot */}
        <View style={[styles.slot, { width: slotW, height: slotH, left: slotCenterX - slotW/2 }]} />

        {/* Body ellipse */
        }
        <View style={[styles.body, { width: bodyW, height: bodyH, backgroundColor: 'white' }]}>
          {/* Fill (belly) */}
          <View style={[styles.fill, { height: fillH, backgroundColor: color }]} />
          {floatingCoins && (
            <View pointerEvents="none" style={StyleSheet.absoluteFill}>
              {floaters.map(f=> (
                <Animated.View key={f.key} style={{ position:'absolute', bottom:0, transform:[{ translateY: f.y }], left: f.left, width: f.d, height: f.d, borderRadius: 9999, backgroundColor: color, opacity: 0.5 }} />
              ))}
            </View>
          )}
        </View>

        {/* Head */}
        <View style={[styles.head, { width: head, height: head, left: bodyW - head/2, backgroundColor: 'white' }]} />
        {/* Ear (rotated square) */}
        <View style={[styles.ear, { width: ear, height: ear, left: bodyW + ear*0.1, backgroundColor: 'white' }]} />

        {/* Outline overlays */}
        <View pointerEvents="none" style={[styles.bodyOutline, { width: bodyW, height: bodyH, borderColor: '#94a3b8' }]} />
        <View pointerEvents="none" style={[styles.headOutline, { width: head, height: head, left: bodyW - head/2, borderColor: '#94a3b8' }]} />
        <View pointerEvents="none" style={[styles.earOutline, { width: ear, height: ear, left: bodyW + ear*0.1, borderColor: '#94a3b8' }]} />

        {/* Legs */}
        <View style={[styles.leg, { left: bodyW*0.15, width: leg, height: leg }]} />
        <View style={[styles.leg, { left: bodyW*0.55, width: leg, height: leg }]} />

        {/* Animated drop coins */}
        {drops.map(it => (
          <Animated.View key={it.key} style={[styles.dropCoin, {
            left: it.left,
            transform: [{ translateY: it.ty }],
            opacity: it.op,
            width: it.d, height: it.d, backgroundColor: color
          }]} />
        ))}
      </View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      {!!amountLabel && <Text style={styles.amount}>{amountLabel}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  body: {
    position: 'absolute', top: 16, left: 0,
    borderRadius: 9999,
    borderWidth: 2, borderColor: '#94a3b8',
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  fill: { width: '100%', opacity: 0.85 },
  head: {
    position: 'absolute', top: 10,
    borderRadius: 9999,
    borderWidth: 2, borderColor: '#94a3b8',
  },
  ear: {
    position: 'absolute', top: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 8,
    borderWidth: 2, borderColor: '#94a3b8',
  },
  bodyOutline: {
    position: 'absolute', top: 16, left: 0,
    borderRadius: 9999,
    borderWidth: 2,
  },
  headOutline: {
    position: 'absolute', top: 10,
    borderRadius: 9999,
    borderWidth: 2,
  },
  earOutline: {
    position: 'absolute', top: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 8,
    borderWidth: 2,
  },
  leg: {
    position: 'absolute', bottom: 6,
    backgroundColor: '#94a3b8',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  slot: {
    position: 'absolute', top: 6,
    height: 6,
    backgroundColor: '#111827',
    borderRadius: 3,
  },
  dropCoin: {
    position: 'absolute', top: 12,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.12)'
  },
  label: { marginTop: 6, fontWeight: '700', color: '#111827' },
  amount: { color: '#6b7280', fontSize: 12 },
});
