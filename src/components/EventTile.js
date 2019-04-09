import React from 'react'
import './eventtile.css'

function EventTypeInfo() {
	return (
		<div className="event-type-info" style={{ backgroundColor: "blue", color: "white" }}>
			<div className="event-type-info-img">
				<img src="assets/tertulia.jpg" />
			</div>
			<div className="event-type-info-text">
				<h3>Tertúlias</h3>
				<p>Sessões de partilha e discussão</p>
			</div>
		</div>
	)
}

class EventTile extends React.Component {
	render() {
		return <EventTypeInfo />
	}
}

export default EventTile