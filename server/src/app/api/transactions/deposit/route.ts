import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/src/lib/auth';
import { Kid } from '@/src/models/Kid';
import { Transaction } from '@/src/models/Transaction';

export async function POST(req: NextRequest){
  try{
    await requireAuth(req);
    const body = await req.json();
    const { kidId, save, spend, share } = body; // cents
    const kid = await Kid.findById(kidId);
    if(!kid) return NextResponse.json({ error: 'Kid not found' }, { status: 404 });
    kid.jars.save += (save||0);
    kid.jars.spend += (spend||0);
    kid.jars.share += (share||0);
    await kid.save();
    const created:any = [];
    if(save) created.push(await Transaction.create({ kidId, jar:'save', type:'deposit', amount: save }));
    if(spend) created.push(await Transaction.create({ kidId, jar:'spend', type:'deposit', amount: spend }));
    if(share) created.push(await Transaction.create({ kidId, jar:'share', type:'deposit', amount: share }));
    return NextResponse.json({ ok: true, created });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
