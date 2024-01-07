import React from 'react'
import { View } from 'react-native'
import { useColor } from '~theme/theme'

const CBackground = ({ children, style }: any) => {
	const color = useColor()
	return (
		<View style={{ flex: 1, backgroundColor: color.background, ...style }}>
			{children}
		</View>
	)
}

export default CBackground
