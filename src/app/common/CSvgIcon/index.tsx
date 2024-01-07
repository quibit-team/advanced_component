import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CSvgIcon = ({ width, height, viewBox, fill, source }) => {
	return (
		<Svg width={width} height={height} viewBox={viewBox} fill="none">
			{source?.map((svg, index) => (
				<Path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={svg}
					fill={fill}
					key={index.toString()}
				/>
			))}
		</Svg>
	)
}

export default React.memo(CSvgIcon)
