import React from 'react'
import { publicPath } from '../helpers'

import './lists.css'

const Icon = ({ name, link, imgLink }) => (
	<li className="lists-iconlist-icon">
		<a href={link}>
			<div className="lists-iconlist-icon-img">
				{imgLink && <img src={publicPath(imgLink)} alt={name} />}
			</div>
			<h4>{name}</h4>
		</a>
	</li>
)

const TextBox = ({ name, text, bgColor }) => (
	<li className="lists-textboxlist-box">
		<h4>{name}</h4>
		<p>A equipa das Tertúlias é responsável por organizar eventos como conversas, debates, reflexões e conferências que informam e promovem o diálogo para toda a comunidade estudantil. Estas acontecem com uma periodicidade mensal.</p>
	</li>
)

const List = ({ children }) => (
	<ul className="lists-listwrap">
		{children}
	</ul>
)

const IconList = ({ data }) => (
	<List>
		{data.map((icon, i) => (
			<Icon
				key={i}
				name={icon.name}
				link={icon.link}
				imgLink={icon.img_link}
			/>
		))}
	</List>
)

const TextBoxList = ({ data }) => (
	<List>
		{data.map((textbox, i) => (
			<TextBox
				key={i}
				name={textbox.name}
				text={textbox.text}
				bgColor={textbox.bg_color}
			/>
		))}
	</List>
)

export { IconList, TextBoxList }