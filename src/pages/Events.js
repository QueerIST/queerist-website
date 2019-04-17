import React from 'react'
import { Page, PageCover, EventTile, Separator } from '../components'

const Events = () => (
	<Page>
		<PageCover />
		<Separator />
		<EventTile n={0} id="tertulia" bgColor="blue" textColor="white" />
	</Page>
)


export default Events