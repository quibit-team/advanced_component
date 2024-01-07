import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstTime: false,
	rememberMe: {
		phone: '',
		password: '',
		rememberPhone: '',
	},
}

export const appStore = createSlice({
	name: 'appstore',
	initialState: initialState,
	reducers: {
		updateFirstTime(state, { payload }) {
			state.firstTime = payload
		},
		rememberMe(state, { payload }) {
			state.rememberMe = payload
		},
	},
})
export const { updateFirstTime, rememberMe } = appStore.actions

export default appStore.reducer
