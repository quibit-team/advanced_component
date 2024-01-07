import React from 'react'
import { Snackbar } from 'react-native-paper'
import { useColor } from '~theme/theme'
import CText from '../CText'

interface IProps {
	visible?: boolean
	onDismiss?: any
	context?: string
	action?: any
}
const CSnackbar = ({ visible, onDismiss, context, action }: IProps) => {
	const color = useColor()
	return (
		<Snackbar
			visible={Boolean(visible)}
			onDismiss={onDismiss}
			style={{ backgroundColor: color.shadow }}
			theme={{}}
			action={action}>
			<CText title={context} style={{ color: color.title }} />
		</Snackbar>
	)
}
// action={{
// 	label: 'Undo',
// 	onPress: () => {
// 		// Do something
// 	},
// }}
export default React.memo(CSnackbar)
