import React, { useState } from 'react'
import { useTheme } from 'react-native-paper'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { useColor } from '~theme/theme'
import IconComp from '../IconComp'

const CInput = ({
	vStyle = {},
	style,
	placeholder,
	value,
	setValue,
	autoFocus,
	onFocus,
	onBlur,
	placeholderColor,
	multiline,
	icon,
	secureTextEntry,
}: any) => {
	const [secure, setSecure] = useState(secureTextEntry)
	const theme = useTheme()

	const color = useColor()
	const { t } = useTranslation()
	return (
		<View
			style={{
				width: '100%',
				color: '#333',
				backgroundColor: color.input,
				border: 'none',
				borderRadius: 5,
				...vStyle,
			}}>
			{icon ? icon : null}
			<TextInput
				// defaultValue={value}
				value={value}
				onChangeText={setValue}
				placeholder={placeholder ? `${t(placeholder)}` : ''}
				placeholderTextColor={
					placeholderColor ? placeholderColor : color.content
				}
				theme={{
					colors: {
						text: 'black',
						primary: color.primary,
					},
				}}
				underlineColor="transparent"
				style={{
					height: 45,
					backgroundColor: color.input,
					borderRadius: 10,
					width: '100%',
					// paddingLeft: 5,
					color: color.title,
					...style,
				}}
				autoFocus={autoFocus}
				onFocus={onFocus}
				onBlur={onBlur}
				multiline={multiline}
				secureTextEntry={secure ? true : false}
			/>
			{secureTextEntry ? (
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						setSecure(!secure)
					}}>
					<IconComp
						type={'AntDesign'}
						name={secure ? 'eye' : 'eyeo'}
						size={16}
					/>
				</TouchableOpacity>
			) : null}
		</View>
	)
}
const styles = StyleSheet.create({
	btn: {
		position: 'absolute',
		right: 0,
		height: '100%',
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default React.memo(CInput)
