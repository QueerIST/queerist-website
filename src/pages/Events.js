import React from 'react'
import { Page, PageCover, EventTile, Separator } from '../components'

const Events = ({ data }) => (
	<Page>
		<PageCover data={data} />
		<Separator />
		{data.events.map(
			(event, i) => (
				<EventTile key={i} n={i} data={event} />
			)
		)}
	</Page>
)


export default Events