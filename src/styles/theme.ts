// export const colors = {
//   bg: '#0b1020',
//   card: '#121a33',
//   text: '#e8f0ff',
//   sub: '#b6c4e6',
//   accent: '#3dd178',
//   warn: '#f5b942',
//   danger: '#ef4444'
// };

// export const spacing = (n: number) => n * 8;




export const colors = {
  // 🌈 Backgrounds
  bg: '#FFF8F0',         // soft cream background
  card: '#FFFFFF',       // white card with shadow
  header: '#FFE082',     // light golden header (sunshine tone)

  // 🖋️ Text
  text: '#333333',       // dark gray for readability
  sub: '#6B7280',        // medium gray for subtitles

  // 💰 Accent colors (friendly + motivating)
  accent: '#4ADE80',     // mint green (success / saving)
  accentDark: '#16A34A', // darker mint for active buttons
  spend: '#60A5FA',      // sky blue (spending)
  share: '#F87171',      // coral red (sharing)
  gold: '#FACC15',       // bright yellow-gold for highlights

  // ⚠️ System colors
  warn: '#FBBF24',       // amber
  danger: '#EF4444',     // red for warnings
};

export const fonts = {
  heading: 'ComicNeue-Bold',  // playful Google font
  body: 'ComicNeue-Regular',
};

export const spacing = (n: number) => n * 8;

// 💡 If you add custom fonts in Expo:
// 1. Install them in assets/fonts
// 2. Load via useFonts from expo-font
// 3. Apply using style={{ fontFamily: fonts.heading }}
