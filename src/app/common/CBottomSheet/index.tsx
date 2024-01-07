import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { BackHandler, View, StyleSheet } from 'react-native'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { useColor } from '~theme/theme'

const CBottomSheet = ({
	BottomSheetContainer,
	bottomSheetModalRef,
	data,
	heightSize,
	item,
	setItem,
	quotes,
	bgColor,
}: any) => {
	const [sheetSize, setSheetSize] = useState(false)
	const [closeModal, setCloseModal] = useState(false)
	const color = useColor()
	const sheetSizing = sheetSize ? '85%' : heightSize
	const snapPoints = useMemo(
		() => [heightSize ? sheetSizing : '75%'],
		[heightSize, sheetSize]
	)

	useEffect(() => {
		if (closeModal) {
			bottomSheetModalRef.current?.close?.()
			if (sheetSize) {
				setSheetSize(false)
			}
		}
	}, [closeModal, bottomSheetModalRef])

	useEffect(() => {
		const handleBackPress = () => {
			if (bottomSheetModalRef.current) {
				bottomSheetModalRef.current.close()
				return true
			}
			return false
		}

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			handleBackPress
		)

		return () => backHandler.remove()
	}, [bottomSheetModalRef])

	const handleSheetChanges = useCallback(({ index }: any) => {
		if (index === 0) {
			// modal is closed
			setCloseModal(true)
		} else {
			// modal is open
			setCloseModal(false)
		}
	}, [])
	const renderBackdrop = useCallback(
		props => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
				onPress={closeModalRef}
			/>
		),
		[]
	)
	const closeModalRef = useCallback(() => {
		setCloseModal(true)
		if (bottomSheetModalRef.current) {
			bottomSheetModalRef.current.close()
		}
	}, [bottomSheetModalRef])
	return (
		<BottomSheetModal
			backgroundStyle={{
				backgroundColor: color.bottomSheet,
			}}
			backdropComponent={renderBackdrop}
			backgroundComponent={() => (
				<View
					style={[
						styles.contentContainer,
						{
							backgroundColor: bgColor
								? bgColor
								: color.bottomSheet,
						},
					]}
				/>
			)}
			handleComponent={() => (
				<View style={styles.closeLineContainer}>
					<View
						style={[
							styles.closeLine,
							{ backgroundColor: color.title },
						]}
					/>
				</View>
			)}
			style={styles.container}
			ref={bottomSheetModalRef}
			index={0}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}>
			<BottomSheetContainer
				data={data}
				item={item}
				setItem={setItem}
				setSheetSize={setSheetSize}
				closeModal={closeModalRef}
				quotes={quotes}
			/>
		</BottomSheetModal>
	)
}
const styles = StyleSheet.create({
	container: {
		borderRadius: 24,
		borderBottomColor: 'rgba(0, 0, 0, 1)',
		borderBottomWidth: 10,
	},
	contentContainer: {
		...StyleSheet.absoluteFillObject,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: 'transparent',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,
		elevation: 7,
	},
	closeLineContainer: {
		alignSelf: 'center',
		marginBottom: 10,
	},
	closeLine: {
		width: 30,
		height: 4,
		borderRadius: 3,
		marginTop: 9,
	},
})
export default React.memo(CBottomSheet)
