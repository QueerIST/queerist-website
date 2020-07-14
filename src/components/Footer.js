import React from 'react'
import { ReactComponent as Facebook } from '../svg/facebook.svg'
import { ReactComponent as Instagram } from '../svg/instagram.svg'
import { ReactComponent as Twiter } from '../svg/twitter.svg'
import { ReactComponent as GitHub } from '../svg/github.svg'
import { ReactComponent as Email } from '../svg/email.svg'
import './footer.css'

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<div className="footer-logos">
					<a href="https://facebook.com/QueerIST"><Facebook className="footer-logo clickable" /></a>
					<a href="https://instagram.com/Queer.IST"><Instagram className="footer-logo clickable" /></a>
					<a href="https://twitter.com/QueerIST"><Twiter className="footer-logo clickable" /></a>
					<a href="https://github.com/QueerIST"><GitHub className="footer-logo clickable" /></a>
					<a href="mailto:queerist.sa@aeist.pt"><Email className="footer-logo clickable" /></a>
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