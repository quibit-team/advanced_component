import React from 'react'
import CheckBox from '@react-native-community/checkbox'
import { COLORS, useColor } from '~theme/theme'

const CCheckBox = ({
	value,
	setValue,
	style,
	boxType,
	action,
	disabled,
	fillColor,
}: any) => {
	const color = useColor()
	return (
		<CheckBox
			disabled={disabled}
			value={value}
			lineWidth={1}
			onAnimationType="fill"
			offAnimationType="fill"
			onFillColor={fillColor ? fillColor : color.primary}
			onCheckColor={COLORS.white}
			boxType={boxType ? boxType : 'circle'}
			tintColors={{ true: color.primary, false: color.content }}
			onValueChange={e => {
				setValue && setValue(!value)
				action && action(e)
			}}
			style={{
				transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
				height: 20,
				width: 20,
				marginRight: 5,
				...style,
			}}
		/>
	)
}

export default React.memo(CCheckBox)
