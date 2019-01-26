import React from 'react'
import './components.css'

function Header() {
	return (
		<div className="navbar">
			<div className="navbar-container">
			<a className="navimg"><img src="assets/logo so letras brancas.png"></img></a>
			<a className="navlink">Eventos</a>
			<a className="navlink">Projetos</a>
			<a className="navlink">Merch</a>
			</div>
		</div>
	)
}

export default Header