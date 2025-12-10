import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/src/lib/auth';
import { Kid } from '@/src/models/Kid';
import { Transaction } from '@/src/models/Transaction';

export async function POST(req: NextRequest){
  try{
    await requireAuth(req);
    const body = await req.json();
    const { kidId, jar, amount, note } = body;
    const kid = await Kid.findById(kidId);
    if(!kid) return NextResponse.json({ error: 'Kid not found' }, { status: 404 });
    if(!['save','spend','share'].includes(jar)) return NextResponse.json({ error: 'Invalid jar' }, { status: 400 });
    if(amount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    if(kid.jars[jar] < amount) return NextResponse.json({ error: 'Insufficient funds' }, { status: 400 });
    kid.jars[jar] -= amount;
    await kid.save();
    const tx = await Transaction.create({ kidId, jar, type:'spend', amount, note });
    return NextResponse.json({ ok: true, tx });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
