import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useColor } from '~theme/theme'

const SvgTools = ({ focused }) => {
	const color = useColor()
	return (
		<Svg
			id="Layer_2"
			data-name="Layer 2"
			width="38"
			height="38"
			viewBox="0 0 32 33">
			<Path
				fill={focused ? color.primary : color.content}
				d="M22.93,8.45a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1h4m0-1h-4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2v-4a2,2,0,0,0-2-2Z"
			/>
			<Path
				fill={focused ? color.primary : color.content}
				d="M22.93,17.45a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1h4m0-1h-4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2v-4a2,2,0,0,0-2-2Z"
			/>
			<Path
				fill={focused ? color.primary : color.content}
				d="M13.93,17.45a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1h4m0-1h-4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2v-4a2,2,0,0,0-2-2Z"
			/>
			<Path
				fill={focused ? color.primary : color.content}
				d="M11.93,8.45a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-1a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"
			/>
		</Svg>
	)
}

export default SvgTools
