import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
const initialState = {
	token: null,
	user: null,
}

export const usersSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		loginData(state, { payload }) {
			const user = JSON.parse(payload)
			const decoded: any = user?.access_token
				? jwtDecode(user?.access_token)
				: null

			if (decoded) {
				// state.user = user?.user
				state.token = user?.access_token
			} else {
				state.user = null
			}
		},
		addUser(state, { payload }) {
			state.user = payload || null
		},
		userLogout(state) {
			state.user = null
			state.token = null
		},
	},
})
export const { loginData, userLogout, addUser } = usersSlice.actions
export default usersSlice.reducer
