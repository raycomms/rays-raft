import Typography from "typography"

const typography = new Typography({
headerFontFamily: ['Open Sans', 'sans-serif'],
bodyFontFamily: ['Open Sans', 'sans-serif'],

})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
