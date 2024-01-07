import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import EncryptedStorage from 'react-native-encrypted-storage'
import en from './en/translation.json'
import ko from './ko/translation.json'
import my from './my/translation.json'

import { convertLanguageJsonToObject } from './translations'
import { SELECTED_LANGUAGE } from '~constants/LOCAL_KEYS'

convertLanguageJsonToObject(en)
convertLanguageJsonToObject(ko)
export const translationsJson = {
	en: {
		translation: en,
	},
	ko: {
		translation: ko,
	},
	my: {
		translation: my,
	},
}

// Create the 'translations' object to provide full intellisense support for the static json files.

const hello: any = async () => {
	const selectedLanguaged: any = await EncryptedStorage.getItem(
		SELECTED_LANGUAGE
	)
	return selectedLanguaged
		? JSON.parse(selectedLanguaged)
		: {
				en: {
					translation: en,
				},
		  }
}

// export const i18n = i18next
// 	// pass the i18n instance to react-i18next.
// 	.use(initReactI18next)
// 	// detect user language
// 	// learn more: https://github.com/i18next/i18next-browser-languageDetector
// 	.use(LanguageDetector)
// 	// init i18next
// 	// for all options read: https://www.i18next.com/overview/configuration-options
// 	.init({
// 		resources: translationsJson,
// 		fallbackLng: 'en',
// 		defaultNS: 'translation',
// 		//  debug: false,
// 		lng: 'en',
// 		debug:
// 			process.env.NODE_ENV !== 'production' &&
// 			process.env.NODE_ENV !== 'test',
// 		// detect: async function (callback: (lang: string) => void) {},
// 		interpolation: {
// 			escapeValue: false, // not needed for react as it escapes by default
// 		},
// 		compatibilityJSON: 'v3', // By default React Native projects does not support Intl
// 	})
//Initialize i18n with the language retrieved from EncryptedStorage
export const i18n = hello().then((selectedLanguageData: any) => {
	const lng = selectedLanguageData?.code || 'en'
	i18next
		.use(initReactI18next)
		.use(LanguageDetector)
		.init({
			resources: translationsJson,
			fallbackLng: 'en',
			defaultNS: 'translation',
			lng: lng,
			debug:
				process.env.NODE_ENV !== 'production' &&
				process.env.NODE_ENV !== 'test',
			interpolation: {
				escapeValue: false, // not needed for react as it escapes by default
			},
			compatibilityJSON: 'v3', // By default React Native projects do not support Intl
		})
})
