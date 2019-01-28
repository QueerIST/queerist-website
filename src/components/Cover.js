import React from 'react'
import './cover.css'

class Cover extends React.Component {
	render() {
		return (
			<div className="background" style={{backgroundImage: 'url(assets/fundo.png)'}}>
				<img src="assets/Cores fundo claro.png" alt="QueerIST logo"></img>
			</div>
		)
	}
}

export default Cover