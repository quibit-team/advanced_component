import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated'

const CBounceBtn = ({ children, style, bounce }: any) => {
	const scaleDownAnimation = useSharedValue(1)
	const scaleHandler = Gesture.Tap()
		.onBegin(() => {
			'worklet'
			scaleDownAnimation.value = withSpring(bounce ? bounce : 0.90)
		})
		.onFinalize(() => {
			'worklet'
			scaleDownAnimation.value = withSpring(1)
		})
	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scaleDownAnimation.value }],
	}))

	return (
		<Animated.View style={[animatedStyle, { ...style }]}>
			<GestureDetector gesture={scaleHandler}>
				{children ? children : <></>}
			</GestureDetector>
		</Animated.View>
	)
}

export default CBounceBtn
