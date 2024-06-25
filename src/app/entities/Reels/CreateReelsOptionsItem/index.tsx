import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconComp } from '~app/components'

const CreateReelsOptionsItem = ({ item }) => {
	const navigation = useNavigation<any>()
	const onPressOption = () => {
		switch (item.title) {
			case 'Camera':
				navigation.navigate('CameraScreen')
				break
		}
	}
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onPressOption()}>
			<IconComp
				type={item.icon.type}
				name={item.icon.name}
				color={'#fff'}
				size={20}
			/>
			<Text style={[styles.title, { color: '#fff' }]}>{item.title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 90,
		height: 80,
		borderRadius: 20,
		backgroundColor: 'rgba(72, 70, 70, 0.4)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		marginLeft: 10,
	},
	title: {
		textAlign: 'center',
	},
})

export default CreateReelsOptionsItem
