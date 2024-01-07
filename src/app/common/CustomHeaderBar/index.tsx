import React from 'react'
import { StyleSheet, View } from 'react-native'
import CLeftHeader from './CLeftHeader'
import CCenterHeader from './CCenterHeader'
import { UI } from '~constants'

const CustomHeaderBar = ({
	hLeft,
	hLeftText,
	HLeftAction,
	//
	hCenter,
	hCenterText,
	hCenterAction,
	//
	hRight,
	hRightAction,
	noTranslate,
	hCenterStyle,
}: any) => {
	return (
		<View style={styles.container}>
			{hLeft ? (
				<CLeftHeader hLeftText={hLeftText} HLeftAction={HLeftAction} />
			) : null}

			{hCenter ? (
				<CCenterHeader
					hCenterText={hCenterText}
					hCenterAction={hCenterAction}
					noTranslate={noTranslate}
					hRight={hRight}
					hCenterStyle={hCenterStyle}
				/>
			) : null}

			{hRight && hRightAction && hRightAction}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		zIndex: UI.C_HEADER_BAR_ZINDEX,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		paddingRight: 20,
	},
})
export default React.memo(CustomHeaderBar)
