import { Platform, useWindowDimensions } from 'react-native'
import moment from 'moment'
import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef<any>()

export const validateField = (field, fieldName, setError) => {
	if (field === null || field === undefined) {
		setError(`${fieldName} is required.`)
		return false
	}
	// Check for strings
	if (typeof field === 'string' && field.trim() === '') {
		setError(`${fieldName} is required.`)
		return false
	}
	// Check for objects (assuming an empty object is invalid)
	if (typeof field === 'object' && Object.keys(field).length === 0) {
		setError(`${fieldName} is required.`)
		return false
	}
	return true
}

export const formatCountK = count => {
	if (count >= 10000) {
		return (count / 1000).toFixed(0) + 'k'
	} else if (count >= 1000) {
		return (count / 1000).toFixed(1) + 'k'
	} else {
		return count.toString()
	}
}

export const useTablet = () => {
	const { width } = useWindowDimensions()
	return width > 600
}

export const isIphone = Platform.OS === 'ios'

// give number and change to array depending on number
export const arrayCaculate = number => [...Array(number)?.keys()]

// if number too long saperate it with comma
export const commaNumbers = data => {
	return new Intl.NumberFormat('en-US').format(data)
}

export const convertNumber = data => {
	if (!data) {
		return Number(0)
	}
	return Number(data)
}

// first character change to UpperCase
export const firstUpperChar = data => {
	return data?.charAt(0).toUpperCase() + data?.slice(1)
}

export const getInitials = name => {
	return name
		?.split(' ') // Split the name into an array of words
		?.map(word => word?.[0]?.toUpperCase()) // Map each word to its first character and convert to uppercase
		?.slice(0, 3)
		?.join('') // Join the initials into a single string
}

export const getFirstWord = (data, num) => {
	if (!data) {
		return ''
	}
	const words = data.trim().split(' ')
	if (words.length > 0) {
		return words[num]
	}
	if (words.length > 0) {
		return words[0]
	}

	return ''
}

export const formattedDate = date => {
	const now = moment()
	const messageDate = moment.unix(date / 1000)

	// Calculate the time difference between now and the message date
	const diffInHours = now.diff(messageDate, 'hours')
	const diffInDays = now.diff(messageDate, 'days')

	// Display different formats based on the time difference
	if (diffInHours <= 3) {
		return messageDate.format('LT') // Display only time if within 3 hours
	} else if (diffInDays <= 90) {
		return messageDate.format('ddd LT') // Display day of week and time if within 90 day
	} else {
		return messageDate.format('MMM D, YYYY LT') // Display date and time if above 90 day
	}
}

export const checkEmail = email => {
	const filter = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
	if (filter) {
		return true
	} else {
		return 'Please input a valid email address!'
	}
}

export const anyTruthy = (...args: any[]): boolean => args.some(Boolean)
export const isFalsy = value => {
	return (
		value === null ||
		value === undefined ||
		value === '' ||
		isNaN(value) ||
		!isFinite(value)
	)
}
