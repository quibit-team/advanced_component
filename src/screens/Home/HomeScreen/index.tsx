import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Easing, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CBackground, CFlatList, CustomStatusBar } from '~app/common'
import HomeScreenHeader from './HomeScreenHeader'
import FeedsScreen from './FeedsScreen'
import VideosScreen from './VideosScreen'
import ReelsScreen from './ReelsScreen'
import { useColor, FONTS } from '~theme/theme'
import CTabView from '~app/common/CTabView'

const { width, height } = Dimensions.get('screen')

const screensData = [
	{ key: '1', title: 'Feeds', component: <FeedsScreen /> },
	{ key: '2', title: 'Videos', component: <VideosScreen /> },
	{ key: '3', title: 'Reels', component: <ReelsScreen /> },
]

const HomeScreen = () => {
	const [menuVisible, setMenuVisible] = useState(false)
	const [menuText, setMenuText] = useState(screensData[0].title)
	const [isManualScroll, setIsManualScroll] = useState(true)
	const colors = useColor()
	const scrollX = useRef(new Animated.Value(0)).current
	const flatListRef = useRef<any>(null)

	const [itemsVisible, setItemsVisible] = useState(false)
	const widthAnim = useRef(new Animated.Value(0)).current
	const heightAnim = useRef(new Animated.Value(0)).current

	useEffect(() => {
		if (menuVisible) {
			Animated.parallel([
				Animated.timing(widthAnim, {
					toValue: 124,
					duration: 200,
					easing: Easing.out(Easing.ease),
					useNativeDriver: false,
				}),
				Animated.timing(heightAnim, {
					toValue: 130,
					duration: 200,
					easing: Easing.out(Easing.ease),
					useNativeDriver: false,
				}),
			]).start()
			setTimeout(() => {
				setItemsVisible(true)
			}, 100)
			setIsManualScroll(false)
		} else {
			setItemsVisible(false)
			Animated.parallel([
				Animated.timing(widthAnim, {
					toValue: 0,
					duration: 300,
					easing: Easing.in(Easing.ease),
					useNativeDriver: false,
				}),
				Animated.timing(heightAnim, {
					toValue: 0,
					duration: 300,
					easing: Easing.in(Easing.ease),
					useNativeDriver: false,
				}),
			]).start()
			setTimeout(() => {
				setIsManualScroll(true)
			}, 500)
		}
	}, [menuVisible])

	const handleMenuItemPress = option => {
		setMenuText(option)
		setMenuVisible(false)
		setIsManualScroll(false)
		const selectedItem = screensData.find(item => item.title === option)
		if (selectedItem && flatListRef.current) {
			const index = screensData.indexOf(selectedItem)
			flatListRef.current.scrollToIndex({
				index,
				animated: true,
			})
		}
	}

	const viewablityConfig = useRef({
		itemVisiblePercentThreshold: 50,
	}).current

	const handleOnScroll = event => {
		if (isManualScroll) {
			const contentOffsetX = event.nativeEvent.contentOffset.x
			const index = Math.round(contentOffsetX / width) // Use Math.round to get the nearest whole number index

			if (index >= 0 && index < screensData.length) {
				setMenuText(screensData[index].title) // Update menuText based on current index
			}
		}
		Animated.event(
			[
				{
					nativeEvent: {
						contentOffset: {
							x: scrollX,
						},
					},
				},
			],
			{
				useNativeDriver: false,
			}
		)(event)
	}
	return (
		<CBackground>
			<CustomStatusBar />
			<HomeScreenHeader menuVisible={menuVisible} setMenuVisible={setMenuVisible} menuText={menuText} />
			{menuVisible && (
				<Animated.View
					style={[
						styles.menuContainer,
						{
							// transform: [{ scale: scaleAnim }], Option 1
							width: widthAnim,
							height: heightAnim,
						},
					]}>
					{itemsVisible &&
						screensData.map((option, index) => (
							<TouchableOpacity
								key={index}
								style={[
									styles.menuItem,
									menuText === option.title && {
										backgroundColor: colors.description,
									},
								]}
								onPress={() =>
									handleMenuItemPress(option.title)
								}>
								<Text
									style={[
										styles.menuItemText,
										{
											...FONTS.h5,
											color: colors.title,
										},
									]}>
									{option.title}
								</Text>
							</TouchableOpacity>
						))}
				</Animated.View>
			)}
			<CTabView
				ref={flatListRef}
				data={screensData}
				horizontal
				pagingEnabled
				snapToAlignment="center"
				showsHorizontalScrollIndicator={false}
				viewabilityConfig={viewablityConfig}
				onScroll={handleOnScroll}
				// keyExtractor={item => item.key}
				renderItem={({ item }) => (
					<View style={{ width, height }}>{item.component}</View>
				)}
			/>
		</CBackground>
	)
}

const styles = StyleSheet.create({
	menuItem: {
		padding: 10,
	},
	menuContainer: {
		width: 124,
		position: 'absolute',
		top: 100,
		left: 30,
		backgroundColor: '#fff',
		borderRadius: 4,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		zIndex: 100,
	},
	menuItemText: {
		paddingVertical: 3,
		paddingLeft: 20,
	},
})

export default HomeScreen
