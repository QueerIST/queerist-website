import React from 'react'
import './pagecover.css'

function PageBackground() {
	return (
		<div className="page-background">
			<h1>Eventos</h1>
			<p>Onde te podes divertir e conviver e aprender e informar e educar e tudo e mais. Vem fazer coisas connosco!</p>
		</div>
	)
}

function PageImage() {
	return (
		<div className="page-image">
			<img src="assets/tertulia.jpg" />
		</div>
	)
}

class PageCover extends React.Component {
	render() {
		return (
			<React.Fragment>
				<PageBackground />
				<PageImage />
			</React.Fragment>
		)
	}
}

export default PageCover