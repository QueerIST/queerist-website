import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { scrollOptions } from '../helpers'

import './textblock.css'

const TextBlockInfo = ({ id, title, text, bgColor, textColor, linkText, linkPage, linkId }) => (
	<div id={id} className="textblock" style={{ backgroundColor: bgColor, color: textColor }}>
		<div className="textblock-child">
			<h2 className="textblock-button-child textblock-button-text">{title}</h2>
			{linkText &&
				<div className="textblock-button-child">
					{/* Kinda meh*/}
					<NavLink className="textblock-button"
						color={textColor}
						to={{
							pathname: linkPage, hash: '#' + linkId
						}}
						scroll={scrollOptions}
					>
						{linkText}
					</NavLink>
				</div>}
		</div>
		<p className="textblock-child textblock-text">{text}</p>
	</div>
)

const TextBlock = ({ data }) => (
	<TextBlockInfo
		id={data.id}
		title={data.title}
		text={data.text}
		bgColor={data.bg_color}
		textColor={data.text_color}
		linkText={data.link_text}
		linkPage={data.link_page}
		linkId={data.link_id}
	/>
)

export default TextBlock