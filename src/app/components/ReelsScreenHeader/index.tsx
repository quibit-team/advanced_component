import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '~theme'
import { useColor } from '~theme/theme'
import IconComp from '../IconComp'

const ReelsScreenHeader = () => {
	const colors = useColor()
	return (
		<View style={styles.container}>
			<Text style={[styles.title, { ...FONTS.h2, color: colors.title }]}>
				New Reel
			</Text>
			<TouchableOpacity style={styles.settingIcon}>
				<IconComp type={'Feather'} name={'settings'} size={24} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'green',
		paddingVertical: 10,
		paddingHorizontal: 16,
        position: 'relative'
	},
	title: {
		textAlign: 'center',
		fontWeight: '700',
	},
    settingIcon: {
        position: 'absolute',
        top: 10,
        left: 25
    }
})

export default ReelsScreenHeader
