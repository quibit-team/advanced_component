import { SIZES } from '~theme'
import { isIphone } from '~utils/utilities'

// My-Profile
export const PROFILE_IMAGE_ZINDEX = 22
export const PROFILE_IMAGE_CONTAINER_ZINDEX = 23
export const PROFILE_CONTAINER_RADIUS = SIZES.width * 0.08
export const PROFILE_COVER_SIZE = SIZES.height / 2.5
export const PROFILE_HEADER_TOP = isIphone ? -418 : 415
export const PROFILE_HEADER_ZINDEX = 10
export const PROFILE_NAVBAR = 20

// STATUS BAR
export const STATUS_BAR_HEIGHT = 50

// custom toast popup
export const CUSTOM_TOAST = 1

// Create Post
export const CREATE_POST_IMAGE_UPLOAD = 0
export const CREATE_POST_SELECT_IMAGE = 0

export const BORDER_FULL_RADIUS = 100

// Z_INDEX
// custom status bar and custom header bar
export const C_STATUS_BAR_ZINDEX = 1
export const C_HEADER_BAR_ZINDEX = 1
export const FLOAT_BTN_ZINDEX = 99
export const C_HEADER_ZINDEX = 10

// Category
export const CATEGORIES_HEIGHT = 130

// BOTTOMS TAB HEIGHT
export const BOTTOM_TAB_HEIGHT = isIphone ? 75 : 60

export const SCROLL_THRESHOLD = 100
