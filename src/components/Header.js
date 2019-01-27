import React from 'react'
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
							<i className="navtop-side material-icons" onClick={this.handleClickButton}>menu</i>
							<a className="navimg">
								<img src="assets/logo so letras brancas.png" alt="QueerIST logo"></img>
							</a>
							<div className="navtop-side"></div>
						</div>
						<a className={"navlink" + menustatus}>Eventos</a>
						<a className={"navlink" + menustatus}>Projetos</a>
						<a className={"navlink" + menustatus}>Merch</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Header