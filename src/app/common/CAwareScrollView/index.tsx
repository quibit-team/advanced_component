import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const CAwareScrollView = ({
	ref,
	children,
	verticalindicator = false,
	horizontalIndicator = false,
	bounce = false,
	style,
}: any) => {
	return (
		<KeyboardAwareScrollView
			ref={ref}
			showsHorizontalScrollIndicator={horizontalIndicator}
			showsVerticalScrollIndicator={verticalindicator}
			bounces={bounce}
			// stickyHeaderIndices={[1]}
			style={{ height: '100%', ...style }}>
			{children}
		</KeyboardAwareScrollView>
	)
}

export default React.memo(CAwareScrollView)
