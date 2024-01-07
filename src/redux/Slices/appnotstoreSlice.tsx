import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	scrolHide: false,
}

export const appnotstore = createSlice({
	name: 'appnotstore',
	initialState: initialState,
	reducers: {
		hideTabBar(state, { payload }) {
			state.scrolHide = payload
		},
	},
})
export const { hideTabBar } = appnotstore.actions

export default appnotstore.reducer
