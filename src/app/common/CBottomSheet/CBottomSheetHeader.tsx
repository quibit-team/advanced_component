import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { FONTS, useColor } from '~theme/theme'
import IconComp from '../IconComp'

const CBottomSheetHeader = ({
	closeModal,
	title,
	content,
	noSubtitle,
	style,
	textStyle,
}: any) => {
	const color = useColor()
	const { t } = useTranslation()
	return (
		<View
			style={[
				styles.header,
				{ borderBottomColor: color.gray, ...style },
			]}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{content ? (
					<Text
						style={{
							...FONTS.h3,
							color: color.title,
							marginRight: 5,
							...textStyle,
						}}>
						{content}
					</Text>
				) : null}
				<Text
					style={{
						...FONTS.h3,
						color: color.title,
						lineHeight: 25,
						...textStyle,
					}}>
					{noSubtitle ? title : t(title)}
				</Text>
			</View>
			<TouchableOpacity
				onPress={() => {
					closeModal && closeModal()
				}}
				style={[styles.closeBtn, { backgroundColor: color.gray }]}>
				<IconComp
					type={'Feather'}
					name={'x'}
					color={color.title}
					size={14}
				/>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		paddingHorizontal: 10,
		paddingBottom: 7,
	},
	closeBtn: {
		padding: 5,
		borderRadius: 50,
	},
})
export default CBottomSheetHeader
