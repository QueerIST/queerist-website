import React from 'react'
import './footer.css'
import ReactSVG from 'react-svg'

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<div className="footer-logos">
					<ReactSVG className="footer-logo" src="assets/facebook.svg" />
					<ReactSVG className="footer-logo" src="assets/instagram.svg" />
					<ReactSVG className="footer-logo" src="assets/twitter.svg" />
					<ReactSVG className="footer-logo" src="assets/github.svg" />
					<ReactSVG className="footer-logo" src="assets/email.svg" />
				</div>
				<div className="footer-text"></div>
			</footer>
		)
	}
}

export default Footer