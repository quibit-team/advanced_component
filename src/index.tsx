import React from 'react'
import { View } from 'react-native'
import AuthenticateScreens from '~AuthenticateScreens'

const AuthenticatedFlow = () => {
	return (
		<View style={{ flex: 1 }}>
			<AuthenticateScreens />
		</View>
	)
}

export default React.memo(AuthenticatedFlow)
