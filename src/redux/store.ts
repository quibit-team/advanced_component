import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import EncryptedStorage from 'react-native-encrypted-storage'
import { rootReducer } from './rootReducer'

const persistConfig = {
	key: 'root',
	storage: EncryptedStorage,
	whitelist: ['user', 'appstore'],
	blacklist: ['appnotstore'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
})

export const persistor = persistStore(store)
export default store
