import React from 'react'
import { useTranslation } from 'react-i18next'

import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'

const CenterHeader = ({
	hCenterText,
	hCenterAction,
	noTranslate,
	hRight,
	hCenterStyle,
}) => {
	const { t } = useTranslation()
	const color = useColor()
	const hRightTrue = hRight ? { marginLeft: 40 } : { marginLeft: -20 }
	return (
		<View style={[styles.container, hRightTrue]}>
			{hCenterText ? (
				<Text
					style={{
						...FONTS.h2,
						color: color.title,
						fontWeight: '500',
						lineHeight: 30,
						...hCenterStyle,
					}}>
					{noTranslate ? hCenterText : t(hCenterText)}
				</Text>
			) : hCenterAction ? (
				hCenterAction
			) : null}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		flexDirection: 'row',
	},
})
export default CenterHeader
