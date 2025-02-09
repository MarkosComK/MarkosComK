export const theme = {
	colors: {
		dark: '#282828',
		medium: '#3c3836',
		light: '#0a9396',
		xlight: '#94d2bd',
		cream: '#e9d8a6',
		green: '#B8BB26',
		background: '#282828',
		text: '#d5c4a1',
		textCopper: '#bb3e03',
		orange: '#ae2012',
		accent: '#9b2226',
		link: '#83a598',
		scrollbarTrack: '#001219',
		scrollbarThumb: '#005f73',
		hover: '#94d2bd',
	},
	spacing: {
		small: '0.5rem',
		medium: '1rem',
		large: '2rem',
	},
	breakpoints: {
		mobile: '768px',
		tablet: '1024px',
	}
}

export type Theme = typeof theme;
// For styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
