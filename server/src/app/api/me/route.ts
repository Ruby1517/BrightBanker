import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/src/lib/auth';
import { Family } from '@/src/models/Family';

export async function GET(req: NextRequest){
  try{
    const user = await requireAuth(req);
    const fam = await Family.findById(user.familyId);
    return NextResponse.json({ user: { id: user._id, email: user.email, familyId: user.familyId }, family: fam });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 401 });
  }
}
