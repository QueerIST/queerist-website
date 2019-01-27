import React from 'react'
import './components.css'

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
		const classplusname = this.state.openMenu ? " navmenuopen" : ""
		return (
			<div className="navbar">
				<div className="navbar-container">
					<div className="navtop">
						<i className="navtopside material-icons" onClick={this.handleClickButton}>menu</i>
						<a className="navimg">
							<img src="assets/logo so letras brancas.png"></img>
						</a>
						<div className="navtopside"></div>
					</div>
					<a className={"navlink" + classplusname}>Eventos</a>
					<a className={"navlink" + classplusname}>Projetos</a>
					<a className={"navlink" + classplusname}>Merch</a>
				</div>
			</div>
		)
	}
}

export default Header