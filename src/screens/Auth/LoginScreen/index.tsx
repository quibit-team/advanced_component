import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CBackground, CustomStatusBar } from '~app/common'

const LoginScreen = () => {
	return (
		<CBackground>
			<CustomStatusBar />
			<View>
				<Text>Helo world</Text>
			</View>
		</CBackground>
	)
}

const styles = StyleSheet.create({
	container: {},
})

export default LoginScreen
