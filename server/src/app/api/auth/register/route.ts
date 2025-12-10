import { NextResponse } from 'next/server';
import { dbConnect } from '@/src/lib/db';
import { User } from '@/src/models/User';
import { Family } from '@/src/models/Family';
import { signToken } from '@/src/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req: Request){
  try{
    const body = await req.json();
    const { email, password, familyName } = body;
    if(!email || !password) return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    await dbConnect();
    const exists = await User.findOne({ email });
    if (exists) return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    const fam = await Family.create({ name: familyName || 'My Family' });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash, familyId: fam._id });
    fam.parentIds = [user._id];
    await fam.save();
    const token = await signToken(user._id.toString());
    return NextResponse.json({ token });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
