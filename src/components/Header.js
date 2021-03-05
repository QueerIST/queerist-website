import React from 'react'
import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import ReactGA from 'react-ga'
import logo from '../img/logo so letras brancas.png'
import { ReactComponent as Menu } from '../svg/menu.svg'
import './header.css'

class Header extends React.Component {
	constructor() {
		super()
		this.state = { openMenu: false }
		this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
		this.handleClickLink = this.handleClickLink.bind(this);
	}

	handleClickMenuButton() {
		ReactGA.event({
			category: "NavMenuToogle",  // Required
			action: `Menu ${this.state.openMenu ? 'fecha' : 'abre'}`  // Required
		})
		this.setState({ openMenu: !this.state.openMenu })
	}

	handleClickLink(page) {
		ReactGA.event({
			category: "NavMenuLink",  // Required
			action: `Navega ${page}`  // Required
		})
		this.setState({ openMenu: false })
	}

	render() {
		const menustatus = this.state.openMenu ? " navmenu-open" : ""
		return (
			<Headroom>
				<div className="navbar">
					<div className="navbar-content">
						<div className="navbar-delimiter">
							<div className="navtop">
								<div className="navtop-side"></div>
								<NavLink className="navimg" exact to="/" onClick={() => this.handleClickLink('logo')}>
									<img src={logo} alt="QueerIST logo" />
								</NavLink>
								<Menu className="navtop-side" onClick={this.handleClickMenuButton} />
							</div>
							<NavLink className={"navlink" + menustatus} to="/sobre" onClick={() => this.handleClickLink('sobre')}>Sobre</NavLink>
							<NavLink className={"navlink" + menustatus} to="/eventos" onClick={() => this.handleClickLink('eventos')}>Eventos</NavLink>
							<NavLink className={"navlink" + menustatus} to="/projetos/" onClick={() => this.handleClickLink('projetos')}>Projetos</NavLink>
							<a className={"navlink" + menustatus} href="https://queerist.tecnico.ulisboa.pt/blog/" onClick={() => this.handleClickLink('blog')}>Blog</a>
							<a className={"navlink" + menustatus} href="http://eepurl.com/dnApYP" onClick={() => this.handleClickLink('newsletter')}>Newsletter</a>
						</div>
					</div>
				</div>
			</Headroom>
		)
	}
}

export default Header