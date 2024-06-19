import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconComp } from '~app/components'
import { useColor, FONTS, COLORS } from '~theme/theme'

const HomeScreenHeader = ({ menuVisible, setMenuVisible, menuText }) => {
	const colors = useColor()
	const rotateAnim = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(rotateAnim, {
			toValue: menuVisible ? 1 : 0,
			duration: 200,
			easing: Easing.linear,
			useNativeDriver: true,
		}).start()
	}, [menuVisible])

	const handlePress = () => {
		setMenuVisible(prev => !prev)
	}

	const rotation = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	})

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.dropdown} onPress={handlePress}>
				<Text
					style={{
						...FONTS.h3,
						fontWeight: '600',
						color: colors.title,
					}}>
					{menuText === "Feeds" ? 'Quibit' : menuText}
				</Text>
				<Animated.View style={{transform: [{rotate: rotation}]}}>
					<IconComp
						type={'MaterialCommunityIcons'}
						size={24}
						name={'chevron-down'}
						color={colors.title}
					/>
				</Animated.View>
			</TouchableOpacity>
			<IconComp type="Feather" size={24} name={'search'} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	dropdown: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
        justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderLeftWidth: .01,
		borderRightWidth: .01,
		borderColor: COLORS.borderDark,
		borderTopWidth: 0,
		borderRadius: 16,
		elevation: 2,  
		shadowColor: '#000',  
		shadowOffset: { width: 0, height: 2 },  
		shadowOpacity: 0.25,  
		shadowRadius: 3,  
		backgroundColor: 'white',
        width: 110
	},
})

export default HomeScreenHeader
