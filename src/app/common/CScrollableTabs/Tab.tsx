import React, { forwardRef } from 'react'
import { StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import { FONTS } from '~theme'

const Tab = forwardRef(
	(
		{ label, isFocused, opacity, onPress, fontSize, tColor }: any,
		ref: any
	) => {
		const theme = useTheme()
		return (
			<TouchableOpacity
				style={styles.btn}
				ref={ref}
				accessible
				accessibilityRole="button"
				accessibilityState={isFocused ? { selected: true } : {}}
				accessibilityLabel={label}
				activeOpacity={0.6}
				onPress={onPress}>
				<Animated.Text
					style={{
						...FONTS.h5,
						fontWeight: '600',
						fontSize,
						opacity,
						color: tColor ? tColor : theme.colors.tertiary,
					}}>
					{label}
				</Animated.Text>
			</TouchableOpacity>
		)
	}
)

const styles = StyleSheet.create({
	btn: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
		marginVertical: 0,
		marginHorizontal: 16,
	},
})

export default Tab
