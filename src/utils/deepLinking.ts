export const deepLinking: any = {
	//디폴트 프로토콜 설정 필요
	prefixes: ['quiibit://', 'https://quiibit.com'],
	config: {
		screens: {
			UserBottomTabs: {
				initialRouteName: 'UserBottomTabs',
				screens: {
					NewFeedTab: 'NewFeedTab',
					CategoryTab: 'CategoryTab',
					ChatTab: 'ChatTab',
					NotificationTab: 'NotificationTab',
					ProfileTab: 'ProfileTab',
				},
			},
			PostDetailScreen: {
				path: 'PostDetailScreen/:postId',
			},
			FindJobDetailScreen: {
				path: 'FindJobDetailScreen/:id',
			},
			MarketDetailScreen: {
				path: 'MarketDetailScreen/:marketId',
			},
			ProductDetailScreen: {
				path: 'ProductDetailScreen/:productId',
			},
		},
	},
}
