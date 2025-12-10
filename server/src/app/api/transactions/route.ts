import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/src/lib/auth';
import { Transaction } from '@/src/models/Transaction';

export async function GET(req: NextRequest){
  try{
    await requireAuth(req);
    const { searchParams } = new URL(req.url);
    const kidId = searchParams.get('kidId');
    const q = kidId ? { kidId } : {};
    const list = await Transaction.find(q).sort({ createdAt: -1 }).limit(100);
    return NextResponse.json({ transactions: list });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
