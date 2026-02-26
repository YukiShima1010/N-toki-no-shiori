/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 時の栞のブランドカラー（落ち着いた昔風の色調）
        vintage: {
          brown: '#8B7355',
          beige: '#D4C5B0',
          cream: '#F5EFE6',
          dark: '#3E2723',
          paper: '#FFF9F0',
        },
      },
      fontFamily: {
        serif: ['Shippori Mincho', 'serif'],
        sans: ['Shippori Mincho', 'serif'], // 全体を明朝体にするためsansも置き換え
      },      backgroundImage: {
        'washi': "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
