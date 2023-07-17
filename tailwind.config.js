/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ct-primary': {
          '01': '#FF8413',
          '02':'#e57e70',
          "03":"#FFDBC3",
          "04":"#FFF5E0"
          
        },
        'ct-secondary': {
          '01': '#FF6B00',
          '02': '#FFB800',
          '03': '#CC5600',
        },
        'ct-neutral': {
          '01': '#FFFFFF',
          '02': '#DFDFDF',
          '03': '#C4C4C4',
          '04': '#7F7F7F',
          '05': '#333333',
          '06': "#B2B2B2"
        },
        'ct-solid-blue': {
          '01': '#F7FCFF',
          '02': '#E8F3FF',
        },
        'ct-solid-red': {
          '01': '#FF4545',
          '02': '#D10000',
        },
        'ct-solid-yellow': {
          '01': '#FFE177',
          '02': '#FFF6D6',
        },
        'ct-solid-green': {
          '01': '#499D4E',
        },

        'ct-white': '#FFFFFF',
        'ct-text-primary':'#190933'
      },
      borderRadius: {
        '2.5xl': '1.25rem',

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-light': {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '21px',
        },
        '.text-light-italic': {
          fontStyle: 'italic',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '21px',
        },
        '.text-bold-italic': {
          fontStyle: 'italic',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '36px',
        },
        '.text-line-through-12px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '18px',
          textDecorationLine: 'line-through',
        },
        '.text-line-through-16px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '140%',
          textDecorationLine: 'line-through',
        },
        '.text-line-through-18px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '27px',
          textDecorationLine: 'line-through',
        },
        /* text 10px  */
        '.bodytext-10px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '10px',
          lineHeight: '13px',
        },

        /* text 12px  */
        '.bodytext-12px-light': {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '12px',
          lineHeight: '18px',
        },
        '.bodytext-12px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '18px',
        },
        '.bodytext-12px-medium': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '140%',
        },
        '.bodytext-12px-bold': {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '12px',
          lineHeight: '140%',
        },

        /* text 13px  */
        '.bodytext-13px-light': {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '13px',
          lineHeight: '20px',
        },
        '.bodytext-13px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '13px',
          lineHeight: '20px',
        },
        '.bodytext-13px-bold': {
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '13px',
          lineHeight: '20px',
        },

        /* text 14px  */
        '.bodytext-14px-light': {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '21px',
        },
        '.bodytext-14px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '140%',
        },
        '.bodytext-14px-medium': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '20px',
        },
        '.bodytext-14px-semibold': {
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '21px',
        },
        '.bodytext-14px-bold': {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '21px',
        },

        /* text 16px  */
        '.bodytext-16px-light': {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '24px',
        },
        '.bodytext-16px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '140%',
        },
        '.bodytext-16px-medium': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '20px',
        },
        '.bodytext-16px-bold': {
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '20px',
        },
        /* text 18px  */
        '.bodytext-18px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '27px',
        },
        '.bodytext-18px-light': {
          fontStyle: 'light',
          fontWeight: '300',
          fontSize: '18px',
          lineHeight: '27px',
        },
        '.bodytext-18px-bold': {
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '140%px',
        },
        '.bodytext-18px-black-bold': {
          fontStyle: 'bold',
          fontWeight: '900',
          fontSize: '18px',
          lineHeight: '27px',
        },
        '.bodytext-18px-black': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '27px',
        },
        /* text 24px  */
        '.bodytext-24px-black': {
          fontStyle: 'normal',
          fontWeight: '900',
          fontSize: '24px',
          lineHeight: '140.84 %',
        },
        '.bodytext-24px-black-bold': {
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '140.84 %',
        },

        /* Heading h1 */
        '.heading-h1': {
          fontStyle: 'normal',
          fontWeight: '800',
          fontSize: '44px',
          lineHeight: '66px',
        },
        /* Heading h2 */
        '.heading-h2': {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '48px',
        },
        /* Heading h3 */
        '.heading-h3': {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '33px',
          lineHeight: '48px',
        },
        /* Heading h4 */
        '.heading-h4': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '32px',
          lineHeight: '48px',
        },
        /* Heading h5 */
        '.heading-h5': {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '36px',
        },

        /* Link 12px */
        '.link-12px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '18px',
          /* identical to box height, or 150% */
          textDecorationLine: 'underline',
        },

        /* Link 14px-italic */
        '.link-14px-italic': {
          fontStyle: 'italic',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '24px',
          /* identical to box height, or 171% */
          textDecorationLine: 'underline',
        },
        /* Link 14px*/
        '.link-14px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '24px',
          /* identical to box height, or 171% */
          textDecorationLine: 'underline',
        },
        /* Link 16px*/
        '.link-16px': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
          /* identical to box height, or 171% */
          textDecorationLine: 'underline',
        },
      })
    })
  ],
}
