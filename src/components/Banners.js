import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Button } from '.'
import { scrollOptions, publicPath } from '../helpers'

import './banners.css'

function BigBannerInfo({ name, imgLink }) {
	return (
		<div className="big-banner banner" /*data-aos="zoom-in"*/>
			<img src={publicPath(imgLink)} alt={name} />
		</div >
	)
}

function SmallBanner({ name, imgLink, bgColor, textColor, linkText, linkPage, linkId }) {
	return (
		<div className="small-banner banner" data-aos="zoom-in" style={{ backgroundColor: bgColor, color: textColor }}>
			<div className="small-banner-content">
				<h2 className="small-banner-text">{name}</h2>
				<div className="small-banner-img">
					<img src={publicPath(imgLink)} alt={name} />
				</div>
				<Button
					borderColor={textColor}
					color={textColor}
				>
					<NavLink
						to={{
							pathname: linkPage, hash: '#' + linkId
						}}
						scroll={scrollOptions}
					>
						{linkText}
					</NavLink>
				</Button>
			</div>
		</div>
	)
}

function SmallBannersWrap({ children }) {
	return (
		<div className="small-banners">
			{children}
		</div>
	)
}

const BigBanner = ({ data }) => (
	<BigBannerInfo
		name={data.big_banner_name}
		imgLink={data.big_banner_img_link}
	/>
)

const SmallBanners = ({ data }) => (
	<SmallBannersWrap>
		{
			data.map(
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
			)
		}
	</SmallBannersWrap>
)

export { BigBanner, SmallBanners }