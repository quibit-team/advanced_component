import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useColor } from '~theme/theme'

const CustomHeaderSheet = () => {
	const color = useColor()
	return (
		<View style={styles.header}>
			<View style={[styles.divider, { backgroundColor: color.border }]} />
		</View>
	)
}
const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
	},
	divider: {
		width: 50,
		height: 3,
	},
})

export default CustomHeaderSheet
