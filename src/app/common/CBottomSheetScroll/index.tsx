import React, { useCallback, useMemo } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useColor } from '~theme/theme'

const CBottomSheetScroll = ({
	children,
	defaultHeight,
	heightSize,
	style,
	setScrollTop,
}: any) => {
	const color = useColor()
	const snapPoints = useMemo(
		() => [
			defaultHeight ? defaultHeight : '40%',
			heightSize ? heightSize : '75%',
		],
		[]
	)
	const handleSheetChanges = useCallback(item => {
		setScrollTop && setScrollTop(item)
	}, [])
	return (
		<BottomSheet snapPoints={snapPoints} onChange={handleSheetChanges}>
			<BottomSheetScrollView
				style={{ backgroundColor: color.bottomSheet }}
				contentContainerStyle={{ padding: 10, ...style }}>
				{children}
			</BottomSheetScrollView>
		</BottomSheet>
	)
}
export default CBottomSheetScroll
