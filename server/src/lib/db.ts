import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error('Missing MONGODB_URI');

let conn: typeof mongoose | null = null;

export async function dbConnect(){
  if (conn) return conn;
  conn = await mongoose.connect(MONGODB_URI);
  return conn;
}
