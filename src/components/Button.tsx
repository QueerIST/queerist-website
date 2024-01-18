import React from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'

import './button.css'

export default class Button extends React.Component {
  render () {
    const { children, borderColor, color, backgroundColor, block, actionComp, actionName, actionLabel } = this.props
    const buildClassName = (child) => classNames(
      child.props.className,
      'block-button',
      { block }
    )
    const onClickAnalytics = (child) => {
      ReactGA.event({
        category: actionComp, // Required
        action: actionName, // Required
        label: actionLabel
      })
      child.props.onClick?.()
    }

    return React.Children.map(children, (child) => (
      React.cloneElement(child, {
        className: buildClassName(child),
        style: { borderColor, color, backgroundColor },
        onClick: () => { onClickAnalytics(child) }
      })
    ))
  }
}
