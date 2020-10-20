import React from 'react'
import { Page, PageCover, Tile, Separator, HighlightBox } from '../components'

const Events = ({ data }) => (
	<Page data={data}>
		<PageCover data={data} />
		<Separator />
		{data.events.map(
			(event, i) => (
				<Tile key={i} n={i} data={event} />
			)
		)}
		<HighlightBox data={data.highlightbox} />
	</Page>
)


export default Events