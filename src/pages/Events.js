import React from 'react'
import { Page, PageCover, Tile, Separator } from '../components'

const Events = ({ data }) => (
	<Page>
		<PageCover data={data} />
		<Separator />
		{data.events.map(
			(event, i) => (
				<Tile key={i} n={i} data={event} />
			)
		)}
	</Page>
)


export default Events