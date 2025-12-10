import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { User } from '../models/User';
import { dbConnect } from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export async function signToken(userId: string){
  return jwt.sign({ uid: userId }, JWT_SECRET, { expiresIn: '7d' });
}

export async function requireAuth(req: NextRequest){
  const auth = req.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) throw new Error('Unauthorized');
  const payload = jwt.verify(token, JWT_SECRET) as any;
  await dbConnect();
  const user = await User.findById(payload.uid);
  if (!user) throw new Error('Unauthorized');
  return user;
}
