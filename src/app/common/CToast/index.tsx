import React from 'react'
import { StyleSheet, View } from 'react-native'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

import ToastContainer from './ToastContainer'
import { SIZES } from '~theme'
import { UI } from '~constants'

const toastConfig = {
	success: props => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: 'pink' }}
			contentContainerStyle={{
				paddingHorizontal: 15,
			}}
			text1Style={{ fontSize: 14, fontWeight: '400' }}
		/>
	),
	error: props => (
		<ErrorToast
			{...props}
			text1Style={{ fontSize: 17 }}
			text2Style={{ fontSize: 15 }}
		/>
	),
	tomatoToast: ({ props }) => (
		<ToastContainer
			type={props.type}
			title={props.title}
			content={props.content}
			titleColor={props?.titleColor}
			contentColor={props?.contentColor}
		/>
	),
}

const CToast = () => {
	return (
		<View style={styles.container}>
			<Toast config={toastConfig} />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		height: 50,
		width: SIZES.width,
		zIndex: UI.CUSTOM_TOAST,
	},
})
export default React.memo(CToast)
