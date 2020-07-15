import React from 'react'
import { EventGallery, Button } from '.'
import { publicPath } from '../helpers'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Expand } from './../svg/expand.svg'
// import { ReactComponent as Launch } from './../svg/launch.svg'

import './tile.css'

class TileInfo extends React.Component {

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
				className="tile-info-b"
				to={{
					pathname: `${parentPage}/${id}`
				}}>
				{seeMoreText}
				{/* <Launch fill={textColor} /> */}
			</NavLink>
		) : (
				<button
					onClick={this.toggleGallery}
					className={`tile-info-b tile-info-button ${openClass}`}>
					{seeMoreText}
					<Expand fill={textColor} />
				</button>
			)
		return (
			<div className={`tile-info ${dir}`} style={{
				backgroundColor: bgColor, color: textColor
			}}>
				<div className={`tile-info-text ${openClass}`}>
					<h3 className="tile-info-text-text">{name}</h3>
					<p className="tile-info-text-desc tile-info-text-text">{description}</p>
					<Button borderColor={textColor} color={textColor}>
						{EventTypeInfoButton()}
					</Button>
				</div>
				<div className="tile-info-img">
					<img className={openClass} src={publicPath(imgLink)} alt={name} />
					{happenings && <EventGallery open={this.state.open} data={happenings} />}
				</div>
			</div>
		)
	}
}

const Tile = ({ n, data, parentPage }) => (
	<div id={data.id}>
		<TileInfo
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

export default Tile