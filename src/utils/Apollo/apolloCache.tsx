import { InMemoryCache, defaultDataIdFromObject } from '@apollo/client'

export const cache = new InMemoryCache({
	typePolicies: {},
})
