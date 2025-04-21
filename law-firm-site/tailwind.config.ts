import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',
        light: '#F1F1F1',
        emerald: '#2A9D8F',
        white: '#FFFFFF',
        slate: '#6D7278',
        crimson: '#E63946',
        charcoal: '#222222',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    }
  },
  plugins: [typography]
}

export default config
