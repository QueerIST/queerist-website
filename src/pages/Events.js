import React from 'react'
import { Page, PageCover, EventTile } from '../components'

class Events extends React.Component {

	render() {
		return (
			<Page>
				<PageCover />
				<EventTile />
			</Page>
		)
	}
}


export default Events