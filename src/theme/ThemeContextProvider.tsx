import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import {
	NavigationContainer,
	Theme as NavigationTheme,
} from '@react-navigation/native'
import { getScheme, setScheme } from './themeStorage'
import { darkTheme, lightTheme } from './theme'

import { deepLinking } from '~utils/deepLinking'
import { navigationRef } from '~utils/utilities'

export type ThemeType = 'dark' | 'light'

export interface ThemeContextValue {
	theme: NavigationTheme
	themeType: ThemeType
	isDarkTheme: boolean
	toggleThemeType: () => void
	setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextValue>({
	theme: lightTheme,
	themeType: 'light',
	isDarkTheme: false,
	setThemeType: () => {},
	toggleThemeType: () => {},
})


export const useThemeContext = () => useContext(ThemeContext)

export interface ThemeContextProviderProps {
	children: React.ReactNode
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [themeType, setThemeType] = useState<ThemeType>('light')
	useEffect(() => {
		const getThemeType = async () => {
			const themeTypeFromStorage = await getScheme()
			setThemeType(themeTypeFromStorage as ThemeType)
		}
		getThemeType()
	}, [])

	const toggleThemeType = useCallback(() => {
		setThemeType((prev: any) => {
			const newThemeType = prev === 'dark' ? 'light' : 'dark'
			setScheme(newThemeType)
			return newThemeType
		})
	}, [])

	const isDarkTheme = useMemo(() => themeType === 'dark', [themeType])
	const theme = useMemo(
		() => (isDarkTheme ? darkTheme : lightTheme),
		[isDarkTheme]
	)

	return (
		<NavigationContainer
			linking={deepLinking}
			theme={theme}
			ref={navigationRef}>
			<PaperProvider theme={theme}>
				<ThemeContext.Provider
					value={{
						theme,
						themeType,
						isDarkTheme,
						setThemeType,
						toggleThemeType,
					}}>
					{children}
				</ThemeContext.Provider>
			</PaperProvider>
		</NavigationContainer>
	)
}
export default ThemeContextProvider
