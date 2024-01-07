import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '~theme/theme'

const CBadge = ({ count }) => {
	return (
		<View style={styles.container}>
			<Text
				style={{ ...FONTS.h6, fontWeight: '900', color: COLORS.white }}>
				{count}
			</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		width: 18.587,
		height: 18.587,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		backgroundColor: COLORS.lightRed,
		top: 5,
		right: 0,
	},
})

export default CBadge
