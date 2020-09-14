import React from 'react'
import { publicPath } from '../helpers'
import './pagecover.css'

function PageBackground({ name, description, bgColor, textColor, isSubPage, logoLink }) {
	return (
		<div className="page-background" style={{ backgroundColor: bgColor, color: textColor }}>
			{isSubPage && logoLink && <img src={publicPath(logoLink)} alt={name} />}
			<h1>{name}</h1>
			{!isSubPage && <p>{description}</p>}
		</div>
	)
}

function PageImage({ imgLink, name, description, imgBgColor, textColor, isSubPage }) {
	return (
		<div className="page-image">
			{
				isSubPage ?
					<div className="page-image-group" >
						<div className="page-image-child" >
							<img src={publicPath(imgLink)} alt={name} />
						</div>
						<div className="page-image-child"
							style={{ backgroundColor: imgBgColor, color: textColor }}>
							<p>{description}</p>
						</div>
					</div>
					:
					<div className="page-image-group" >
						<img src={publicPath(imgLink)} alt={name} />
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
					name={this.props.data.name}
					isSubPage={this.props.isSubPage}
					logoLink={this.props.data.logo_link}
					imgBgColor={this.props.data.img_bg_color}
					description={this.props.data.description}
					bgColor={this.props.data.bg_color}
					textColor={this.props.data.text_color}
				/>
				<PageImage
					name={this.props.data.name}
					isSubPage={this.props.isSubPage}
					imgBgColor={this.props.data.img_bg_color}
					description={this.props.data.description}
					imgLink={this.props.data.img_link}
					textColor={this.props.data.text_color}
				/>
			</React.Fragment>
		)
	}
}

export default PageCover