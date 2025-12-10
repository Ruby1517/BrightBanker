import { NextResponse } from 'next/server';
import { dbConnect } from '@/src/lib/db';
import { User } from '@/src/models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '@/src/lib/auth';

export async function POST(req: Request){
  try{
    const body = await req.json();
    const { email, password } = body;
    if(!email || !password) return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    await dbConnect();
    const user = await User.findOne({ email });
    if(!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if(!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    const token = await signToken(user._id.toString());
    return NextResponse.json({ token });
  }catch(e:any){
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
