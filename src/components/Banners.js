import React from 'react'
import './banners.css'

function BigBanner() {
	return (
		<div className="big-banner banner" data-aos="zoom-in">
			<img src='assets/churrasco.png' alt='churrasco' />
		</div>
	)
}

function SmallBanner({ link, name, bcolor, tcolor, text, subtext }) {
	return (
		<div className="small-banner banner" data-aos="zoom-in" style={{ backgroundColor: bcolor, color: tcolor }}>
			<h2 className="small-banner-text name">{text}</h2>
			<h3 className="small-banner-text clarification">{subtext}</h3>
			<div className="small-banner-img">
				<img src={link} alt='' />
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
				<BigBanner />
				<SmallBanners>
					<SmallBanner
						link='assets/ban1.png'
						bcolor='#6bcde7'
						tcolor='white'
						text='"Faz-te Ouvir"'
						subtext="Tertúlia" />
					<SmallBanner
						link='assets/ban2.png'
						bcolor='white'
						tcolor='black'
						text=''
						subtext="PubCrawl" />						
					<SmallBanner
						link='assets/ban3.png'
						bcolor='#232323'
						tcolor='white'
						text='Zero Preconceitos'
						subtext="Podcast" />
				</SmallBanners>
			</React.Fragment>
		)
	}
}

export default Banners