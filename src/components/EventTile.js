import React from 'react'
import { EventGallery, Button } from '.'
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
					<h3>{name}</h3>
					<p>{description}</p>
					<Button>
						<button onClick={this.toggleGallery} className={`event-type-info-button ${openClass}`}>
							{dir === "right" ? seeMoreText : null}
							<Expand fill={textColor} />
							{dir === "left" ? seeMoreText : null}
						</button>
					</Button>
				</div>
				<div className="event-type-info-img">
					<img className={openClass} src={imgLink} alt={name} />
					<EventGallery open={this.state.open} data={happenings} />
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