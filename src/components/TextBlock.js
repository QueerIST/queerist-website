import React from 'react'
import { Button } from '.'

import './textblock.css'

const TextBlockInfo = ({ id, title, text, bgColor, textColor, linkText, linkPage, linkId }) => (
	<div className="textblock">
		<div className="textblock-child">
			<h2 className="textblock-button-child textblock-button-text">{title}</h2>
			<div className="textblock-button-child">
				<button className="textblock-button" type="button">{linkText}</button>
			</div>
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