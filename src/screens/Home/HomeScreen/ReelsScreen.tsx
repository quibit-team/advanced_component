import { StyleSheet, View } from 'react-native'
import {
	Camera,
	CameraPosition,
	useCameraDevice,
	useCameraPermission,
} from 'react-native-vision-camera'
import PermissionsPage from './PermissionsPage'
import NoCameraDeviceError from './NoCameraDeviceError'
import { ReelsControls } from '~app/features'
import { useCallback, useRef, useState } from 'react'
import { CBottomSheet } from '~app/common'

const ReelsScreen = () => {
	const [cameraPosition, setCameraPosition] = useState<CameraPosition>('front')
	const device = useCameraDevice(cameraPosition)
	const { hasPermission } = useCameraPermission()

	const btnRef = useRef<any>(null)
	const bottomSheet = useCallback(() => {
		btnRef.current?.present()
		btnRef.current?.snapToIndex(0)
	}, [])

	if (!hasPermission) return <PermissionsPage />
	if (device == null) return <NoCameraDeviceError />

	return (
		<View style={styles.container}>
			<Camera
				style={StyleSheet.absoluteFill}
				device={device}
				isActive={true}
			/>
			<ReelsControls cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} />
			{/* <CBottomSheet bottomSheetModalRef={btnRef} BottomSheetContainer={} /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ReelsScreen
