import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/src/lib/auth';
import { Kid } from '@/src/models/Kid';

export async function GET(req: NextRequest){
  try{
    const user = await requireAuth(req);
    const kids = await Kid.find({ familyId: user.familyId });
    return NextResponse.json({ kids });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 401 });
  }
}

export async function POST(req: NextRequest){
  try{
    const user = await requireAuth(req);
    const body = await req.json();
    const kid = await Kid.create({ familyId: user.familyId, name: body.name, age: body.age });
    return NextResponse.json({ kid });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
