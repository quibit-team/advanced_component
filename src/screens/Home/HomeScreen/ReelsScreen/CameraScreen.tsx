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
import { useState } from 'react'

const CameraScreen = () => {
	const [cameraPosition, setCameraPosition] =
		useState<CameraPosition>('front')
	const device = useCameraDevice(cameraPosition)
	const { hasPermission } = useCameraPermission()
	
	// const handleOpenBottomSheet = useCallback(() => {
		
	//   }, []);

	if (!hasPermission) return <PermissionsPage />
	if (device == null) return <NoCameraDeviceError />

	return (
		<View style={styles.container}>
			<Camera
				style={StyleSheet.absoluteFill}
				device={device}
				isActive={true}
			/>
			<ReelsControls
				cameraPosition={cameraPosition}
				setCameraPosition={setCameraPosition}
				// onBottomSheet={handleOpenBottomSheet}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default CameraScreen
