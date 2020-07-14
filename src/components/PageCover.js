import React from 'react'
import './pagecover.css'

function PageBackground({ title, description, bgColor, imgBgColor }) {
	return (
		<div className="page-background" style={{ backgroundColor: bgColor }}>
			<h1>{title}</h1>
			{!imgBgColor && <p>{description}</p>}
		</div>
	)
}

function PageImage({ imgLink, name, description, imgBgColor }) {
	return (
		<div className="page-image">
			{
				imgBgColor ?
					<div className="page-image-group" >
						<div className="page-image-child" >
							<img src={imgLink} alt={name} />
						</div>
						<p className="page-image-child" style={{ backgroundColor: imgBgColor }}>{description}</p>
					</div>
					:
					<div className="page-image-group" >
						<img src={imgLink} alt={name} />
					</div>
			}
		</div>
	)
}

class PageCover extends React.Component {
	render() {
		return (
			<React.Fragment>
				<PageBackground
					title={this.props.data.title}
					imgBgColor={this.props.data.img_bg_color}
					description={this.props.data.description}
					bgColor={this.props.data.bg_color}
				/>
				<PageImage
					name={this.props.data.title}
					imgBgColor={this.props.data.img_bg_color}
					description={this.props.data.description}
					imgLink={this.props.data.img_link}
				/>
			</React.Fragment>
		)
	}
}

export default PageCover