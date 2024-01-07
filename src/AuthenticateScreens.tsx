import React, { useEffect } from 'react'
import {
	TransitionPresets,
	createStackNavigator,
} from '@react-navigation/stack'
import * as Screens from './screens'
import UserBottomTabs from '~UserBottomTabs'
import { bottomSheetStyle } from '~utils/styling'
import { useDispatch, useSelector } from 'react-redux'
import { updateFirstTime } from '~redux/Slices/appstoreSlice'

const Stack = createStackNavigator<any>()
const AuthenticateScreens = () => {
	const dispatch = useDispatch()

	const user = useSelector((state: any) => state?.user?.user)
	const appstore = useSelector((state: any) => state.appstore)

	useEffect(() => {
		if (appstore.firstTime === false) {
			dispatch(updateFirstTime(true))
		}
	}, [])

	return (
		<Stack.Navigator
			initialRouteName={
				user?.name === '-' ? 'UserformScreen' : 'UserBottomTabs'
			}
			screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="OnBoardingScreen"
				options={{ headerShown: false }}
				component={Screens.OnBoardingScreen}
			/>
			<Stack.Screen
				name="LoginScreen"
				options={{ headerShown: false }}
				component={Screens.LoginScreen}
			/>

			<Stack.Screen name="UserBottomTabs" component={UserBottomTabs} />

			{/* <Stack.Screen
				name="UserformScreen"
				component={Screens.UserformScreen}
			/>

			<Stack.Screen
				name="ChatListScreen"
				options={{ headerShown: false }}
				component={Screens.ChatListScreen}
			/>
			<Stack.Screen
				name="ChatRoomScreen"
				options={{ headerShown: false }}
				component={Screens.ChatRoomScreen}
			/>
			<Stack.Screen
				name="ChatSettingScreen"
				options={{
					...bottomSheetStyle,
					...TransitionPresets.ScaleFromCenterAndroid,
				}}
				component={Screens.ChatSettingScreen}
			/>
			<Stack.Screen
				name="ChatRoomMenuScreen"
				options={{ headerShown: false }}
				component={Screens.ChatRoomMenuScreen}
			/> */}
		</Stack.Navigator>
	)
}

export default AuthenticateScreens
