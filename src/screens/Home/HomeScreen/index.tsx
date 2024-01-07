import React from 'react'
import { StyleSheet } from 'react-native'
import { CBackground, CustomStatusBar } from '~app/common'

const HomeScreen = () => {
	return (
		<CBackground>
			<CustomStatusBar />
		</CBackground>
	)
}

const styles = StyleSheet.create({
	container: {},
})

export default HomeScreen
