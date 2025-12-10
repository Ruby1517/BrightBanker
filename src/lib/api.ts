import { API_BASE } from '../config';

export async function api(path: string, opts: RequestInit = {}){
  const url = `${API_BASE}/api${path}`;
  const res = await fetch(url, opts);
  if(!res.ok){
    let msg = `${res.status} ${res.statusText}`;
    try { const j = await res.json(); msg = j.error || msg; } catch {}
    throw new Error(msg);
  }
  try { return await res.json(); } catch { return null; }
}
