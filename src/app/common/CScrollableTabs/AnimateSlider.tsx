import React from 'react'
import { Animated } from 'react-native'
import { useTheme } from 'react-native-paper'

const AnimateSlider = ({
	standardSize,
	translateX,
	indicatorScale,
	tColor,
}: any) => {
	const theme = useTheme()
	return (
		<Animated.View
			style={{
				position: 'absolute',
				backgroundColor: tColor ? tColor : theme.colors.tertiary,
				height: 1.5,
				bottom: 0,
				width: standardSize,
				transform: [
					{
						translateX,
					},
					{
						scaleX: indicatorScale,
					},
				],
			}}
		/>
	)
}

export default AnimateSlider
