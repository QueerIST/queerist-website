import { type PropsWithChildren, type CSSProperties, type MouseEventHandler } from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'

import { NavLink } from './Link'
import { type Action } from '../helpers/ga4'
import { publicPath } from '../helpers/links'
import { type OutlineButtonStyle, type ButtonLink, type BlockButtonStyle } from '../types/domain'

import './button.css'

enum ButtonType {
  Block,
  Outline,
  Link
}

interface ButtonProps {
  color?: string
  className?: string
  id?: string
  borderColor?: string
  backgroundColor?: string
  type: ButtonType
  action?: Action
}

interface ChildrenProps {
  className?: string
  id?: string
  style?: CSSProperties
  onClick?: MouseEventHandler
}

function Link ({ data, childProps, children }: PropsWithChildren<{ data: ButtonLink, childProps: ChildrenProps }>) {
  if (data.linkPage) {
    if (!childProps.onClick) {
      console.warn('GA Tracking: No custom event defined for inbound navigation!')
    }

    return <NavLink href={`${data.linkPage}${data.linkId ? `#${data.linkId}` : ''}`} {...childProps}>{children}</NavLink>
  }

  if (data.linkFile) {
    return <a href={publicPath(data.linkFile)} className={childProps.className} id={childProps.id} style={childProps.style}>{children}</a>
  }

  if (data.linkWeb) {
    if (!childProps.className && !childProps.id) {
      console.warn('GA Tracking: No id or className defined for outbound navigation!')
    }
    return <a href={data.linkWeb} target='_blank' rel='noopener noreferrer' className={childProps.className} id={childProps.id} style={childProps.style}>{children}</a>
  }

  if (data.onClick) {
    return (
      <button
        className={childProps.className}
        id={childProps.id}
        style={childProps.style}
        onClick={(e) => {
          childProps.onClick?.(e)
          data.onClick?.(e)
        }}
        >{children}</button>
    )
  }

  return <>{children}</>
}

export function OutlineButton ({ id, children, action, className, link, button }: PropsWithChildren<{ className?: string, id?: string, link: ButtonLink, button: OutlineButtonStyle, action: Action }>) {
  return (
    <Button
      id={id}
      action={action}
      borderColor={button.linkTextColor}
      className={className}
      color={button.linkTextColor}
      type={ButtonType.Outline}
      link={link}
    >
      {children}
    </Button>
  )
}

export function BlockButton ({ id, children, action, className, link, button, defaults }: PropsWithChildren<{ className?: string, id?: string, link: ButtonLink, button: BlockButtonStyle, action: Action, defaults?: BlockButtonStyle }>) {
  return (
    <Button
      id={id}
      action={action}
      backgroundColor={button.linkBackgroundColor ?? defaults?.linkBackgroundColor}
      className={className}
      color={button.linkTextColor ?? defaults?.linkTextColor}
      type={ButtonType.Block}
      link={link}
    >
      {children}
    </Button>
  )
}

export function LinkButton ({ id, children, action, className, link, button }: PropsWithChildren<{ className?: string, id?: string, link: ButtonLink, button?: OutlineButtonStyle, action?: Action }>) {
  return (
    <Button
      id={id}
      action={action}
      className={className}
      color={button?.linkTextColor}
      type={ButtonType.Link}
      link={link}
    >
      {children}
    </Button>
  )
}

export function MaybeLinkButton ({ id, children, action, className, link, button }: PropsWithChildren<{ className?: string, id?: string, link?: ButtonLink, button?: OutlineButtonStyle, action?: Action }>) {
  if (!link || !action) {
    return <>{children}</>
  }

  return (
    <LinkButton
      id={id}
      action={action}
      className={className}
      link={link}
      button={button}
    >
      {children}
    </LinkButton>
  )
}

function Button (props: PropsWithChildren<ButtonProps & { link: ButtonLink }>) {
  const { children, borderColor, color, className, id, backgroundColor, type, action, link } = props
  return (
    <Link
      data={link}
      childProps={{
        id,
        style: { borderColor, color, backgroundColor },
        className: classNames(
          className,
          {
            block: type === ButtonType.Block,
            'block-button': type !== ButtonType.Link
          }
        ),
        onClick: () => {
          action && ReactGA.event(action.name, action.params)
        }
      }}
    >
      {children}
    </Link>
  )
}
