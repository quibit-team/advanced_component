import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'

interface IProps {
	title?: any
	textStyle?: any
	style?: any
	onPress?: any
	icon?: any
}
const CButton = ({ title, style, textStyle, onPress, icon }: IProps) => {
	const color = useColor()
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				...style,
			}}>
			{title ? (
				<Text style={{ ...FONTS.h3, color: color.title, ...textStyle }}>
					{title}
				</Text>
			) : null}
			{icon ? icon : null}
		</TouchableOpacity>
	)
}

export default React.memo(CButton)
