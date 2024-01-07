import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'

export const config: TransitionSpec = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
}
export const bottomSheetStyle = {
	headerShown: false,
	transitionSpec: {
		open: config,
		close: config,
	},
}

//...TransitionPresets.ModalTransition for created Post
