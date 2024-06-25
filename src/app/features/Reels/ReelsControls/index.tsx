import { useCallback, useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconComp, ReelsControlsItem } from '~app/components'
import { images } from '~assets/images'
import { FONTS } from '~theme'

const options = ['10m', '60s', '15s', 'Photo', 'Video']

const ReelsControls = ({ cameraPosition, setCameraPosition }) => {
	const [selectedOption, setSelectedOption] = useState('15s')
	
	return (
		<View style={styles.controls}>
			<TouchableOpacity style={styles.addSoundBtn}>
				<IconComp
					type={'Feather'}
					name={'music'}
					size={20}
					color={'white'}
				/>
				<Text style={{ ...FONTS.h3, color: '#fff', fontWeight: '600' }}>
					Add sound
				</Text>
			</TouchableOpacity>
			<View style={styles.rightControls}>
				<ReelsControlsItem
					type={'Feather'}
					name={'refresh-cw'}
					size={30}
					color={'white'}
					title={'Flip'}
					value={cameraPosition}
					setValue={setCameraPosition}
					icon={true}
					action={'flip'}
				/>
				<ReelsControlsItem
					type={'SimpleLineIcons'}
					name={'speedometer'}
					size={30}
					color={'white'}
					title={'Speed'}
					icon={true}
				/>
				<ReelsControlsItem
					type={'MaterialCommunityIcons'}
					name={'palette'}
					size={30}
					color={'white'}
					title={'Filters'}
					icon={true}
				/>
				<ReelsControlsItem
					type={'MaterialCommunityIcons'}
					name={'account'}
					size={30}
					color={'white'}
					title={'Beauty'}
					icon={true}
				/>
				<ReelsControlsItem
					type={'MaterialCommunityIcons'}
					name={'av-timer'}
					size={30}
					color={'white'}
					title={'Timer'}
					icon={true}
				/>
				<ReelsControlsItem
					type={'Feather'}
					name={'mic'}
					size={30}
					color={'white'}
					title={'Voice'}
					icon={true}
				/>
				<ReelsControlsItem
					type={'Feather'}
					name={'zap-off'}
					size={30}
					color={'white'}
					title={'Voice'}
					icon={true}
				/>
			</View>
			<View>
				<View style={styles.optionsContainer}>
					{options.map(option => (
						<TouchableOpacity
							key={option}
							style={[
								styles.option,
								{
									backgroundColor:
										option === selectedOption
											? '#fff'
											: 'transparent',
								},
							]}
							onPress={() => setSelectedOption(option)}>
							<Text
								style={{
									...FONTS.h4,
									color:
										option === selectedOption
											? '#000'
											: '#fff',
								}}>
								{option}
							</Text>
						</TouchableOpacity>
					))}
				</View>
				<View style={styles.bottomContainer}>
					<ReelsControlsItem
						title={'Effects'}
						src={images.reels_demo}
						// setValue={onBottomSheet}
						action={'effects'}
					/>
					<TouchableOpacity style={styles.cameraBtnContainer}>
						<View style={styles.cameraBtn}></View>
					</TouchableOpacity>
					<ReelsControlsItem
						title={'Upload'}
						src={images.reels_demo}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	controls: {
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: 40
	},
	addSoundBtn: {
		margin: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'rgba(69, 68, 64, 0.7)',
		alignItems: 'center',
		paddingVertical: 10,
		width: 150,
		alignSelf: 'center',
		borderRadius: 10,
		gap: 10,
	},
	rightControls: {
		position: 'absolute',
		right: 10,
		top: 80,
		alignItems: 'center',
	},
	optionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		gap: 15,
		paddingHorizontal: 16,
	},
	option: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 3,
		borderRadius: 30,
	},
	bottomContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
	},
	cameraBtnContainer: {
		padding: 5,
		borderWidth: 5,
		borderColor: '#fff',
		borderRadius: 100,
		marginTop: 20,
		marginBottom: 10,
	},
	cameraBtn: {
		width: 70,
		height: 70,
		backgroundColor: '#fff',
		borderRadius: 100,
	},
})

export default ReelsControls
