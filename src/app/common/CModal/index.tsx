import React from 'react'
import Modal from 'react-native-modal'
import { View } from 'react-native'
import { useColor } from '~theme/theme'
const CModal = ({
	children,
	visible,
	setVisible,
	size,
	delay = 1000,
	borderRadius = 15,
	action,
}: any) => {
	const color = useColor()
	const toggleModal = () => {
		setVisible(!visible)
		action && action()
	}
	return (
		<Modal
			isVisible={visible}
			hasBackdrop={true}
			onBackdropPress={toggleModal}
			animationIn={'bounceInUp'}
			animationInTiming={delay}
			backdropOpacity={0.4}>
			<View
				style={{
					flex: size ? size : 1,
					backgroundColor: color.background,
					borderRadius: borderRadius,
					overflow: 'hidden',
				}}>
				{children}
			</View>
		</Modal>
	)
}

export default CModal
