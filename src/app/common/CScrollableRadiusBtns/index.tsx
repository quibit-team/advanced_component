import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import { COLORS, FONTS, useColor } from '~theme/theme'
import { firstUpperChar, isIphone } from '~utils/utilities'

const CScrollableRadiusBtns = ({
	tab,
	setTab,
	labels,
	translate,
	actionBtn,
	blog,
	btnStyle = {},
	btnTextStyle = {},
	border = false,
}: any) => {
	const { t } = useTranslation()
	const color = useColor()
	const scrollViewRef = useRef<any>(null)
	const theme = useColor()
	const tabs = Array.from({ length: labels?.length }, (_, index) => index)

	const handleTabPress = (item, index) => {
		setTab(item)
		actionBtn && actionBtn(blog ? labels[index] : item, index)

		scrollViewRef.current.scrollTo({ x: index * 100, y: 0, animated: true })

		// update the button style
		const btnWidth = 100 // assuming each button has a width of 100
		const screenWidth = Dimensions.get('window').width
		const scrollWidth = tabs.length * btnWidth
		const scrollOffset = index * btnWidth

		if (scrollWidth > screenWidth) {
			if (scrollOffset + screenWidth > scrollWidth) {
				// last button
				scrollViewRef.current.scrollToEnd({ animated: true })
			} else if (scrollOffset < screenWidth / 2) {
				// first few buttons
				scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })
			} else {
				// middle buttons
				scrollViewRef.current.scrollTo({
					x: scrollOffset - screenWidth / 2 + btnWidth / 2,
					y: 0,
					animated: true,
				})
			}
		}
	}
	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				showsHorizontalScrollIndicator={false}>
				{tabs?.map((item, index) => {
					const isSame = tab === item
					return (
						<TouchableOpacity
							key={index.toString()}
							onPress={() => handleTabPress(item, index)}
							style={[
								styles.btn,
								{
									backgroundColor: border
										? isSame
											? color.primaryOpacity
											: 'transparent'
										: isSame
										? color.primary
										: color.input,
									borderWidth: border ? 1 : 0,
									borderColor: border
										? isSame
											? color.primary
											: color.border
										: 'transparent',
								},
								btnStyle,
							]}>
							<Text
								style={{
									...FONTS.h5,
									color: border
										? isSame
											? color.primary
											: theme.content
										: isSame
										? COLORS.white
										: theme.content,
									fontWeight: isSame ? 'bold' : '400',
									lineHeight: isIphone ? 27 : 23,
									paddingTop: 1,
									...btnTextStyle,
								}}>
								{translate
									? t(labels[item] || item)
									: firstUpperChar(
											labels[item].toLowerCase()
									  ) || item}
							</Text>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		paddingLeft: 16,
		width: '100%',
	},
	btn: {
		marginRight: 10,
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 10,
	},
})

export default React.memo(CScrollableRadiusBtns)
