import React from 'react'
import { Image } from 'react-native'

const CImage = ({ src, url, alt, resizeMode, style }: any) => {
	return (
		<Image
			source={url ? { url: url } : src}
			alt={`${alt}...`}
			resizeMode={resizeMode ? resizeMode : 'cover'}
			style={style}
		/>
	)
}

export default React.memo(CImage)
