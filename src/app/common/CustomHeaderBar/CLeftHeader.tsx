import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FONTS, useColor } from '~theme/theme'
import IconComp from '../IconComp'

const CLeftHeader = ({ hLeftText, HLeftAction }: any) => {
	const navigation = useNavigation()
	const color = useColor()

	return (
		<TouchableOpacity
			style={{
				alignItems: 'flex-end',
				justifyContent: 'center',
				height: '100%',
				minWidth: 50,
				paddingRight: 10,
			}}
			onPress={() => {
				if (navigation.canGoBack()) {
					navigation.goBack()
				}
			}}>
			{hLeftText ? (
				<Text
					style={{
						...FONTS.h5,
						color: color.title,
					}}>
					{hLeftText}
				</Text>
			) : HLeftAction ? (
				HLeftAction
			) : (
				<IconComp
					type={'Ionicons'}
					name={'chevron-back'}
					size={25}
					color={color.title}
				/>
			)}
		</TouchableOpacity>
	)
}

export default CLeftHeader
