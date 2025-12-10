// Shared client config for API base URL.
// Uses Expo public env var if present; falls back by platform.
import { Platform } from 'react-native';
import Constants from 'expo-constants';

function inferFromExpoHost(): string | null {
  try {
    const hostUri = (Constants.expoConfig as any)?.hostUri as string | undefined;
    if (!hostUri) return null;
    const host = hostUri.split(':')[0];
    return host ? `http://${host}:3000` : null;
  } catch { return null; }
}

const defaultBase = Platform.OS === 'ios'
  ? 'http://localhost:3000'
  : 'http://10.0.2.2:3000';

export const API_BASE: string = process.env.EXPO_PUBLIC_API_BASE ?? inferFromExpoHost() ?? defaultBase;
