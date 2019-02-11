import React from 'react'
import './pagecover.css'

class PageCover extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="page-background">
					<h1>Eventos</h1>
					<p>Onde te podes divertir e conviver e aprender e informar e educar e tudo e mais.</p>
				</div>
				<div className="page-image">
					<img src="assets/tertulia.jpg" />
				</div>
			</React.Fragment>
		)
	}
}

export default PageCover