import React from 'react'
import fundo from '../img/fundo.png';
import logo from '../img/Cores fundo claro.png';
import './maincover.css'

class MainCover extends React.Component {
	render() {
		return (
			<div className="background" style={{ backgroundImage: `url(${fundo})` }}>
				<img src={logo} alt="QueerIST logo" />
			</div>
		)
	}
}

export default MainCover