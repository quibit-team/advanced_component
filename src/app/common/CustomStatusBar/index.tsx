import React, { useEffect } from 'react'
import { Platform, View, StatusBar } from 'react-native'
import { useThemeContext } from 'src/theme/ThemeContextProvider'

import { UI } from '~constants'
import { useColor } from '~theme/theme'
import { isIphone } from '~utils/utilities'

const CustomStatusBar = ({ style }: any) => {
	const color = useColor()
	const { themeType } = useThemeContext()
	useEffect(() => {
		StatusBar.setBarStyle(
			isIphone
				? 'dark-content'
				: themeType === 'dark'
				? 'light-content'
				: 'dark-content'
		)
	}, [])

	return (
		<View
			style={{
				zIndex: UI.C_STATUS_BAR_ZINDEX,
				height: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
				backgroundColor: color.background,
				marginTop: Platform.OS === 'ios' ? 0 : 0,
				...style,
			}}>
			<StatusBar
				backgroundColor={color.background}
				translucent
				barStyle={
					Platform.OS === 'ios'
						? themeType === 'dark'
							? 'light-content'
							: 'dark-content'
						: themeType === 'dark'
						? 'light-content'
						: 'dark-content'
				}
			/>
		</View>
	)
}

export default React.memo(CustomStatusBar)
