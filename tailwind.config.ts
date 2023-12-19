import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightPink: '#FFEFF1',
        darkPink: '#E29EA6',
        maroon: '#C33458',
        lavender: '#F6CFFF',
        lightPurple: '#B387BD',
        darkPurple: '#2B173D',
        yellow: '#FFD231',
        orange: '#FF975C'
      }
    },
    fontFamily: {
      maple: [ "maple", "sans-serif" ]
    },
    gridRowStart: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridRowEnd: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    }
  },
  plugins: [],
}
export default config
