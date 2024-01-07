import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as Screens from './screens'
import { useSelector } from 'react-redux'
import UserBottomTabs from '~UserBottomTabs'

const Stack = createStackNavigator<any>()
const UnAuthenticateScreens = () => {
	const appstore = useSelector((state: any) => state.appstore)

	return (
		<Stack.Navigator
			initialRouteName={
				'UserBottomTabs'
				// appstore?.firstTime ? 'LoginScreen' : 'OnBoardingScreen'
			}
			screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="OnBoardingScreen"
				options={{ headerShown: false }}
				component={Screens.OnBoardingScreen}
			/>
			<Stack.Screen name="UserBottomTabs" component={UserBottomTabs} />

			{/* <Stack.Screen
				name="ConfirmCodeScreen"
				options={{ headerShown: false }}
				component={Screens.ConfirmCodeScreen}
			/> */}
			<Stack.Screen
				name="LoginScreen"
				options={{ headerShown: false }}
				component={Screens.LoginScreen}
			/>
			<Stack.Screen
				name="RegisterScreen"
				options={{ headerShown: false }}
				component={Screens.RegisterScreen}
			/>
			{/* 
			<Stack.Screen
				name="ChangePasswordScreen"
				options={{ headerShown: false }}
				component={Screens.ChangePasswordScreen}
			/>
			<Stack.Screen
				name="ForgetPasswordScreen"
				options={{ headerShown: false }}
				component={Screens.ForgetPasswordScreen}
			/>
			<Stack.Screen
				name="TermOfServiceScreen"
				options={{ headerShown: false }}
				component={Screens.TermOfServiceScreen}
			/>
			<Stack.Screen
				name="PrivacyPolicyScreen"
				options={{ headerShown: false }}
				component={Screens.PrivacyPolicyScreen}
			/> */}
		</Stack.Navigator>
	)
}

export default UnAuthenticateScreens
