export const theme = {
	colors: {
		darkGreen: '#2C3930',
		mediumGreen: '#3F4F44',
		copper: '#A27B5C',
		cream: '#DCD7C9',
		iron: '#808080',

		background: '#1D241F',
		text: '#DCD7C9',
		secondary: '#A27B5C',
		accent: '#3F4F44',

		link: '#A27B5C',
		scrollbarTrack: '#2C3930',
		scrollbarThumb: '#A27B5C',
		hover: '#3F4F44',
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
