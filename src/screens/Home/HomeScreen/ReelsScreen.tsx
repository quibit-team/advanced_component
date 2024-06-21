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
import EffectsPickerContainer from '~app/components/EffectsPickerContainer/EffectsPickerContainer'
import ReelsBottomSheet from '~app/components/ReelsBottomSheet'

const ReelsScreen = () => {
	const [cameraPosition, setCameraPosition] =
		useState<CameraPosition>('front')
	const device = useCameraDevice(cameraPosition)
	const { hasPermission } = useCameraPermission()

	const bottomSheetRef = useRef<any>(null);
	
	// Function to open the bottom sheet
	const handleOpenBottomSheet = useCallback(() => {
		console.log("Handle open bottom sheet")
		bottomSheetRef.current?.snapTo(1); // 1 corresponds to the '50%' snap point
	  }, []);

	  const handleCloseBottomSheet = useCallback(() => {
		// Handle any actions needed when bottom sheet closes
		console.log('Bottom sheet closed');
	  }, []);

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
				onBottomSheet={handleOpenBottomSheet}
			/>
			<ReelsBottomSheet onClose={handleCloseBottomSheet} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ReelsScreen
