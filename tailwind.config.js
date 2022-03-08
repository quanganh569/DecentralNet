const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  mode: 'jit',
  content: ['./node_modules/flowbite/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    boxShadow: {
      '4xl': '0px 0px 10px 4px rgba(0, 0, 0, 0.35)',
      green: '0px 0px 2px rgba(0, 198, 162, 0.5)',
      dark: '0px 0px 10px rgba(0, 0, 0, 0.15)',
    },

    extend: {
      backgroundImage: (theme) => ({
        farmSearch: 'linear-gradient(106.25deg, #00FFD1 6.88%, #00BA98 81.93%)',
        stableTab: 'linear-gradient(360deg, #00C6A2 0%, #008B72 100%)',
        primaryGradient: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
        buttonGradientBg: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
        darkGradientBg: 'linear-gradient(180deg, #1D2932 0%, #001320 100%)',
        darkGradientHoverBg:
          'linear-gradient(180deg, #24313A 0%, #14212B 100%)',
      }),
     
      colors: {
        primary: '#10B981',
        primaryScale: colors.green,
        secondary: '#F9FAFB',
        secondaryScale: colors.gray,
        darkText: colors.gray['600'],
        inputBg: colors.gray['100'],
        inputText: '#374151',
        hoverGray: '#F3F4F6',
        buttonBg: '#10B981',
        buttonText: '#F9FAFB',
        greenLight: '#00C08B',
        greenOpacity100: 'rgba(2, 109, 97, 1)',
        whiteOpacity85: 'rgba(255, 255, 255, 0.85)',
        blackLight: '#003648',
        greenLight1: '#01C08B',
        cardBg: '#1D2932',
        chartBg: '#001320',
        warn: '#DEA550',
        error: '#DE5050',
        gradientFrom: '#00c6a2',
        gradientTo: '#008b72',
        gradientFromHover: '#00D6AF',
        gradientToHover: '#00967B',
        poolRowHover: '#001320',
        primaryText: '#7E8A93',
        inputDarkBg: 'rgba(0, 0, 0, 0.2)',
        navHighLightBg: '#304452',
        navHighLightText: '#C6D1DA',
        slipBg: '#3e4e59',
        farmText: '#73818B',
        farmSplitLine: '#314351',
        farmDark: '#2B3A44',
        framBorder: '#00C6A2',
        farmSbg: '#2F3D47',
        farmRound: '#B3C2CC',
        farmTopRight: '#008870',
        datebg: '#637684',
        xrefbg: '#0F1D27',
        greenColor: '#00C6A2',
        xrefTab: '#293741',
        borderColor: '#7e8a93',
        warnColor: '#DE9450',
        acccountTab: '#0F1D27',
        acccountBlock: '#293741',
        xREFColor: '#A7ABAD',
        purple: '#8c78ff',
        blueTip: '#0A7AFF',
        darkGreenColor: '#009A2B',
        riskTextColor: '#BEBEBE',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
     
    },
    plugins: [require('flowbite/plugin')],
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      borderWidth: ['hover'],
      backgroundImage: ['hover'],
      cursor: ['disabled'],
      padding: ['last'],
      display: ['hover'],
    },
  },
};
