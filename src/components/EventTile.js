import React from 'react'
import { EventGallery } from '.'
import './eventtile.css'

function EventTypeInfo() {
	return (
		<div className="event-type-info" style={{ backgroundColor: "blue", color: "white" }}>
			<div className="event-type-info-img">
				<img src="assets/tertulia.jpg" alt="Tertúlias Arco-Íris" />
			</div>
			<div className="event-type-info-text">
				<h3>Tertúlias Arco-Íris</h3>
				<p>Sessões de partilha e discussão</p>
			</div>
		</div>
	)
}

class EventTile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<EventTypeInfo />
				<EventGallery />
			</React.Fragment>
		)
	}
}

export default EventTile