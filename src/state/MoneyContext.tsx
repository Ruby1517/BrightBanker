import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Jar = 'save'|'spend'|'share';
type TxType = 'deposit'|'spend'|'transfer'|'interest'|'match';

export interface Transaction {
  id: string;
  jar: Jar;
  type: TxType;
  amount: number;
  note?: string;
  createdAt: string;
}

type Kid = { id: string; name: string; jars: { save:number; spend:number; share:number } };

interface MoneyState {
  balances: Record<Jar, number>;
  transactions: Transaction[];
  kids: Kid[];
  lastDeposit?: { save:number; spend:number; share:number; at:number };
  addDeposit(cents: number, split: {save:number; spend:number; share:number}): Promise<void>;
  addSpend(jar: Jar, cents: number, note?: string): Promise<void>;
  reload(): Promise<void>;
  reset(): Promise<void>;
}

const DEFAULT: MoneyState = {
  balances: { save:0, spend:0, share:0 },
  transactions: [],
  kids: [],
  lastDeposit: undefined,
  addDeposit: async ()=>{},
  addSpend: async ()=>{},
  reload: async ()=>{},
  reset: async ()=>{},
};

const CTX = createContext<MoneyState>(DEFAULT);

export function MoneyProvider({ children }:{ children: React.ReactNode }){
  const [balances, setBalances] = useState(DEFAULT.balances);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [lastDeposit, setLastDeposit] = useState<MoneyState['lastDeposit']>(undefined);
  const kids = useMemo<Kid[]>(()=>[
    { id: 'default-kid', name: 'My Kid', jars: { ...balances } }
  ], [balances]);

  useEffect(()=>{
    (async ()=>{
      const raw = await AsyncStorage.getItem('brightbanker_state');
      if(raw){
        try{
          const parsed = JSON.parse(raw);
          setBalances(parsed.balances || DEFAULT.balances);
          setTransactions(parsed.transactions || []);
        }catch{}
      }
    })();
  },[]);

  useEffect(()=>{
    AsyncStorage.setItem('brightbanker_state', JSON.stringify({ balances, transactions }));
  },[balances, transactions]);

  async function addDeposit(_cents:number, split:{save:number;spend:number;share:number}){
    setBalances(b=> ({
      save:  b.save  + split.save,
      spend: b.spend + split.spend,
      share: b.share + split.share,
    }));
    setLastDeposit({ ...split, at: Date.now() });
    const now = new Date().toISOString();
    setTransactions(t=>[
      ...t,
      { id: now+'-s', jar:'save',  type:'deposit', amount: split.save,  createdAt: now },
      { id: now+'-p', jar:'spend', type:'deposit', amount: split.spend, createdAt: now },
      { id: now+'-h', jar:'share', type:'deposit', amount: split.share, createdAt: now },
    ]);
  }

  async function addSpend(jar:Jar, cents:number, note?:string){
    setBalances(b=> ({ ...b, [jar]: Math.max(0, (b[jar] as number) - cents) } as any));
    const now = new Date().toISOString();
    setTransactions(t=>[...t, { id: now, jar, type:'spend', amount: cents, note, createdAt: now }]);
  }

  async function reset(){
    setBalances(DEFAULT.balances);
    setTransactions([]);
    await AsyncStorage.removeItem('brightbanker_state');
  }

  async function reload(){
    const raw = await AsyncStorage.getItem('brightbanker_state');
    if(raw){
      try{
        const parsed = JSON.parse(raw);
        setBalances(parsed.balances || DEFAULT.balances);
        setTransactions(parsed.transactions || []);
      }catch{}
    }
  }

  return <CTX.Provider value={{ balances, transactions, kids, lastDeposit, addDeposit, addSpend, reload, reset }}>{children}</CTX.Provider>;
}

export const useMoney = () => useContext(CTX);
