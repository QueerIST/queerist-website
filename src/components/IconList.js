import React from 'react'
import { publicPath } from '../helpers'

import './iconlist.css'

const Icon = ({ name, link, imgLink }) => (
	<li className="iconlist-icon">
		<a href={link}>
			<div className="iconlist-icon-img">
				<img src={publicPath(imgLink)} alt={name} />
			</div>
			<h4>{name}</h4>
		</a>
	</li>
)

const IconList = ({ data }) => (
	<ul className="iconlist">
		{data.map((icon, i) => (
			<Icon
				key={i}
				name={icon.name}
				link={icon.link}
				imgLink={icon.img_link}
			/>
		))}
	</ul>
)

export default IconList