import React from 'react'
import './eventgallery.css'
import { publicPath } from '../helpers'
import { ReactComponent as Launch } from './../svg/launch.svg'

function EventGalleryWrap(props) {
	const getClassName = () => props.open ? "" : "closed"

	return (
		<ul className={`event-gallery ${getClassName()}`}>
			{props.children}
		</ul>
	)
}

const EventGalleryItem = ({ name, description, date, place, imgLink, link }) => (
	<li className="event-gallery-item">
		<div className="event-gallery-item-img">
			<img src={publicPath(imgLink)} alt={name} />
		</div>
		<div className="event-gallery-item-text">
			<h3>{name}</h3>
			<span className="event-gallery-item-launch">
				<h4>{date} @ {place}</h4>
				<a href={link}><Launch /></a>
			</span>
			<p>{description}</p>
		</div>
	</li>
)

function EventGallery({ data, open, seeMoreText }) {
	return (
		<EventGalleryWrap open={open} seeMoreText={seeMoreText}>
			{data.map(
				(event, i) => (
					<EventGalleryItem
						key={i}
						name={event.name}
						description={event.description}
						date={event.date}
						place={event.place}
						imgLink={event.img_link}
						link={event.link}
					/>
				)
			)}
		</EventGalleryWrap>
	)
}

export default EventGallery