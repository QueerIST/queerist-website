import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Button } from '.'
import { scrollOptions, publicPath } from '../helpers'

import './banners.css'

function BigBannerInfo({ name, imgLink, textColor, linkText, linkPage, linkId }) {
	return (
		<div className="big-banner banner" /*data-aos="zoom-in"*/>
			<img src={publicPath(imgLink)} alt={name} />
			{linkText &&
				<div className="big-banner-button">
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
				</div>}
		</div >
	)
}

function SmallBanner({ name, label, imgLink, bgColor, textColor, linkText, linkPage, linkId }) {
	return (
		<div className="small-banner banner" data-aos="zoom-in" style={{ backgroundColor: bgColor, color: textColor }}>
			<div className="small-banner-content">
				<h2 className="small-banner-text">{name}</h2>
				<p className="small-banner-text">{label}</p>
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
		textColor={data.text_color}
		linkText={data.link_text}
		linkPage={data.link_page}
		linkId={data.link_id}
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
						label={smallBanner.label}
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