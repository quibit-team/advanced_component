import React, { useState, forwardRef, useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import ImageView from 'react-native-image-viewing'

import { useColor } from '~theme/theme'
import IconComp from '../IconComp'

const ProfileImageView = forwardRef(
	({ image, size, iconSize, style = {} }: any, _) => {
		const [imageError, setImageError] = useState(false)
		const color = useColor()
		const [isVisible, setIsVisible] = useState(false)
		const [currentImage, setCurrentImage] = useState<any>(null)
		const handleOpen = () => {
			setCurrentImage({ uri: image })
			setIsVisible(true)
		}
		const handleClose = () => {
			setIsVisible(false)
		}

		return (
			<View
				style={{
					width: size || 35,
					height: size || 35,
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 100,
					backgroundColor: color.input,

					...style,
				}}>
				{image ? (
					!imageError ? (
						<>
							<TouchableOpacity onPress={handleOpen}>
								<FastImage
									style={{
										width: size || 35,
										height: size || 35,
										borderRadius: 100,
										...style,
									}}
									source={{ uri: image }}
									resizeMode={FastImage.resizeMode.cover}
									onError={() => setImageError(true)}
								/>
							</TouchableOpacity>
							<ImageView
								images={[currentImage]}
								imageIndex={0}
								visible={isVisible}
								onRequestClose={handleClose}
							/>
						</>
					) : (
						<IconComp
							type={'FontAwesome'}
							name={'user'}
							size={iconSize || 20}
							color={color.title}
						/>
					)
				) : (
					<IconComp
						type={'AntDesign'}
						name={'user'}
						size={iconSize || 20}
						color={color.title}
					/>
				)}
				<FastImage
					style={{
						display: 'none',
					}}
					source={{ uri: image }}
					resizeMode={FastImage.resizeMode.cover}
					onError={() => setImageError(true)}
					onLoad={() => setImageError(false)}
				/>
			</View>
		)
	}
)

const CProfileImage = ({ image, size, iconSize, ...props }, ref) => {
	const profileImageRef = useRef(null)

	return (
		<ProfileImageView
			ref={ref || profileImageRef}
			image={image}
			size={size || 30}
			iconSize={iconSize || 20}
			{...props}
		/>
	)
}

export default forwardRef(CProfileImage)
