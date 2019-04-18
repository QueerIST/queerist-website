import React from 'react'
import './pagecover.css'

function PageBackground({ title, description, bgColor }) {
	return (
		<div className="page-background" style={{ backgroundColor: bgColor }}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

function PageImage({ imgLink, name }) {
	return (
		<div className="page-image">
			<img src={imgLink} alt={name} />
		</div>
	)
}

class PageCover extends React.Component {
	render() {
		return (
			<React.Fragment>
				<PageBackground
					title={this.props.data.title}
					description={this.props.data.description}
					bgColor={this.props.data.bg_color}
				/>
				<PageImage
					name={this.props.data.title}
					imgLink={this.props.data.img_link}
				/>
			</React.Fragment>
		)
	}
}

export default PageCover