module.exports = {
  purge: [
      './src/**/*.html',
      './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
        colors: {
            'Dark_Blue' : '#2b3945',
            'Medium_Dark_Blue': '#202c37',
            'Very_Dark_Blue': '#111517',
            'Dark_Gray': '#858585',
            'Very_Light_Gray': '#fafafa',
            'White': '#ffffff',
        },
        height: {
            100: '25rem',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
