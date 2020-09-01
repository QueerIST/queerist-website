import React from 'react'
import { Button } from '.'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { scrollOptions } from '../helpers'

import './textblock.css'

const TextBlockInfo = ({ id, title, text, small, bgColor, titleColor, textColor, linkBackgroundColor, linkText, linkPage, linkId }) => (
	<div id={id} className={`textblock ${small && 'textblock-small'}`} style={{ backgroundColor: bgColor, color: textColor }}>
		<div className="textblock-child">
			<h2 className="textblock-button-child textblock-button-text" style={{ color: titleColor }}>{title}</h2>
			{linkText &&
				<div className="textblock-button-child">
					<Button
						block
						color={bgColor}
						backgroundColor={linkBackgroundColor}
					>
						<NavLink
							className="textblock-button"
							to={{
								pathname: linkPage, hash: '#' + linkId
							}}
							scroll={scrollOptions}
						>
							{linkText}
						</NavLink>
					</Button>
				</div>}
		</div>
		<div className="textblock-child">
			{(Array.isArray(text) ? text : [text]).map(t => (
				<p className="textblock-text">
					{t}
				</p>
			))}</div>
	</div>
)

const TextBlock = ({ data, small }) => (
	<TextBlockInfo
		id={data.id}
		title={data.title}
		text={data.text}
		small={small}
		bgColor={data.bg_color}
		titleColor={data.title_color}
		textColor={data.text_color}
		linkBackgroundColor={data.link_bg_color}
		linkText={data.link_text}
		linkPage={data.link_page}
		linkId={data.link_id}
	/>
)

export default TextBlock