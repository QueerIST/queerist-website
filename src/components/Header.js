import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

class Header extends React.Component {
	constructor() {
		super()
		this.state = { openMenu: false }
		this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
		this.handleClickLink = this.handleClickLink.bind(this);
	}

	handleClickMenuButton() {
		this.setState({ openMenu: !this.state.openMenu })
	}

	handleClickLink() {
		this.setState({ openMenu: false })
	}

	render() {
		const menustatus = this.state.openMenu ? " navmenu-open" : ""
		return (
			<div className="navbar">
				<div className="navbar-content">
					<div className="navbar-delimiter">
						<div className="navtop">
							<div className="navtop-side"></div>
							<NavLink className="navimg" exact to="/" onClick={this.handleClickLink}>
								<img src="assets/logo so letras brancas.png" alt="QueerIST logo" />
							</NavLink>
							<i className="navtop-side material-icons" onClick={this.handleClickMenuButton}>menu</i>
						</div>
						<NavLink className={"navlink" + menustatus} to="/events" onClick={this.handleClickLink}>Eventos</NavLink>
						<NavLink className={"navlink" + menustatus} to="/projects" onClick={this.handleClickLink}>Projetos</NavLink>
						<NavLink className={"navlink" + menustatus} to="/merch" onClick={this.handleClickLink}>Merch</NavLink>
					</div>
				</div>
			</div>
		)
	}
}

export default Header