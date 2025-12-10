// Lightweight sound helper for coin SFX.
// To enable audio, install expo-av and add a coin sound at assets/coin.mp3
//   expo install expo-av
// Then place a small coin drop sound at assets/coin.mp3
// If expo-av or the asset is missing, this function safely no-ops.
export async function playCoinSfx(_times: number = 1) {
  // Placeholder: sound disabled by default to avoid bundling issues.
  // To enable sound effects:
  // 1) Add a coin sound file at assets/coin.mp3
  // 2) Install expo-av:  npx expo install expo-av
  // 3) Replace this stub with an implementation using expo-av's Audio.Sound
  return;
}
