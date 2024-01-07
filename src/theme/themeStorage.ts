import AsyncStorage from '@react-native-async-storage/async-storage'

export const COLOR_SCHEME_KEY = 'colorScheme'

export const setScheme = async (colorScheme: any) => {
	try {
		await AsyncStorage.setItem(COLOR_SCHEME_KEY, colorScheme)
	} catch (e) {
		console.log('Error saving color scheme', e)
	}
}

export const getScheme = async () => {
	try {
		const value = await AsyncStorage.getItem(COLOR_SCHEME_KEY)
		if (value !== null) {
			return value
		} else {
			return 'light' // Default to light if no value is found
		}
	} catch (e) {
		console.log('Error retrieving color scheme', e)
		return 'light' // Default to light if error occurs
	}
}
