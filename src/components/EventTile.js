import React from 'react'
import { EventGallery } from '.'
import './eventtile.css'

function EventTypeInfo({ n, name, description, imgLink, bgColor, textColor }) {
	var dir = n % 2 ? "left" : "right"
	return (
		<div className={"event-type-info " + dir} style={{
			backgroundColor: bgColor, color: textColor
		}}>
			<div className="event-type-info-text">
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<div className="event-type-info-img">
				<img src={imgLink} alt={name} />
			</div>
		</div>
	)
}

const EventTile = ({ n, data }) => (
	<div id={data.id}>
		<EventTypeInfo
			n={n}
			name={data.name}
			description={data.description}
			imgLink={data.img_link}
			bgColor={data.bg_color}
			textColor={data.text_color} />
		<EventGallery data={data.happenings} seeMoreText={data.see_more_text} />
	</div>
)

export default EventTile