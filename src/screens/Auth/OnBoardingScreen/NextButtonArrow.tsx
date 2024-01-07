import React, { useRef } from 'react'
import { StyleSheet, Text, Animated, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MyPressable from './MyPressable'
import { useNavigation } from '@react-navigation/native'

interface Props {
	onBtnPress: () => void
	animationController: React.MutableRefObject<Animated.Value>
}

const IconPressable = Animated.createAnimatedComponent(Icon)

/*
 * TODO:- find better solution for this animation so we don't have to use 'useNativeDriver: false' in 'IntroductionAnimationScreen.tsx' as width doesn't support it yet
 */
const NextButtonArrow: React.FC<Props> = ({
	onBtnPress,
	animationController,
}) => {
	const navigation = useNavigation<any>()
	const arrowAnim = useRef<any>(new Animated.Value(0))
	arrowAnim.current = animationController.current.interpolate({
		inputRange: [0, 0.2, 0.4, 0.6, 0.8],
		outputRange: [0, 0, 0, 0, 1],
	})

	// for transition from arrow to sign up
	const transitionAnim = arrowAnim.current.interpolate({
		inputRange: [0, 0.85, 1],
		outputRange: [36, 0, 0],
	})
	const opacityAnim = arrowAnim.current.interpolate({
		inputRange: [0, 0.7, 1],
		outputRange: [0, 0, 1],
	})
	const iconTransitionAnim = arrowAnim.current.interpolate({
		inputRange: [0, 0.35, 0.85, 1], // or [0, 0.85, 1],
		outputRange: [0, 0, -36, -36], // or [0, 0, -36]
	})
	const iconOpacityAnim = arrowAnim.current.interpolate({
		inputRange: [0, 0.7, 1],
		outputRange: [1, 0, 0],
	})
	// end

	const widthAnim = arrowAnim.current.interpolate({
		inputRange: [0, 1],
		outputRange: [58, 258],
	})

	const marginBottomAnim = arrowAnim.current.interpolate({
		inputRange: [0, 1],
		outputRange: [38, 0],
	})

	const radiusAnim = arrowAnim.current.interpolate({
		inputRange: [0, 1],
		outputRange: [40, 8],
	})

	return (
		<Animated.View
			style={[
				styles.container,
				{
					width: widthAnim,
					borderRadius: radiusAnim,
					marginBottom: marginBottomAnim,
				},
			]}>
			<MyPressable
				style={{ flex: 1, justifyContent: 'center' }}
				android_ripple={{ color: 'darkgrey' }}
				onPress={() => onBtnPress()}>
				<Animated.View
					style={[
						styles.signupContainer,
						{
							opacity: opacityAnim,
							transform: [{ translateY: transitionAnim }],
						},
					]}>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
						onPress={() => {
							navigation.navigate('RegisterScreen')
						}}>
						<Text style={styles.signupText}>Sign Up</Text>
						<Icon name="arrow-forward" size={24} color="white" />
					</TouchableOpacity>
				</Animated.View>

				<IconPressable
					style={[
						styles.icon,
						{
							opacity: iconOpacityAnim,
							transform: [{ translateY: iconTransitionAnim }],
						},
					]}
					name="arrow-forward-ios"
					size={24}
					color="white"
				/>
			</MyPressable>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 58,
		backgroundColor: 'rgb(21, 32, 54)',
		overflow: 'hidden',
	},
	signupContainer: {
		paddingHorizontal: 16,
	},
	signupText: {
		fontSize: 18,
		fontFamily: 'WorkSans-Medium',
		color: 'white',
	},
	icon: {
		position: 'absolute',
		alignSelf: 'center',
	},
})

export default NextButtonArrow
