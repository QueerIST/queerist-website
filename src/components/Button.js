import React from 'react'
import classNames from 'classnames'

import './button.css'

export default class Button extends React.Component {

	render() {
		const { children, borderColor, color } = this.props
		const buildClassName = (child) => classNames(
			child.props.className,
			"block-button"
		);

		return React.Children.map(children, (child) => (
			React.cloneElement(child, {
				className: buildClassName(child),
				style: { borderColor, color }
			})
		))
	}
}