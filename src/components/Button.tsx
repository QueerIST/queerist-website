import { type PropsWithChildren, cloneElement, type ReactElement, isValidElement, Children, type HTMLAttributes } from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'

import './button.css'

type HTMLProps = HTMLAttributes<HTMLElement>

interface ButtonProps {
  color?: string
  borderColor?: string
  backgroundColor?: string
  block?: boolean
  actionComp: string
  actionName: string
  actionLabel?: string
}

export function Button (props: PropsWithChildren<ButtonProps>) {
  const { children, borderColor, color, backgroundColor, block, actionComp, actionName, actionLabel } = props

  const buildClassName = (child: ReactElement<HTMLProps>) => classNames(
    child.props.className,
    'block-button',
    { block }
  )
  const onClickAnalytics = (child: ReactElement) => {
    ReactGA.event({
      category: actionComp, // Required
      action: actionName, // Required
      label: actionLabel
    })
    child.props.onClick?.()
  }

  return isValidElement<HTMLProps>(children) &&
   Children.map(children, (child: ReactElement<HTMLProps>) => (
     cloneElement(child, {
       className: buildClassName(child),
       style: { borderColor, color, backgroundColor },
       onClick: () => { onClickAnalytics(child) }
     })
   ))
}
