import { Toast } from 'react-native-toast-message/lib/src/Toast'

export const Popup = ({ title, content, tColor, cColor, type, time }: any) => {
	return Toast.show({
		type: 'tomatoToast',
		props: {
			type: type,
			title: title,
			content: content,
			titleColor: tColor,
			contentColor: cColor,
		},
		visibilityTime: time,
	})
}
