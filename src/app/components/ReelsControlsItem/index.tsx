import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CImage } from '~app/common'
import IconComp from '~app/common/IconComp'
import { FONTS } from '~theme'

const ReelsControlsItem = ({
	type,
	name,
	size,
	color,
	title,
	value,
	setValue,
	icon,
	src,
	action
}: any) => {

	const handleAction = () => {
		switch(action) {
			case 'flip': 
				setValue(value === 'front' ? 'back' : 'front');
				break
			case 'effects':
				setValue()
				break
		}
	}

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleAction}>
			<View style={styles.iconButton}>
				{icon ? (
					<IconComp
						type={type}
						name={name}
						size={size}
						color={color}
					/>
				) : (
					<View style={styles.card}>
						<CImage
							src={src}
							style={{
								width: '100%',
								height: '100%',
								borderRadius: 10,
							}}
							resize={'contain'}
						/>
					</View>
				)}
			</View>
			<Text style={{ ...FONTS.h4, color: '#fff' }}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 6,
	},
	iconButton: {
		marginVertical: 10,
	},
	card: {
		width: 50,
		height: 50,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
	},
})

export default ReelsControlsItem
