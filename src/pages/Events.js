import React from 'react'
import { Page, PageCover, EventTile, Separator } from '../components'

class Events extends React.Component {

	render() {
		return (
			<Page>
				<PageCover />
				<Separator />
				<EventTile />
			</Page>
		)
	}
}


export default Events