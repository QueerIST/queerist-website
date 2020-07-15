import React from 'react'
import { EventGallery, Button } from '.'
import { publicPath } from '../helpers'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Expand } from './../svg/expand.svg'
// import { ReactComponent as Launch } from './../svg/launch.svg'

import './eventtile.css'

class EventTypeInfo extends React.Component {

	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	toggleGallery = () => {
		this.setState({ open: !this.state.open })
	}

	render() {
		const { n, id, parentPage, name, description, imgLink, bgColor, textColor, happenings, seeMoreText } = this.props;
		const dir = n % 2 ? "left" : "right";
		const openClass = this.state.open ? "open" : "";
		const EventTypeInfoButton = () => parentPage ? (
			<NavLink
				className="event-type-info-b"
				to={{
					pathname: `${parentPage}/${id}`
				}}>
				{seeMoreText}
				{/* <Launch fill={textColor} /> */}
			</NavLink>
		) : (
				<button
					onClick={this.toggleGallery}
					className={`event-type-info-b event-type-info-button ${openClass}`}>
					{seeMoreText}
					<Expand fill={textColor} />
				</button>
			)
		return (
			<div className={`event-type-info ${dir}`} style={{
				backgroundColor: bgColor, color: textColor
			}}>
				<div className={`event-type-info-text ${openClass}`}>
					<h3 className="event-type-info-text-text">{name}</h3>
					<p className="event-type-info-text-desc event-type-info-text-text">{description}</p>
					<Button borderColor={textColor} color={textColor}>
						{EventTypeInfoButton()}
					</Button>
				</div>
				<div className="event-type-info-img">
					<img className={openClass} src={publicPath(imgLink)} alt={name} />
					{happenings && <EventGallery open={this.state.open} data={happenings} />}
				</div>
			</div>
		)
	}
}

const EventTile = ({ n, data, parentPage }) => (
	<div id={data.id}>
		<EventTypeInfo
			n={n}
			id={data.id}
			parentPage={parentPage}
			name={data.name}
			description={data.description}
			imgLink={data.img_link}
			bgColor={data.bg_color}
			textColor={data.text_color}
			happenings={data.happenings}
			seeMoreText={data.see_more_text}
		/>
	</div>
)

export default EventTile