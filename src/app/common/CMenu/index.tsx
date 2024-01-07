import React from 'react'
import { Menu } from 'react-native-paper'

import { FONTS, useColor } from '~theme/theme'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View } from 'react-native'
import IconComp from '../IconComp'

interface IProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	CustomBtn?: any
	menuList?: Array<React.ReactNode>
	menuAction?: (index: any, item: any) => void
	CustomList?: any
	style?: any
	icon?: any
	translate?: boolean
	text?: any
	btnStyle?: any
	btnTextStyle?: any
	textNoTranslate?: boolean
	menuStyle?: any
	selected?: string
}
const CMenu = ({
	visible,
	setVisible,
	menuList,
	menuAction,
	CustomList,
	style,
	icon,
	translate,
	text,
	btnStyle,
	textNoTranslate,
	menuStyle,
	selected,
	btnTextStyle,
}: IProps) => {
	const color = useColor()
	const closeMenu = () => setVisible(false)
	const { t } = useTranslation()
	return (
		<Menu
			visible={visible}
			onDismiss={closeMenu}
			contentStyle={{
				backgroundColor: color.background,
				padding: 0,
				margin: 0,
				paddingTop: 0,
				paddingBottom: 0,
				borderRadius: 10,
				shadowColor: color.body,
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.2,
				shadowRadius: 1.41,
				elevation: 1,
				...style,
			}}
			anchorPosition={'bottom'}
			anchor={
				<TouchableOpacity
					style={{
						paddingHorizontal: text ? 5 : 0,
						height: 30,
						alignItems: 'center',
						justifyContent: 'center',
						borderWidth: text ? 1 : 0,
						borderRadius: 5,
						borderColor: color.border,
						...btnStyle,
					}}
					onPress={() => {
						setVisible(true)
					}}>
					{text ? (
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
							<Text
								style={{
									...FONTS.h5,
									color: color.title,
									...btnTextStyle,
								}}>
								{textNoTranslate ? text : t(text)}
							</Text>
							<IconComp
								type={
									icon?.type
										? icon?.type
										: 'MaterialCommunityIcons'
								}
								size={icon.size ? icon.size : 20}
								name={icon.name ? icon.name : 'dots-vertical'}
								color={icon.color ? icon.color : color.title}
							/>
						</View>
					) : (
						<IconComp
							type={
								icon.type ? icon.type : 'MaterialCommunityIcons'
							}
							size={icon.size ? icon.size : 20}
							name={icon.name ? icon.name : 'dots-vertical'}
							color={icon.color ? icon.color : color.title}
						/>
					)}
				</TouchableOpacity>
			}>
			{menuList
				? menuList?.map((item, index) => (
						<Menu.Item
							key={index.toString()}
							onPress={() => {
								menuAction && menuAction(index, item)
							}}
							title={translate ? t(`${item}`) : item}
							style={{
								height: 40,
								borderBottomWidth:
									menuList?.length - 1 === index
										? 0
										: menuList?.length === 1
										? 0
										: 0.5,
								borderBottomColor: color.border,
								backgroundColor:
									item === selected
										? color.view
										: 'transparent',
								...menuStyle,
							}}
						/>
				  ))
				: CustomList}
		</Menu>
	)
}

export default React.memo(CMenu)
