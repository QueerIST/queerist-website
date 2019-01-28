import React from 'react'
import './footer.css'
//import ReactSVG from '../react-svg.production.min.js'

class Footer extends React.Component {

	render() {
		return (
			<div className="footer">
				<div className="footer-logos">
					<img className="footer-logo" alt="facebook" src='assets/facebook.png'></img>
					<img className="footer-logo" alt="instagram" src='assets/instagram.png'></img>
					<img className="footer-logo" alt="twitter" src='assets/twitter.png'></img>
					<img className="footer-logo" alt="github" src='assets/github.png'></img>
					<img className="footer-logo" alt="email" src='assets/email.png'></img>
				</div>
				<div className="footer-text"></div>
			</div>
		)
	}
}

export default Footer