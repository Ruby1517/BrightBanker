import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/src/lib/auth';
import { Kid } from '@/src/models/Kid';

export async function GET(req: NextRequest){
  try{
    const user = await requireAuth(req);
    const kids = await Kid.find({ familyId: user.familyId });
    const summary = kids.map(k=>({
      id: k._id,
      name: k.name,
      jars: k.jars
    }));
    return NextResponse.json({ kids: summary });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 401 });
  }
}
