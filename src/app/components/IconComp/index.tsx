import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useColor } from '~theme/theme'
import { Text } from 'react-native'

const IconComp = ({ type, name, color, size, style }: any) => {
	const theme = useColor()
	switch (type) {
		case 'MaterialIcons':
			return (
				<MaterialIcons
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'FontAwesome5Brands':
			return (
				<FontAwesome5Brands
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'SimpleLineIcons':
			return (
				<SimpleLineIcons
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'Octicons':
			return (
				<Octicons
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'EvilIcons':
			return (
				<EvilIcons
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'Entypo':
			return (
				<Entypo
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)

		case 'Ionicons':
			return (
				<Ionicons
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)

		case 'MaterialCommunityIcons':
			return (
				<MaterialCommunityIcons
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)

		case 'Feather':
			return (
				<Feather
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)

		case 'FontAwesome5':
			return (
				<FontAwesome5
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'FontAwesome':
			return (
				<FontAwesome
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'Fontisto':
			return (
				<Fontisto
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)
		case 'AntDesign':
			return (
				<AntDesignIcon
					name={name}
					size={size || 20}
					color={color || theme.title}
					style={style}
				/>
			)

		default:
			return <Text>..</Text>
			break
	}
}

export default IconComp
