import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FONTS, useColor } from '~theme/theme'
import IconComp from '../IconComp'

const PopupContainer = ({ type, title, content, titleColor, contentColor }) => {
	const color = useColor()
	const tColor = titleColor ? titleColor : color.title
	const CColor = contentColor ? contentColor : color.content
	return (
		<View style={[styles.container, { backgroundColor: color.background }]}>
			{type ? (
				<IconComp
					iconColor={type}
					iconName={'checkcircleo'}
					type={'AntDesign'}
					iconSize={14}
					passedStyle={{ marginRight: 10, marginTop: 3 }}
				/>
			) : null}

			<View>
				{title?.length ? (
					<Text style={[styles.title, { color: tColor }]}>
						{title}
					</Text>
				) : null}
				{content?.length ? (
					<Text style={[styles.content, { color: CColor }]}>
						{content}
					</Text>
				) : null}
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		width: 'auto',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingVertical: 8,
		paddingHorizontal: 15,
		marginHorizontal: 20,
		shadowColor: '#333',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.3,
		elevation: 2,
		flexDirection: 'row',
	},
	title: {
		...FONTS.h6,
		fontWeight: '400',
		lineHeight: 30,
	},
	content: {
		...FONTS.h6,
		marginTop: 3,
		fontWeight: '300',
		lineHeight: 28,
	},
})
export default React.memo(PopupContainer)
