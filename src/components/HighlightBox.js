import React from 'react'
import { Button } from '.'
import { publicPath } from '../helpers'

import './highlightbox.css'

const HighlightBoxInfo = ({ title, subTitle, bgColor, textColor, linkTextColor, linkBgColor, linkText, linkFile, linkWeb }) => (
	<div className="highlightbox"
		style={{ backgroundColor: bgColor, color: textColor }}
	>
		<h2>{title}</h2>
		<p>{subTitle}</p>
		<Button
			actionComp={"HighlightBox"}
			actionName={`Clica ${linkText}`}
			backgroundColor={linkBgColor}
			color={linkTextColor}
			block
		>
			{
				linkFile ?
					<a href={publicPath(linkFile)} className="highlightbox-button">{linkText}</a>
					:
					<a href={linkWeb} className="highlightbox-button">{linkText}</a>
			}

		</Button>
	</div>
)

const HighlightBox = ({ data }) => (
	<HighlightBoxInfo
		title={data.title}
		subTitle={data.sub_title}
		bgColor={data.bg_color}
		textColor={data.text_color}
		linkTextColor={data.link_text_color}
		linkBgColor={data.link_bg_color}
		linkText={data.link_text}
		linkFile={data.link_file}
		linkWeb={data.link_web}
	/>
)

export default HighlightBox