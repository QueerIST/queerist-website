import { type PropsWithChildren, type CSSProperties, type MouseEventHandler } from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'
import { NavLink } from 'react-router-dom'

import { publicPath } from '../helpers/links'
import { type OutlineButtonStyle, type ButtonLink, type BlockButtonStyle } from '../types/domain'
import './button.css'

enum ButtonType {
  Block,
  Outline,
  Link
}

interface Action {
  name: string
  type?: string
  'content_type'?: string
  'content_id'?: string
  'content_action'?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any[]
  item_list_name?: string
  item_list_id?: string
  link_page?: string
  link_text?: string
}

interface ButtonProps {
  color?: string
  className?: string
  borderColor?: string
  backgroundColor?: string
  type: ButtonType
  action?: Action
}

interface ChildrenProps {
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler
}

function Link ({ data, childProps, children }: PropsWithChildren<{ data: ButtonLink, childProps: ChildrenProps }>) {
  return (
    data.linkPage !== undefined
      ? (
        <NavLink to={{ pathname: data.linkPage, hash: data.linkId !== undefined ? '#' + data.linkId : undefined }} {...childProps}>
          {children}
        </NavLink>
        )
      : data.linkFile !== undefined
        ? (
          <a href={publicPath(data.linkFile)} {...childProps}>{children}</a>
          )
        : data.linkWeb !== undefined
          ? (
            <a href={data.linkWeb} target='_blank' rel='noopener noreferrer' {...childProps}>{children}</a>
            )
          : data.onClick !== undefined
            ? (
              <button
                className={childProps.className}
                style={childProps.style}
                onClick={(e) => {
                  childProps.onClick?.(e)
                  data.onClick?.(e)
                }}
              >{children}</button>
              )
            : (
              <>{children}</>
              )
  )
}

export function OutlineButton ({ children, action, className, link, button }: PropsWithChildren<{ className?: string, link: ButtonLink, button: OutlineButtonStyle, action: Action }>) {
  return (
    <Button
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

export function BlockButton ({ children, action, className, link, button, defaults }: PropsWithChildren<{ className?: string, link: ButtonLink, button: BlockButtonStyle, action: Action, defaults?: BlockButtonStyle }>) {
  return (
    <Button
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

export function LinkButton ({ children, action, className, link, button }: PropsWithChildren<{ className?: string, link: ButtonLink, button?: OutlineButtonStyle, action?: Action }>) {
  return (
    <Button
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

export function MaybeLinkButton ({ children, action, className, link, button }: PropsWithChildren<{ className?: string, link?: ButtonLink, button?: OutlineButtonStyle, action?: Action }>) {
  if (link === undefined || action === undefined) {
    return <>{children}</>
  }

  return (
    <LinkButton
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
  const { children, borderColor, color, className, backgroundColor, type, action, link } = props
  return (
    <Link
      data={link}
      childProps={{
        style: { borderColor, color, backgroundColor },
        className: classNames(
          className,
          {
            block: type === ButtonType.Block,
            'block-button': type !== ButtonType.Link
          }
        ),
        onClick: () => {
          action !== undefined && ReactGA.event(action.name, {
            ...action
          })
        }
      }}
    >
      {children}
    </Link>
  )
}
