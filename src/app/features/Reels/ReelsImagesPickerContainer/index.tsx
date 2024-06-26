import { useEffect, useState } from 'react'
import {
	PermissionsAndroid,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { CFlatList } from '~app/common'
import { FONTS } from '~theme'
import { VideoItem } from '~app/entities'

const ReelsImagesPicker = () => {
	const [nodes, setNodes] = useState<any>([])

	useEffect(() => {
		// checkPermission().then(permissionGranted => {
		// 	if (permissionGranted) {
		// 		getVideos()
		// 	}
		// })
		getVideos()
	}, [])

	const checkPermission = async () => {
		const hasPermission = await PermissionsAndroid.check(
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
		)

		console.log('Has permission = ', hasPermission)

		if (hasPermission) {
			return true
		}

		const status = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			{
				title: 'Reels Permission',
				message: 'Quibit requires the permission to your gallery',
				buttonPositive: 'OK',
			}
		)

		console.log('Status = ', status)

		return status === 'granted'
	}

	const getVideos = async () => {
		const videos = await CameraRoll.getPhotos({
			first: 21,
			assetType: 'Videos',
		})

		setNodes(videos.edges.map(edge => edge.node))
		// videos.edges.map(edge => console.log('Video = ', edge.node.image.uri))
	}

	const renderItem = ({ item }) => <VideoItem item={item} />

	return (
		<View style={styles.container}>
			{nodes.length > 0 ? (
				<ScrollView style={styles.videosContainer}>
					<Text style={[styles.disclaimerMsg, { ...FONTS.h5 }]}>
						These videos will only be used within this app and will
						not be shared.
					</Text>
					<CFlatList
						data={nodes}
						renderItem={renderItem}
						numColumns={3}
					/>
				</ScrollView>
			) : (
				<Text>No videos found</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0.82,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	videosContainer: {
		flex: 1,
		width: '100%',
	},
	disclaimerMsg: {
		width: '70%',
		textAlign: 'center',
		alignSelf: 'center',
		fontWeight: '800',
		paddingHorizontal: 10,
		marginBottom: 10,
	},
})

export default ReelsImagesPicker
