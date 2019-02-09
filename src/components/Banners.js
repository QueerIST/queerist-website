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
			<div className="small-banner-content">
				<div className="small-banner-text">{text}</div>
				<div className="small-banner-img">
					<img src={link} alt={text} />
				</div>
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
						text='Tertúlia "Faz-te Ouvir"' />
					<SmallBanner
						link='assets/ban2.png'
						bcolor='white'
						tcolor='black'
						text='PubCrawl' />
					<SmallBanner
						link='assets/ban3.png'
						bcolor='#232323'
						tcolor='white'
						text='Zero Preconceitos' />
				</SmallBanners>
			</React.Fragment>
		)
	}
}

export default Banners