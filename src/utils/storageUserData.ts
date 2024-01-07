import EncryptedStorage from 'react-native-encrypted-storage'
import apolloClient from './Apollo/apolloClient'

import { useSelector } from 'react-redux'
import { USER_SESSION } from '~constants/CONFIG_KEYS'

export const storeUserSession = async userSession => {
	try {
		const userData = await EncryptedStorage.setItem(
			USER_SESSION,
			JSON.stringify(userSession)
		)
		console.log('User session saved to encrypted storage:')
		return userData
	} catch (error) {
		console.log('Error saving user session to encrypted storage:', error)
	}
}

export const useToken = () => {
	const userSelect = useSelector((state: any) => state?.user)

	const isAuthenticated = userSelect?.token
	return { userSession: userSelect, user: userSelect?.user, isAuthenticated }
}

export const removeUserSession = async () => {
	try {
		await EncryptedStorage.removeItem(USER_SESSION)
		apolloClient().resetStore() // Clear the cache
		console.log('User session removed from encrypted storage')
	} catch (error) {
		console.log(
			'Error removing user session from encrypted storage:',
			error
		)
	}
}
