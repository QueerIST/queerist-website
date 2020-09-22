import React from 'react'
import ReactGA from 'react-ga'
import './eventgallery.css'
import { publicPath, WrapDelayed } from '../helpers'
import { ReactComponent as Launch } from './../svg/launch.svg'

const handleClickEventLink = (event) => {
	ReactGA.event({
		category: "EventGallery",  // Required
		action: `Clica link de ${event}`  // Required
	})
}

function EventGalleryWrap(props) {
	const getClassName = () => props.open ? "" : "closed"

	return (
		<ul className={`event-gallery ${getClassName()}`}>
			{props.children}
		</ul>
	)
}

const EventGalleryItem = ({ name, description, open, date, place, imgLink, link }) => (
	<li className="event-gallery-item">
		<div className="event-gallery-item-img">
			<WrapDelayed load={open}>
				<img src={publicPath(imgLink)} alt={name} />
			</WrapDelayed>
		</div>
		<div className="event-gallery-item-text">
			<h3>{name}</h3>
			<span className="event-gallery-item-launch">
				<p>{date} @ {place}</p>
				<a href={link} target="_blank" rel="noopener noreferrer" onClick={() => handleClickEventLink(name)}> <Launch /></a>
			</span>
			{/* <p>{description}</p> */}
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
						open={open}
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