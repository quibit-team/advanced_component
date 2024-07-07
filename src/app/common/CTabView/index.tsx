import { forwardRef, useCallback } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

interface IProps {
	ref?: any
	data?: any[]
	horizontal?: boolean
	pagingEnabled?: boolean
	snapToAlignment?: any
	showsHorizontalScrollIndicator?: any
	viewabilityConfig?: any
	onScroll?: any
	renderItem?: ({ item, index }: { item: any; index: number }) => JSX.Element
}

const CTabView = forwardRef<FlatList<any>, IProps>(({
    data,
    horizontal,
    pagingEnabled,
    snapToAlignment,
    showsHorizontalScrollIndicator,
    viewabilityConfig,
    onScroll,
    renderItem,
}, ref) => {
    const renderItemWithIndex = useCallback(
        ({ item, index }) => renderItem && renderItem({ item, index }),
        [renderItem]
    )

    return (
        <FlatList
            ref={ref}
            data={data}
            horizontal={horizontal}
            pagingEnabled={pagingEnabled}
            snapToAlignment={snapToAlignment}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            viewabilityConfig={viewabilityConfig}
            onScroll={onScroll}
            keyExtractor={item => item.key}
            renderItem={renderItemWithIndex as ListRenderItem<any>}
        />
    )
})

export default CTabView
