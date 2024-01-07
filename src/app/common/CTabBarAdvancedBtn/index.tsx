import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'

import { TabSvg } from './TabSvg'

import { COLORS, useColor } from '~theme/theme'
import { isIphone } from '~utils/utilities'
import CBounceBtn from '../CBounceBtn'
import IconComp from '../IconComp'

type Props = BottomTabBarButtonProps & {
	bgColor?: string
}

const CTabBarAdvancedBtn: React.FC<Props> = ({ bgColor, ...props }) => {
	const color = useColor()
	return (
		<View style={styles.container} pointerEvents="box-none">
			<TabSvg color={bgColor} style={styles.background} />
			<CBounceBtn bounce={0.7}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: color.primary }]}
					onPress={props.onPress}>
					<IconComp
						type="FontAwesome"
						name={'plus'}
						color={COLORS.white}
					/>
				</TouchableOpacity>
			</CBounceBtn>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: 75,
		alignItems: 'center',
	},
	background: {
		position: 'absolute',
		top: isIphone ? 1 : 0,
	},
	button: {
		top: -20.5,
		justifyContent: 'center',
		alignItems: 'center',
		width: 45,
		height: 45,
		borderRadius: 27,
	},
})
export default CTabBarAdvancedBtn
