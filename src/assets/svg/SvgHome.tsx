import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useColor } from '~theme/theme'

const SvgHome = ({ focused }) => {
	const color = useColor()
	return (
		<Svg
			width="30"
			height="30"
			viewBox="0 0 33 33"
			fill={focused ? color.primary : color.content}>
			<Path
				fill={focused ? color.primary : color.content}
				d="M15.8,5h0a1.27,1.27,0,0,1,.79.28l8.94,7.29a1.23,1.23,0,0,1,.46,1v12a1.25,1.25,0,0,1-1.25,1.25h-18a1.25,1.25,0,0,1-1.24-1.25v-12a1.19,1.19,0,0,1,.47-1l9-7.28A1.22,1.22,0,0,1,15.8,5m0-1a2.25,2.25,0,0,0-1.4.49l-9,7.28a2.19,2.19,0,0,0-.84,1.75v12A2.25,2.25,0,0,0,6.75,27.8h18A2.25,2.25,0,0,0,27,25.55v-12a2.27,2.27,0,0,0-.83-1.74L17.22,4.55A2.23,2.23,0,0,0,15.8,4Z"
			/>
			<Path
				fill={focused ? color.primary : color.content}
				d="M16.75,18.94A1.24,1.24,0,0,1,18,20.19V26.8H13.63V20.19a1.25,1.25,0,0,1,1.25-1.25h1.87m0-1H14.88a2.25,2.25,0,0,0-2.25,2.25V27.8H19V20.19a2.26,2.26,0,0,0-2.24-2.25Z"
			/>
		</Svg>
	)
}

export default SvgHome
