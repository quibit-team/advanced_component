import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Image,
	Animated,
	useWindowDimensions,
	ScrollView,
	TouchableOpacity,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { images } from '~assets/images'
import { useColor, FONTS, SIZES } from '~theme/theme'

interface Props {
	onNextClick: () => void
	animationController: React.MutableRefObject<Animated.Value>
}

const SplashView: React.FC<Props> = ({ onNextClick, animationController }) => {
	const window = useWindowDimensions()
	const insets = useSafeAreaInsets()
	const color = useColor()

	const splashTranslateY = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.8],
		outputRange: [0, -window.height, -window.height],
	})

	// const introImageData = Image.resolveAssetSource(images.newfeed_onboarding)

	return (
		<Animated.View
			style={{ flex: 1, transform: [{ translateY: splashTranslateY }] }}>
			<ScrollView style={{ flexGrow: 0 }} alwaysBounceVertical={false}>
				<View>
					<Image
						style={{
							width: '100%',
							height: SIZES.height * 0.5,
						}}
						source={images.newfeed_onboarding}
					/>
				</View>
				<Text style={styles.title}>Clearhead</Text>
				<Text style={styles.subtitle}>
					Lorem ipsum dolor sit amet,consectetur{'\n'}adipiscing
					elit,sed do eiusmod tempor{'\n'}incididunt ut labore
				</Text>
			</ScrollView>

			<View style={[styles.footer, { paddingBottom: 8 + insets.bottom }]}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={[
							styles.button,
							{ backgroundColor: color.primary },
						]}
						onPress={() => {
							onNextClick && onNextClick()
						}}>
						<Text style={styles.buttonText}>Let's begin</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	textContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: '50%',
		width: '100%',
	},
	title: {
		...FONTS.h1,
		fontSize: 30,
		textAlign: 'center',
		lineHeight: 40,
	},
	subtitle: {
		...FONTS.h5,
		color: 'black',
		textAlign: 'center',
		paddingHorizontal: 24,
		lineHeight: 22,
		letterSpacing: 0.5,
		flex: 1,
	},
	footer: {
		flexGrow: 1,
		justifyContent: 'center',
		paddingTop: 8,
	},
	buttonContainer: {
		borderRadius: 38,
		overflow: 'hidden',
		alignSelf: 'center',
	},
	button: {
		height: 58,
		paddingVertical: 16,
		paddingHorizontal: 56,
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
	},
})
export default SplashView
