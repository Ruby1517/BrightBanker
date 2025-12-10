# BrightBanker – Clean Setup (Windows, PowerShell)

1) Unzip this folder, then open PowerShell in it:
```
cd .\BrightBanker
```
2) Use **pnpm** only (recommended). If you don't have it:
```
npm i -g pnpm
```
3) Clean any partial installs (if re-running):
```
rd /s /q node_modules
del pnpm-lock.yaml 2>nul
del package-lock.json 2>nul
del yarn.lock 2>nul
```
4) Install deps:
```
pnpm install
```
5) Align Expo-recommended versions (optional but helpful):
```
pnpm dlx expo install
```
6) Start the app (uses the local Expo CLI):
```
pnpm start
```
or
```
npx expo start
```

> If you ever see "Cannot determine the project's Expo SDK version…", it means the `expo` package isn't installed in this project. Run `pnpm add expo@^54` and try again.

**Expected versions**
- Expo SDK 54 (expo 54.x)
- React Native 0.81.x
- React 19.1.0
- @types/react ^19.1.0

If you previously installed the old global CLI:
```
npm uninstall -g expo-cli
```

**Note:** React Native 0.81 bundles its own TypeScript types. Do NOT install `@types/react-native`.
