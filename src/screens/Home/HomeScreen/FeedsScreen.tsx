import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'

const FeedsScreen = () => {
	const colors = useColor()
	return (
		<View style={styles.container}>
			<Text style={{ ...FONTS.h3, color: '#FFF' }}>
				Feeds Screen
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'brown',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default FeedsScreen
