import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Provider as ReduxProvider } from 'react-redux'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { apolloClient } from './src/utils/'
import { persistor, store } from './src/redux'
import ThemeContextProvider from './src/theme/ThemeContextProvider'
import App from './App'
import SplashScreen from 'react-native-splash-screen'
const client = apolloClient()
const AppProvider = () => {
	useEffect(() => {
		SplashScreen.hide()
	})
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ApolloProvider client={client}>
				<ReduxProvider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<ThemeContextProvider>
							<BottomSheetModalProvider>
								<App />
							</BottomSheetModalProvider>
						</ThemeContextProvider>
					</PersistGate>
				</ReduxProvider>
			</ApolloProvider>
		</GestureHandlerRootView>
	)
}

export default AppProvider
