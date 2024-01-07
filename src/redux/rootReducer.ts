import { combineReducers } from '@reduxjs/toolkit'
import { usersReducer, appStoreReducer, appnotstoreReducer } from './Slices'

export const rootReducer = combineReducers({
	user: usersReducer,
	appstore: appStoreReducer,
	appnotstore: appnotstoreReducer,
})
