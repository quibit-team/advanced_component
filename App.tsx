import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Linking, View, LogBox } from 'react-native'
import CodePush from 'react-native-code-push'
import Geolocation from '@react-native-community/geolocation'

import AuthenticateScreens from './src'
import UnAuthenticateScreens from '~UnAuthenticateScreens'
import { CToast } from '~app/common'

const App = () => {
	const user = useSelector((state: any) => state?.user)
	useEffect(() => {
		LogBox.ignoreLogs([
			"FlashList's rendered size is not usable",
			'Sending `onAnimatedValueUpdate` with no listeners registered',
			"The action 'GO_BACK' was not handled by any navigator.",
		])
	})
	useEffect(() => {
		// Request permission to access the user's location
		Geolocation.requestAuthorization()
	}, [])

	useEffect(() => {
		// Get the deep link used to open the app
		const getUrl = async () => {
			const universalLink = await Linking.getInitialURL()
			console.log(universalLink)
			// Handle the universal link
			if (universalLink) {
				console.log(universalLink)
				// Do something with the URL
			}
		}
		getUrl()
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<CToast />
			{user?.token ? <AuthenticateScreens /> : <UnAuthenticateScreens />}
		</View>
	)
}

const codePushOptions = {
	checkFrequency: CodePush.CheckFrequency.ON_APP_START,
	installMode: CodePush.InstallMode.ON_NEXT_RESTART,
}

export default CodePush(codePushOptions)(App)
