import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
	BottomTabBar,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'

import { UI } from '~constants'
import { useThemeContext } from '~theme/ThemeContextProvider'
import { isIphone } from '~utils/utilities'
import * as Screens from './screens'
import { SvgChat, SvgHome, SvgTools } from '~assets/svg'

const Tabs = createBottomTabNavigator()

const UserBottomTabs = () => {
	const hidebar = useSelector((state: any) => state?.appnotstore?.scrolHide)

	const { themeType } = useThemeContext()

	const bgColor =
		themeType === 'light'
			? 'rgba(255, 255, 255, 0.95)'
			: 'rgba(0, 0, 0, 0.95)'
	const tabBarStyle = {
		paddingBottom: isIphone ? 27 : 15,
		height: UI.BOTTOM_TAB_HEIGHT,
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
		borderTopColor: 'transparent',
		backgroundColor: bgColor,
		marginTop: isIphone ? 5 : 10,
	}

	return (
		<Tabs.Navigator
			initialRouteName="HomeTab"
			backBehavior={'initialRoute'}
			tabBar={props => (
				<View
					style={[
						styles.bottomStyle,
						{ height: hidebar ? 0 : UI.BOTTOM_TAB_HEIGHT },
					]}>
					{/* <BottomTabBar {...props} /> */}
				</View>
			)}
			screenOptions={{
				tabBarHideOnKeyboard: false,
				headerShown: false,
				lazy: true,
				tabBarLabelStyle: {
					fontSize: 11,
				},
			}}
			>
			<Tabs.Screen
				name="HomeTab"
				options={() => ({
					tabBarLabel: 'Home',
					tabBarStyle,
					tabBarIcon: ({ focused }) => <SvgHome focused={focused} />,
				})}
				component={Screens.HomeScreen}
			/>

			<Tabs.Screen
				name="ToolTab"
				component={Screens.ToolsScreen}
				options={() => ({
					tabBarLabel: 'Tools',
					tabBarStyle,
					tabBarIcon: ({ focused }) => <SvgTools focused={focused} />,
				})}
			/>

			<Tabs.Screen
				name="MessageTab"
				component={Screens.ToolsScreen}
				options={() => ({
					tabBarLabel: 'Message',
					tabBarStyle,
					tabBarIcon: ({ focused }) => <SvgChat focused={focused} />,
				})}
			/>
		</Tabs.Navigator>
	)
}
const styles = StyleSheet.create({
	bottomStyle: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		right: 0,
		width: '100%',
	},
})
export default React.memo(UserBottomTabs)
