# BrightBanker (Expo SDK 54 Starter)

Kid-friendly budgeting app (Save/Spend/Share) with goals and a simple AI coach stub. Built with **Expo SDK 54** + React Native 0.81 + TypeScript. Local-only storage (AsyncStorage).

## Quick start
1. Install Node 18+ and pnpm or npm.
2. Install dependencies:
   ```bash
   pnpm install   # or npm install
   ```
3. Run dev:
   ```bash
   pnpm start     # or npm start
   ```
4. Open in Expo Go or run an iOS/Android simulator.

## Features
- Home: live balances for Save/Spend/Share
- Add Money: slider + presets (50/40/10 etc.)
- Goals: “weeks to goal” estimator
- Coach: offline kid-friendly stub (replace with AI API)
- Parent Dashboard: recent activity + reset

## Notes for SDK 54
- SDK 54 pairs with **React Native 0.81** and enables **Android edge-to-edge** by default.
- If peer dependency warnings appear, run `npx expo install` to auto-fix versions.

## Where to add AI
- Replace `basicCoach` in `src/screens/Coach.tsx` with your API call (moderate + age-appropriate prompts).

---

© 2025 BrightBanker Starter
