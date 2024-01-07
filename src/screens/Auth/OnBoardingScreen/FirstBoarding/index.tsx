import React, { useRef } from 'react'
import { StyleSheet, Text, Animated, useWindowDimensions } from 'react-native'
import { images } from '~assets/images'
import { SIZES } from '~theme'

interface Props {
	animationController: React.MutableRefObject<Animated.Value>
}

const IMAGE_WIDTH = 350
const IMAGE_HEIGHT = 250

const FirstBoarding: React.FC<Props> = ({ animationController }) => {
	const window = useWindowDimensions()

	const relaxRef = useRef<Text | null>(null)

	const relaxAnimation = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.8],
		outputRange: [-(26 * 2), 0, 0],
	})
	const textAnim = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.4, 0.6, 0.8],
		outputRange: [0, 0, -window.width * 2, 0, 0],
	})
	const imageAnim = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.4, 0.6, 0.8],
		outputRange: [0, 0, -350 * 4, 0, 0],
	})
	const slideAnim = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.4, 0.8],
		outputRange: [0, 0, -window.width, -window.width],
	})

	return (
		<Animated.View
			style={[
				styles.container,
				{ transform: [{ translateX: slideAnim }] },
			]}>
			<Animated.Text
				style={[
					styles.title,
					{ transform: [{ translateY: relaxAnimation }] },
				]}
				ref={relaxRef}>
				Relax
			</Animated.Text>
			<Animated.Text
				style={[
					styles.subtitle,
					{ transform: [{ translateX: textAnim }] },
				]}>
				Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
				eiusmod tempor incididunt ut labore
			</Animated.Text>
			<Animated.Image
				style={[
					styles.image,
					{ transform: [{ translateX: imageAnim }] },
				]}
				source={images.newfeed_onboarding}
			/>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		position: 'absolute',
		height: SIZES.height,
		top: SIZES.height / 5,
		left: 0,
		bottom: 0,
		right: 0,
		paddingBottom: 100,
	},
	title: {
		color: 'black',
		fontSize: 26,
		textAlign: 'center',
		fontFamily: 'WorkSans-Bold',
	},
	subtitle: {
		color: 'black',
		textAlign: 'center',
		fontFamily: 'WorkSans-Regular',
		paddingHorizontal: 64,
		paddingVertical: 16,
	},
	image: {
		maxWidth: IMAGE_WIDTH,
		maxHeight: IMAGE_HEIGHT,
	},
})

export default FirstBoarding
