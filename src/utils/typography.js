import Typography from "typography"
import stowLakeTheme from 'typography-theme-stow-lake'

const typography = new Typography(stowLakeTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
