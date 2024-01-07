import React from 'react'
import { Switch, Platform } from 'react-native'
import { useColor } from '~theme/theme'
// import { Switch } from 'react-native-paper'
const CSwitch = ({ filter, setFilter, action, style, disabled }: any) => {
	const color = useColor()
	return (
		<Switch
			trackColor={{
				false: color.border,
				true: color.primary,
			}}
			thumbColor={'#fff'}
			disabled={disabled}
			ios_backgroundColor={color.border}
			onValueChange={value => {
				if (setFilter) {
					setFilter(!filter)
				}
				if (action) {
					action(filter)
				}
			}}
			value={filter}
			style={{
				transform: [
					{ scaleX: Platform.OS === 'ios' ? 0.7 : 0.93 },
					{ scaleY: Platform.OS === 'ios' ? 0.6 : 0.93 },
				],
				...style,
			}}
		/>
	)
}

export default React.memo(CSwitch)
