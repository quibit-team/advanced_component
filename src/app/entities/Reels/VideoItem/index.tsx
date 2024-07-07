import { StyleSheet, TouchableOpacity } from 'react-native'
import { CImage } from '~app/common'

const VideoItem = ({item}) => {
	return (
		<TouchableOpacity style={styles.videoItem}>
			<CImage
				src={{ uri: item.image.uri }}
				style={styles.videoThumbnail}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
    videoItem: {
		width: 300,
		height: 300,
		margin: 2,
		aspectRatio: 0.6,
		flex: 1,
	},
	videoThumbnail: {
		width: '100%',
		height: '100%',
	},
})

export default VideoItem
