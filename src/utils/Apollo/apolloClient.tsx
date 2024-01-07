import { ApolloClient, from } from '@apollo/client'
import { errorLink, authLink, splitLink } from './apolloLink'
import { cache } from './apolloCache'

const apolloClient = () => {
	return new ApolloClient({
		link: from([errorLink, authLink, splitLink]),
		cache: cache,
	})
}
export default apolloClient
