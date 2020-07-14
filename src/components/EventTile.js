import React from 'react'
import { EventGallery, Button } from '.'
import { publicPath } from '../helpers'
import { ReactComponent as Expand } from './../svg/expand.svg'

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
		const { n, name, description, imgLink, bgColor, textColor, happenings, seeMoreText } = this.props;
		const dir = n % 2 ? "left" : "right";
		const openClass = this.state.open ? "open" : "";
		return (
			<div className={`event-type-info ${dir}`} style={{
				backgroundColor: bgColor, color: textColor
			}}>
				<div className={`event-type-info-text ${openClass}`}>
					<h3 className="event-type-info-text-text">{name}</h3>
					<p className="event-type-info-text-desc event-type-info-text-text">{description}</p>
					<Button>
						<button onClick={this.toggleGallery} className={`event-type-info-button ${openClass}`}>
							{dir === "right" ? seeMoreText : null}
							<Expand fill={textColor} />
							{dir === "left" ? seeMoreText : null}
						</button>
					</Button>
				</div>
				<div className="event-type-info-img">
					<img className={openClass} src={publicPath(imgLink)} alt={name} />
				</div>
			</div>
		)
	}
}

const EventTile = ({ n, data }) => (
	<div id={data.id}>
		<EventTypeInfo
			n={n}
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