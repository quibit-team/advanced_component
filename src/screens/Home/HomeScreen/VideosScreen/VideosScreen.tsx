import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'

const VideosScreen = () => {
	const colors = useColor()
	return (
		<View style={styles.container}>
			<Text style={{ ...FONTS.h3,  color: '#FFF' }}>
				Videos Screen
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default VideosScreen
