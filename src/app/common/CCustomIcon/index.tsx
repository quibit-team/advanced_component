import React from 'react'
import { View } from 'react-native'

import CImage from '../CImage'
import { useColor } from '~theme/theme'

const CCustomIcon = ({ src, vStyle, style }: any) => {
	const theme = useColor()
	return (
		<View style={vStyle}>
			<CImage src={src} style={{ tintColor: theme.title, ...style }} />
		</View>
	)
}

export default CCustomIcon
