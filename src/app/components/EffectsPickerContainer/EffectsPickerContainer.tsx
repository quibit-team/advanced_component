import {
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'
import { useColor } from '~theme/theme'
import IconComp from '../IconComp'

const tabs = [
	'Trending',
	'New',
	'Tool',
	'Green Screen',
	'Funny',
	'Atmosphere',
	'Appearance',
	'Accessories',
	'Interactive',
	'Editing',
	'Animals',
	'AR',
	'Events',
	'Music',
]

const EffectsPickerContainer = ({ closeModal }) => {
	const color = useColor()

	return (
		<View style={styles.container}>
			{/* Header with icons */}
			<View style={styles.header}>
				<IconComp
					type="Feather"
					name="heart"
					color={color.title}
					size={24}
				/>
				<IconComp
					type="Feather"
					name="bookmark"
					color={color.title}
					size={24}
				/>
				<IconComp
					type="Feather"
					name="share"
					color={color.title}
					size={24}
				/>
				<TouchableOpacity
					onPress={closeModal}
					style={[styles.closeBtn, { backgroundColor: color.gray }]}>
					<IconComp
						type="Feather"
						name="x"
						color={color.title}
						size={24}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingTop: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	closeBtn: {
		padding: 5,
		borderRadius: 100,
		width: 32,
		height: 32,
	},
})

export default EffectsPickerContainer
