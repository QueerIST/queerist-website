import React from 'react'
import { EventGallery } from '.'
import './eventtile.css'

function EventTypeInfo({ n, bgColor, textColor }) {
	var dir = n % 2 ? "left" : "right"
	return (
		<div className={"event-type-info " + dir} style={{
			backgroundColor: bgColor, color: textColor
		}}>
			<div className="event-type-info-text">
				<h3>Tertúlias Arco-Íris</h3>
				<p>Sessões de partilha e discussão</p>
			</div>
			<div className="event-type-info-img">
				<img src="assets/tertulia.jpg" alt="Tertúlias Arco-Íris" />
			</div>
		</div>
	)
}

const EventTile = ({ n, id, bgColor, textColor }) => (
	<div id={id}>
		<EventTypeInfo n={n} bgColor={bgColor} textColor={textColor} />
		<EventGallery />
	</div>
)

export default EventTile