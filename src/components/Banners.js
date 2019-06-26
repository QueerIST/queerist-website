import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { scrollOptions } from '../helpers'
import './banners.css'

function BigBanner({ name, imgLink }) {
	return (
		<div className="big-banner banner" /*data-aos="zoom-in"*/>
			<img src={imgLink} alt={name} />
		</div >
	)
}

function SmallBanner({ name, imgLink, bgColor, textColor, linkText, linkPage, linkId }) {
	return (
		<div className="small-banner banner" data-aos="zoom-in" style={{ backgroundColor: bgColor, color: textColor }}>
			<div className="small-banner-content">
				<div className="small-banner-text">{name}</div>
				<div className="small-banner-img">
					<img src={imgLink} alt={name} />
				</div>
				<NavLink className="small-banner-button"
					style={{
						borderColor: textColor, color: textColor
					}}
					to={{
						pathname: linkPage, hash: '#' + linkId
					}}
					scroll={scrollOptions}
				>{linkText}</NavLink>
			</div>
		</div>
	)
}

function SmallBanners({ children }) {
	return (
		<div className="small-banners">
			{children}
		</div>
	)
}

class Banners extends React.Component {

	render() {
		return (
			<React.Fragment>
				<BigBanner
					name={this.props.data.big_banner_name}
					imgLink={this.props.data.big_banner_img_link}
				/>
				<SmallBanners>
					{this.props.data.small_banners.map(
						(smallBanner, i) => (
							<SmallBanner
								key={i}
								name={smallBanner.name}
								imgLink={smallBanner.img_link}
								bgColor={smallBanner.bg_color}
								textColor={smallBanner.text_color}
								linkText={smallBanner.link_text}
								linkPage={smallBanner.link_page}
								linkId={smallBanner.link_id}
							/>
						)
					)}
				</SmallBanners>
			</React.Fragment>
		)
	}
}

export default Banners