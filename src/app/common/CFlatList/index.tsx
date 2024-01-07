import React, { useCallback } from 'react'
import { View } from 'react-native'
import { FlashList, ListRenderItem } from '@shopify/flash-list'
import { useColor } from '~theme/theme'
interface IProps {
	/**
	 * An array of data to be rendered.
	 */
	data?: any[]
	/**
	 * A component to be rendered between the items.
	 */
	separator?: any
	/**
	 * A ref object to access the underlying FlatList instance.
	 */
	ref?: any
	/**
	 * Specifies how many columns to show.
	 */
	numColumns?: number
	/**
	 * Renders the item component. Is passed an object containing the item data.
	 */
	renderItem?: ({ item, index }: { item: any; index: number }) => JSX.Element
	/**
	 * If true, the list scrolls horizontally instead of vertically.
	 */
	horizontal?: boolean
	/**
	 * If true, the list is refreshing.
	 */
	refreshing?: boolean
	/**
	 * A function to be called when the list is refreshing.
	 */
	onRefresh?: () => void
	/**
	 * A function to be called when the list has reached the end.
	 */
	onEndReached?: () => void
	/**
	 * The threshold (in units of visible length of the list) for calling `onEndReached`.
	 * A value of 0.8 means that `onEndReached` will be called when the end of the list
	 * is within 80% of the visible length of the list.
	 */
	onEndReachedThreshold?: number
	/**
	 * The style of the list container.
	 */
	style?: any
	/**
	 * A component to be rendered at the Top of the list.
	 */
	ListHeaderComponent?: JSX.Element
	/**
	 * A component to be rendered at the end of the list.
	 */
	ListFooterComponent?: JSX.Element
	/**
	 * The style of the list footer component.
	 */
	listFooterStyle?: any

	initialScrollIndex?: number

	removeClippedSubviews?: boolean

	inverted?: boolean

	onScroll?: any

	pagingEnabled?: boolean

	scrollEnabled?: boolean

	bounces?: boolean

	onViewableItemsChanged?: any

	stickyHeaderIndices?: any
}

const CFlatList = ({
	data,
	renderItem,
	horizontal,
	onRefresh,
	refreshing,
	onEndReached,
	ref,
	onEndReachedThreshold,
	separator,
	numColumns,
	style = {},
	ListHeaderComponent,
	ListFooterComponent,
	listFooterStyle,
	initialScrollIndex,
	removeClippedSubviews = false,
	inverted = false,
	onScroll,
	pagingEnabled = false,
	scrollEnabled = true,
	bounces = true,
	onViewableItemsChanged,
	stickyHeaderIndices = [],
}: IProps) => {
	const color = useColor()
	const keyExtractor = useCallback((_, index) => index.toString(), [])
	const ItemSeparatorComponent = () => (
		<View
			style={{ height: 5, backgroundColor: color.opacity, width: '100%' }}
		/>
	)
	const renderItemWithIndex = useCallback(
		({ item, index }) => renderItem && renderItem({ item, index }),
		[renderItem]
	)
	return (
		<View style={{ flex: 1, minHeight: 2 }}>
			<FlashList
				data={data}
				ref={ref ? ref : null}
				renderItem={renderItemWithIndex as ListRenderItem<any>}
				keyExtractor={keyExtractor}
				refreshing={refreshing}
				onRefresh={onRefresh}
				onEndReached={onEndReached ? onEndReached : null}
				onEndReachedThreshold={
					onEndReachedThreshold ? onEndReachedThreshold : 0.8
				}
				scrollEventThrottle={16}
				pagingEnabled={pagingEnabled}
				estimatedItemSize={200}
				ItemSeparatorComponent={
					separator ? separator : ItemSeparatorComponent
				}
				ListHeaderComponent={ListHeaderComponent}
				ListFooterComponent={ListFooterComponent}
				ListFooterComponentStyle={listFooterStyle}
				nestedScrollEnabled={true}
				scrollEnabled={scrollEnabled}
				numColumns={numColumns}
				horizontal={horizontal}
				contentContainerStyle={{
					...style,
				}}
				bounces={bounces}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				initialScrollIndex={initialScrollIndex}
				removeClippedSubviews={removeClippedSubviews}
				inverted={inverted}
				onScroll={onScroll}
				onViewableItemsChanged={onViewableItemsChanged}
				stickyHeaderIndices={stickyHeaderIndices}
			/>
		</View>
	)
}

export default React.memo(CFlatList)
