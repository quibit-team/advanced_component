import { CBackground } from '~app/common'
import { ReelsScreenHeader } from '~app/components'
import { CreateReelsOptionsList } from '~app/features'
import ReelsImagesPicker from '~app/features/Reels/ReelsImagesPickerContainer'

const ReelsScreen = () => {
	return (
		<CBackground>
			<ReelsScreenHeader />
			<CreateReelsOptionsList />
			<ReelsImagesPicker />
		</CBackground>
	)
}

export default ReelsScreen
