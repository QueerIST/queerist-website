import React from 'react'
import './maincover.css'

class MainCover extends React.Component {
	render() {
		return (
			<div className="background" style={{backgroundImage: 'url(assets/fundo.png)'}}>
				<img src="assets/Cores fundo claro.png" alt="QueerIST logo"/>
			</div>
		)
	}
}

export default MainCover