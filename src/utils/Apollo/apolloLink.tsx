import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { createUploadLink } from 'apollo-upload-client'
import { split } from '@apollo/client'
import EncryptedStorage from 'react-native-encrypted-storage'

// import {
// 	REACT_APP_API_URL,
// 	SERVER_SOCKET,
// 	SERVER_URL,
// 	WEBSOCKET_API_URL,
// } from '~constants/API_KEYS'
import { USER_SESSION } from '~constants/CONFIG_KEYS'
import {
	REACT_APP_API_URL,
	SERVER_SOCKET,
	SERVER_URL,
	WEBSOCKET_API_URL,
} from '~constants/API_KEYS'

//SERVER
// const websocketApiUrl = serverSocket
// 	? serverSocket
// 	: serverURL.replace('https://', 'wss://').replace('http://', 'ws://')

const subscriptionClient = createClient({
	url: SERVER_SOCKET,
	//url: WEBSOCKET_API_URL,
})
const wsLink = new GraphQLWsLink(subscriptionClient)

const uploadLink = createUploadLink({
	uri: SERVER_URL,
	//uri: REACT_APP_API_URL,
	credentials: 'include',
	headers: { 'Apollo-Require-Preflight': 'true' },
})

export const splitLink = split(
	({ query }) => {
		const {
			kind,
			operation,
		}: { kind: string; operation?: string | undefined } =
			getMainDefinition(query)
		return kind === 'OperationDefinition' && operation === 'subscription'
	},
	wsLink,
	uploadLink
)
export const authLink = setContext(async (_, { headers }) => {
	const token = await EncryptedStorage.getItem(USER_SESSION)
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

export const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message, locations, path }) => {
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		})
	}
	if (networkError) {
		console.log(`[Network errorsss]: ${networkError}`)
	}
})
// export const uploadLink = createUploadLink({
// 	uri: process.env.NODE_ENV === 'production' ? serverURL : REACT_CLONE_URL,
// 	credentials: 'include',
// 	headers: { 'Apollo-Require-Preflight': 'true' },
// })
