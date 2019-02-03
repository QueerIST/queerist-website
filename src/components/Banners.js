import React from 'react'
import './banners.css'

function BigBanner() {
	return (
		<div className="big-banner banner">
			<img src='assets/churrasco.png' alt='churrasco' />
		</div>
	)
}

function SmallBanner({ link, name, bcolor, tcolor }) {
	return (
		<div className="small-banner banner" data-aos="zoom-in" style={{ backgroundColor: bcolor, color: tcolor }}>
			<h1 className="small-banner-text name">"Faz-te Ouvir"</h1>
			<h2 className="small-banner-text clarification">Tertúlia</h2>
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
					<SmallBanner link='assets/ban1.png' bcolor='#6bcde7' tcolor='white' />
					<SmallBanner link='assets/ban2.png' bcolor='white' tcolor='black' />
					<SmallBanner link='assets/ban3.png' bcolor='#232323' tcolor='white' />
				</SmallBanners>
			</React.Fragment>
		)
	}
}

export default Banners