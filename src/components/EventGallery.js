import React from 'react'
import './eventgallery.css'
import { ReactComponent as Launch } from './../svg/launch.svg'
import { ReactComponent as Expand } from './../svg/expand.svg'
import { ReactComponent as Collapse } from './../svg/collapse.svg'
import AnimateHeight from 'react-animate-height'

const Arrow = ({ open, seeMoreText }) => (
	open ?
		(
			<Collapse />
		) : (
			<div>
				<p>{seeMoreText}</p>
				<Expand />
			</div>
		)
)

class EventGalleryWrap extends React.Component {

	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	toggleGallery = () => {
		this.setState({ open: !this.state.open })
	}

	getHeight = (open) => open ? "auto" : '0'

	render() {
		return (
			<React.Fragment>
				<AnimateHeight duration={300} height={this.getHeight(this.state.open)} >
					<ul className="event-gallery">
						{this.props.children}
					</ul>
				</AnimateHeight>
				<button onClick={this.toggleGallery} className="toggleGallery">
					<Arrow open={this.state.open} seeMoreText={this.props.seeMoreText} />
				</button>
			</React.Fragment >
		)
	}
}

const EventGalleryItem = ({ name, description, date, place, imgLink, link }) => (
	<li className="event-gallery-item">
		<div className="event-gallery-item-img">
			<img src={imgLink} alt={name} />
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

function EventGallery({ data, seeMoreText }) {
	return (
		<EventGalleryWrap seeMoreText={seeMoreText}>
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