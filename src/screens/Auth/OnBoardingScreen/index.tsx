import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Animated, Easing, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CBackground } from '~app/common'
import { SIZES } from '~theme'

import TopBackSkipView from './TopBackSkipView'
import CenterNextButton from './CenterNextButton'

import SplashView from './SplashView'
import FirstBoarding from './FirstBoarding'
import SecondBoarding from './SecondBoarding'
import ThirdBoarding from './ThirdBoarding'
import WelcomeView from './WelcomeView'

const OnBoardingScreen: React.FC = () => {
	const navigation = useNavigation()

	const [currentPage, setCurrentPage] = useState(0)

	const animationController = useRef<Animated.Value>(new Animated.Value(0))
	const animValue = useRef<number>(0)

	useEffect(() => {
		animationController.current.addListener(({ value }) => {
			animValue.current = value
			setCurrentPage(value)
		})
	}, [])

	const relaxTranslateY = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.4, 0.6, 0.8],
		outputRange: [SIZES.height, 0, 0, 0, 0],
	})

	const playAnimation = useCallback(
		(toValue: number, duration: number = 1600) => {
			Animated.timing(animationController.current, {
				toValue,
				duration,
				easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
				// here it is false only cause of width animation in 'NextButtonArrow.tsx', as width doesn't support useNativeDriver: true
				// TODO:- find better solution so we can use true here and animation also work
				useNativeDriver: false,
			}).start()
		},
		[]
	)

	const onNextClick = useCallback(() => {
		let toValue
		if (animValue.current === 0) {
			toValue = 0.2
		} else if (animValue.current >= 0 && animValue.current <= 0.2) {
			toValue = 0.4
		} else if (animValue.current > 0.2 && animValue.current <= 0.4) {
			toValue = 0.6
		} else if (animValue.current > 0.4 && animValue.current <= 0.6) {
			toValue = 0.8
		} else if (animValue.current > 0.6 && animValue.current <= 0.8) {
			navigation.goBack()
		}

		toValue !== undefined && playAnimation(toValue)
	}, [playAnimation, navigation])

	const onBackClick = useCallback(() => {
		let toValue
		if (animValue.current >= 0.2 && animValue.current < 0.4) {
			toValue = 0.0
		} else if (animValue.current >= 0.4 && animValue.current < 0.6) {
			toValue = 0.2
		} else if (animValue.current >= 0.6 && animValue.current < 0.8) {
			toValue = 0.4
		} else if (animValue.current === 0.8) {
			toValue = 0.6
		}

		toValue !== undefined && playAnimation(toValue)
	}, [playAnimation])

	const onSkipClick = useCallback(() => {
		playAnimation(0.8, 1200)
	}, [playAnimation])

	return (
		<CBackground>
			<StatusBar
				// barStyle={`${currentPage > 0 ? 'dark' : 'light'}-content`}
			/>
			<SplashView {...{ onNextClick, animationController }} />

			<Animated.View
				style={[
					styles.scenesContainer,
					{ transform: [{ translateY: relaxTranslateY }] },
				]}>
				<FirstBoarding {...{ animationController }} />

				<SecondBoarding {...{ animationController }} />

				<ThirdBoarding {...{ animationController }} />

				<WelcomeView {...{ animationController }} />
			</Animated.View>

			<TopBackSkipView
				{...{ onBackClick, onSkipClick, animationController }}
			/>

			<CenterNextButton {...{ onNextClick, animationController }} />
		</CBackground>
	)
}

const styles = StyleSheet.create({
	scenesContainer: {
		justifyContent: 'center',
		...StyleSheet.absoluteFillObject,
	},
})

export default OnBoardingScreen
