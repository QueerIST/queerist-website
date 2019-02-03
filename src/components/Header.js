import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

class Header extends React.Component {
	constructor() {
		super()
		this.state = { openMenu: false }
		this.handleClickButton = this.handleClickButton.bind(this);
	}

	handleClickButton() {
		this.setState({ openMenu: !this.state.openMenu })
	}

	render() {
		const menustatus = this.state.openMenu ? " navmenu-open" : ""
		return (
			<div className="navbar">
				<div className="navbar-content">
					<div className="navbar-delimiter">
						<div className="navtop">
							<div className="navtop-side"></div>
							<NavLink className="navimg" exact to="/">
								<img src="assets/logo so letras brancas.png" alt="QueerIST logo" />
							</NavLink>
							<i className="navtop-side material-icons" onClick={this.handleClickButton}>menu</i>
						</div>
						<NavLink className={"navlink" + menustatus} to="/events">Eventos</NavLink>
						<NavLink className={"navlink" + menustatus} to="/projects">Projetos</NavLink>
						<NavLink className={"navlink" + menustatus} to="/merch">Merch</NavLink>
					</div>
				</div>
			</div>
		)
	}
}

export default Header