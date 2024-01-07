import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useCallback } from 'react'

import { COLORS } from '~theme'
import { useColor, FONTS } from '~theme/theme'
import { firstUpperChar } from '~utils/utilities'
import IconComp from '../IconComp'

const CCheckList = ({ checkList, check, setCheck }) => {
	const color = useColor()

	const renderItem = ({ item }) => {
		const isSelected = item === check

		return (
			<View style={styles.list}>
				<Text style={{ ...FONTS.h3, color: color.title }}>
					{firstUpperChar(item.toLowerCase())}
				</Text>
				<TouchableOpacity
					onPress={() => {
						setCheck(item)
					}}
					style={[
						styles.checkBtn,
						{
							backgroundColor: isSelected
								? color.secondary
								: 'transparent',
							borderWidth: isSelected ? 0 : 1,
							borderColor: color.border,
						},
					]}>
					{isSelected ? (
						<IconComp
							type={'AntDesign'}
							name={'check'}
							color={COLORS.white}
							size={16}
						/>
					) : null}
				</TouchableOpacity>
			</View>
		)
	}
	const keyExtractor = useCallback((_, index) => index.toString(), [])
	return (
		<View style={styles.container}>
			<FlatList
				data={checkList}
				showsVerticalScrollIndicator={false}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				ListFooterComponent={<View style={{ height: 80 }} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {},
	list: {
		flexDirection: 'row',
		marginTop: 16,
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},
	checkBtn: {
		width: 24,
		height: 24,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
})

export default CCheckList
