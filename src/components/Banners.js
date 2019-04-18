import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import './banners.css'

function BigBanner() {
	return (
		<div className="big-banner banner" data-aos="zoom-in">
			<img src='assets/churrasco.png' alt='churrasco' />
		</div>
	)
}

function SmallBanner({ link, id, imgLink, bcolor, tcolor, text, subtext }) {
	return (
		<div className="small-banner banner" data-aos="zoom-in" style={{ backgroundColor: bcolor, color: tcolor }}>
			<div className="small-banner-content">
				<div className="small-banner-text">{text}</div>
				<div className="small-banner-img">
					<img src={imgLink} alt={text} />
				</div>
				<NavLink className="small-banner-button"
					style={{
						borderColor: tcolor, color: tcolor
					}}
					to={{
						pathname: link, hash: '#' + id
					}}>Ver Tertúlias</NavLink>
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
						imgLink='assets/ban1.png'
						bcolor='#6bcde7'
						tcolor='white'
						text='Tertúlia "Faz-te Ouvir"'
						link="/events"
						id="tertulia"
					/>
					<SmallBanner
						imgLink='assets/ban2.png'
						bcolor='white'
						tcolor='black'
						text='PubCrawl'
					/>
					<SmallBanner
						imgLink='assets/ban3.png'
						bcolor='#232323'
						tcolor='white'
						text='Zero Preconceitos'
					/>
				</SmallBanners>
			</React.Fragment>
		)
	}
}

export default Banners