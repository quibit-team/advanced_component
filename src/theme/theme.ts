import { MD3DarkTheme, DefaultTheme, useTheme } from 'react-native-paper'
import { DarkTheme, DefaultTheme as NaviTheme } from '@react-navigation/native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const useColor = () => {
	const theme = useTheme<any>()
	return theme.colors
}
export const TopBottomShadow = {
	shadowRadius: 2,
	shadowOffset: {
		width: 0,
		height: -5,
	},
	elevation: 2,
	shadowOpacity: 0.2,
}
// rgb(118, 99, 252) primary
export const lightTheme = {
	...NaviTheme,
	...DefaultTheme,
	colors: {
		...NaviTheme.colors,
		...DefaultTheme.colors,
		primary: '#7663FC', // use
		primaryOpacity: '#dedafe',
		secondary: '#0095FF',
		title: '#414141', // use
		content: '#6B6B6B', // use
		body: '#888888',
		description: '#F1F2F6',
		border: '#D1D1D1', // use
		shadow: '#bbb',
		background: '#FFFFFF', // use
		bottomTab: '#C1C1C1',
		opacity: 'rgba(200,200,200,0.2)', // use
		bottomSheet: '#ffffff',
		input: '#f2f7fa',
		topShadowColor: '#C1C1C1',
		gray: '#F1F1F1',
		card: '#ffffff',
		postBackground: '#F9F9F9',
		whisper: '#FFC6EC',
		btn: '#E6E6E6', // use
		view: '#F4F4F4', // use
	},
}
export const darkTheme = {
	...DarkTheme,
	...MD3DarkTheme,
	colors: {
		...DarkTheme.colors,
		...MD3DarkTheme.colors,
		primary: '#7663FC',
		secondary: '#0095FF',
		title: '#E4E6EA',
		content: '#D1D1D1',
		body: '#A6A6A6',
		description: '#3a3b3c',
		border: '#404040',
		shadow: '#333333',
		background: '#22272A',
		bottomTab: '#999',
		opacity: 'rgba(0,0,0,0.2)',
		bottomSheet: '#171B26',
		input: '#222222',
		topShadowColor: '#333333',
		gray: '#2D3038',
		card: '#010911',
		postBackground: '#010111',
		whisper: '#E75480',
		btn: '#2C303E',
		view: '#A5A5A5',
	},
}

export const COLORS = {
	primary: '#8D7DFF',
	secondary: '#0095FF', // dodgerblue
	themeDark: '#7663FC',
	themeLight: '#3B5FFF',

	bgDark: '#14171A',
	bgLight: '#FFFFFF',
	bgDarkOpacity: 'rgba(28,28,28,0.05)',
	bgLightOpacity: 'rgba(255,255,255,0.05)',
	inputDark: '#181424',
	inputLight: '#f1f1f1',
	borderLight: '#eee',
	borderDark: '#aaa',

	bottomDarkSheet: '#171B26',
	bottomLightSheet: '#E6E6E6',
	btnDark: '#2C303E',
	btnLight: '#E6E6E6',
	cardLight: '#F4F7FA',
	cardDark: '#0e101c',

	darkRed: '#DA2B41',
	lightRed: '#EF454A',

	darkBlue: '#001B43 ',
	lightBlue: '#00ADF2',

	darkGreen: '#213432',
	lightGreen: '#24ae64',

	lightAsk: '#F5E1E2',
	lightBid: '#E0EDE6',
	darkAsk: '#513139',
	darkBid: '#2D463E',

	black: '#000000',
	white: '#ffffff',
	gray: '#2D3038',

	lightGray: '#F1F1F1',
	lightGray1: 'silver',
	lightGray2: '#EEE',
	lightGray3: '#AAA',
	lightGray4: '#666',
}

export const SIZES = {
	h1: 30,
	h2: 24,
	h3: 20,
	h4: 18,
	h5: 16,
	h6: 14,
	h7: 12,
	h8: 10,
	h9: 8,
	width,
	height,
}

// npx react-native-asset
export const FONTS = {
	h0: {
		fontSize: 25.92,
		fontFamily: 'Roboto-Bold',
		lineHeight: 29.6,
		color: '#414141',
	},
	h1: {
		fontSize: 22.66,
		fontFamily: 'Roboto-Bold',
		lineHeight: 26.03,
		color: '#414141',
	},
	h2: {
		fontSize: 18.66,
		fontFamily: 'Roboto-Regular',
		lineHeight: 26.03,
		color: '#414141',
	},
	h3: {
		fontSize: 16,
		fontFamily: 'Roboto-Regular',
		// fontFamily: 'Roboto-Regular, NotoSansMyanmar-Regular',
		color: '#414141',
		lineHeight: 20.03,
	},
	h4: {
		fontSize: 14,
		fontFamily: 'Roboto-Regular',
		color: '#414141',
		lineHeight: 19.6,
	},
	h5: {
		fontSize: 14,
		fontFamily: 'Roboto-Regular',
		color: '#6B6B6B',
		lineHeight: 16.8,
	},
	h6: {
		fontSize: 12,
		fontFamily: 'Roboto-Regular',
		color: '#A6A6A6',
		lineHeight: 16.8,
	},
	h7: {
		fontSize: 10.5,
		fontFamily: 'Roboto-Regular',
		color: '#414141',
		lineHeight: 14.6,
	},
	h8: {
		fontSize: 8,
		fontFamily: 'Roboto-Regular',
		color: '#777',
		lineHeight: 14.6,
	},
}

const appTheme = { COLORS, SIZES, FONTS, TopBottomShadow }

export default appTheme
