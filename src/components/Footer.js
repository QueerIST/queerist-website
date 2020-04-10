import React from 'react'
import './footer.css'
import ReactSVG from 'react-svg'

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<div className="footer-logos">
					<a href="https://facebook.com/QueerIST"><ReactSVG className="footer-logo clickable" src="assets/facebook.svg" /></a>
					<a href="https://instagram.com/Queer.IST"><ReactSVG className="footer-logo clickable" src="assets/instagram.svg" /></a>
					<a href="https://twitter.com/QueerIST"><ReactSVG className="footer-logo clickable" src="assets/twitter.svg" /></a>
					<a href="https://github.com/QueerIST"><ReactSVG className="footer-logo clickable" src="assets/github.svg" /></a>
					<a href="mailto:queerist.sa@aeist.pt"><ReactSVG className="footer-logo clickable" src="assets/email.svg" /></a>
				</div>
				<div className="footer-text">
					<address>
						Encontra-nos pessoalmente no Instituto Superior Técnico!<br />
						Av. Rovisco Pais 1,<br />
						1049-001 Lisboa
					</address>
				</div>
			</footer>
		)
	}
}

export default Footer