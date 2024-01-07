import { useTranslation } from 'react-i18next'

export const defaultCodes = {
	en: { country_code: '1', iso_code: 'US', name: 'English' },
	ko: { country_code: '82', iso_code: 'KR', name: 'Korean' },
	my: { country_code: '95', iso_code: 'MY', name: 'Myanmar' },
	// add more language codes and default codes as needed
}
export const useDefaultCodes = () => {
	const { i18n } = useTranslation()

	const defaultCode = defaultCodes[i18n.language] || {
		country_code: '1',
		iso_code: 'US',
		name: 'English',
	}
	return defaultCode
}
