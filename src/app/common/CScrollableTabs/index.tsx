import React, { useState, useEffect, useRef, useMemo, createRef } from 'react'
import { ScrollView, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { SIZES } from '~theme'

import AnimateSlider from './AnimateSlider'
import Tab from './Tab'

const CScrollableTabs = ({
	state,
	descriptors,
	navigation,
	position,
	fontSize,
	border,
	tColor,
	notSlide,
}: any) => {
	const theme = useTheme()
	const scrollViewRef = useRef<any>(null)
	const [contentSize, setContentSize] = useState(0)
	const [measures, setMeasures] = useState<any[]>([])
	const tabRefs = useRef(
		Array.from({ length: state.routes?.length }, () => createRef())
	).current

	useEffect(() => {
		if (scrollViewRef.current && !measures) {
			const temp: any = []

			tabRefs.forEach((ref: any, _, array) => {
				ref.current?.measureLayout(
					scrollViewRef.current,
					(left, top, width, height) => {
						temp.push({ left, top, width, height })

						if (temp.length === array.length) {
							if (width === 0 || height === 0) {
								setMeasures([])
							} else {
								setMeasures(temp)
							}
						}
					},
					() => console.log('fail')
				)
			})
		}
	}, [measures, tabRefs])

	useEffect(() => {
		if (scrollViewRef.current && measures) {
			const { index } = state
			const screenCenterXPos = SIZES.width / 2 - measures[index].width / 2

			scrollViewRef.current.scrollTo({
				x: measures[index].left - screenCenterXPos,
				y: 0,
				animated: true,
			})
		}
	}, [state, measures])

	const standardSize = useMemo(() => {
		if (!contentSize) {
			return 0
		}
		return contentSize / state.routes.length
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contentSize])

	const inputRange = useMemo(() => {
		return state.routes.map((_: any, i: any) => i)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const indicatorScale = useMemo(() => {
		if (!measures || !contentSize) {
			return 0
		}

		return position.interpolate({
			inputRange,
			outputRange: measures.map(
				(measure: any) => measure.width / standardSize + 0.1
			),
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputRange, measures, contentSize])

	const translateX = useMemo(() => {
		if (!measures || !contentSize) {
			return 0
		}

		return position.interpolate({
			inputRange,
			outputRange: measures.map(
				measure => measure.left - (standardSize - measure.width) / 2
			),
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputRange, measures, contentSize])

	const handleTabWrapperLayout = (event: any) => {
		const width = event.nativeEvent.layout?.width
		setContentSize(width)
	}
	const borderStyle: any = {
		borderBottomColor: theme.colors.elevation,
		borderBottomWidth: 0.5,
	}

	return (
		<View style={border ? borderStyle : {}}>
			<ScrollView
				horizontal
				ref={scrollViewRef}
				showsHorizontalScrollIndicator={false}>
				<View
					onLayout={handleTabWrapperLayout}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-evenly',
					}}>
					{state.routes.map(({ key, name }: any, index: number) => {
						const ref = tabRefs[index]
						const { options } = descriptors[key]
						const label =
							options.tabBarLabel !== undefined
								? options.tabBarLabel
								: options.title !== undefined
								? options.title
								: name

						const isFocused = state.index === index

						const onPress = () => {
							const event = navigation.emit({
								type: 'tabPress',
								target: key,
								canPreventDefault: true,
							})

							if (!isFocused && !event.defaultPrevented) {
								navigation.navigate(name)
							}
						}

						const opacity = position.interpolate({
							inputRange,
							outputRange: inputRange.map((i: any) =>
								i === index ? 1 : 0.6
							),
						})

						return (
							<Tab
								key={key}
								ref={ref}
								label={label}
								opacity={opacity}
								isFocused={isFocused}
								onPress={onPress}
								fontSize={fontSize}
								tColor={tColor}
							/>
						)
					})}
				</View>
				{notSlide ? null : (
					<AnimateSlider
						standardSize={standardSize}
						translateX={translateX}
						indicatorScale={indicatorScale}
						tColor={tColor}
					/>
				)}
			</ScrollView>
		</View>
	)
}

export default React.memo(CScrollableTabs)
