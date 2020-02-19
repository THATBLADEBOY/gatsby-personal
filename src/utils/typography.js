import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

// fairyGateTheme.overrideThemeStyles: ({ rhythm }, options, styles) => ({
//     'h2,h3': {
//         marginBottom: rhythm(1/2),
//         marginTop: rhythm(2),
//     }
// })

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
