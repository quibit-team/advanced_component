import React from 'react'
import { StyleSheet } from 'react-native'
import { CBackground, CustomStatusBar } from '~app/common'

const ToolsScreen = () => {
	return (
		<CBackground>
			<CustomStatusBar />
		</CBackground>
	)
}

const styles = StyleSheet.create({
	container: {},
})

export default ToolsScreen
