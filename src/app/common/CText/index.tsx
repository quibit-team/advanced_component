import React from 'react'
import { Text, View } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'

const CText = ({ style, title }: any) => {
	const color = useColor()
	return (
		<View>
			<Text style={{ ...FONTS.h4, color: color.title, ...style }}>
				{title}
			</Text>
		</View>
	)
}

export default React.memo(CText)
