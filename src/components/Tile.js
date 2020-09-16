import React from 'react'
import { EventGallery, Button } from '.'
import { publicPath } from '../helpers'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Expand } from './../svg/expand.svg'
// import { ReactComponent as Launch } from './../svg/launch.svg'

import './tile.css'

function PageTileInfo({ id, parentPage, name, description, imgLink, logoLink, bgColor, textColor, happenings, seeMoreText }) {
	const EventTypeInfoButton = (
		<NavLink
			className="tile-info-b"
			to={{
				pathname: `/${parentPage}/${id}`
			}}>
			{seeMoreText}
			{/* <Launch fill={textColor} /> */}
		</NavLink>
	)
	return (
		<div data-aos="zoom-in" className="tile-info page-tile-info" style={{
			color: textColor
		}}>
			<img src={publicPath(imgLink)} alt={name} />
			<div className="tile-info-text">
				<div className="page-tile-info-bg" style={{ backgroundColor: bgColor }}></div>
				{logoLink &&
					<div className="tile-info-text-img">
						<img src={publicPath(logoLink)} alt={`Logo ${name}`} />
					</div>
				}
				<h2 className="tile-info-text-text">{name}</h2>
				<p className="tile-info-text-desc tile-info-text-text">{description}</p>
				{seeMoreText && <Button actionComp={"PageTile"} actionName={`Entra ${name} (em ${parentPage})`} borderColor={textColor} color={textColor}>
					{EventTypeInfoButton}
				</Button>}
			</div>
		</div>
	)
}

class EventTileInfo extends React.Component {

	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	toggleGallery = () => {
		this.setState({ open: !this.state.open })
	}

	render() {
		const { n, name, description, imgLink, logoLink, bgColor, textColor, happenings, seeMoreText } = this.props;
		const dir = n % 2 ? "left" : "right"
		const openClass = this.state.open ? "open" : ""
		const EventTypeInfoButton = (
			<button
				onClick={this.toggleGallery}
				className={`tile-info-b tile-info-button ${openClass}`}>
				{seeMoreText}
				<Expand fill={textColor} />
			</button>
		)
		return (
			<div data-aos={`flip-${dir}`} className={`tile-info ${dir}`} style={{
				backgroundColor: bgColor, color: textColor
			}}>
				<div className={`tile-info-text ${openClass}`}>
					{logoLink &&
						<div className="tile-info-text-img">
							<img src={publicPath(logoLink)} alt={`Logo ${name}`} />
						</div>
					}
					<h3 className="tile-info-text-text">{name}</h3>
					<p className="tile-info-text-desc tile-info-text-text">{description}</p>
					{seeMoreText && <Button actionComp={"EventTile"} actionName={`Clica ${name}`} actionLabel={this.state.open ? "Close" : "Open"} borderColor={textColor} color={textColor}>
						{EventTypeInfoButton}
					</Button>}
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
		{
			!parentPage ?
				(
					<EventTileInfo
						n={n}
						name={data.name}
						description={data.description}
						imgLink={data.img_link}
						logoLink={data.logo_link}
						bgColor={data.bg_color}
						textColor={data.text_color}
						happenings={data.happenings}
						seeMoreText={data.see_more_text}
					/>
				) : (
					<PageTileInfo
						id={data.id}
						parentPage={parentPage}
						name={data.name}
						description={data.description}
						imgLink={data.img_link}
						logoLink={data.logo_link}
						bgColor={data.bg_color}
						textColor={data.text_color}
						seeMoreText={data.see_more_text}
					/>
				)
		}
	</div>
)

export default Tile