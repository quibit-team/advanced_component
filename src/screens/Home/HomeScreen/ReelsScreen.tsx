import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'

const ReelsScreen = () => {
	const colors = useColor()
	return (
		<View style={styles.container}>
			<Text style={{ ...FONTS.h3, color: '#FFF' }}>
				Reels Screen
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default ReelsScreen
