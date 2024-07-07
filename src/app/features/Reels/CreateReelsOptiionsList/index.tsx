import { StyleSheet, View } from 'react-native'
import DummyData from './DummyData'
import { CreateReelsOptionsItem } from '~app/entities'
import { ScrollView } from 'react-native-gesture-handler'

const CreateReelsOptionsList = () => {
	return (
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={styles.optionsContainer}>
				{DummyData.map(item => {
					return (
						<View key={item.id}>
							<CreateReelsOptionsItem item={item} />
						</View>
					)
				})}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		marginTop: 10,
	},
	optionsContainer: {
		flexDirection: 'row',
	},
})

export default CreateReelsOptionsList
