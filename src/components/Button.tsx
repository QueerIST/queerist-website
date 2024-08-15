import { type PropsWithChildren, cloneElement, type ReactElement, isValidElement, Children, type HTMLAttributes } from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'
import { NavLink } from 'react-router-dom'

import { publicPath } from '../helpers/links'
import { type OutlineButtonStyle, type ButtonLink, type BlockButtonStyle } from '../types/domain'
import './button.css'

type HTMLProps = HTMLAttributes<HTMLElement>

enum ButtonType {
  Block,
  Outline,
  Link
}

interface Action {
  actionComp: string
  actionName: string
  actionLabel?: string
}

interface ButtonProps {
  color?: string
  className?: string
  borderColor?: string
  backgroundColor?: string
  type: ButtonType
  actionComp: string
  actionName: string
  actionLabel?: string
}

function Link ({ data, children }: PropsWithChildren<{ data: ButtonLink }>) {
  return (
    data.linkPage !== undefined
      ? (
        <NavLink to={{ pathname: data.linkPage, hash: data.linkId !== undefined ? '#' + data.linkId : undefined }}>
          {children}
        </NavLink>
        )
      : data.linkFile !== undefined
        ? (
          <a href={publicPath(data.linkFile)}>{children}</a>
          )
        : data.linkWeb !== undefined
          ? (
            <a href={data.linkWeb} target='_blank' rel='noopener noreferrer'>{children}</a>
            )
          : data.onClick !== undefined
            ? (
              <button onClick={data.onClick}>{children}</button>
              )
            : (
              <>{children}</>
              )
  )
}

export function OutlineButton ({ children, action, className, link, button }: PropsWithChildren<{ className?: string, link: ButtonLink, button: OutlineButtonStyle, action: Action }>) {
  return (
    <Button
      actionComp={action.actionComp}
      actionName={action.actionName}
      borderColor={button.linkTextColor}
      className={className}
      color={button.linkTextColor}
      type={ButtonType.Outline}
    >
      <Link data={link}>
        {children}
      </Link>
    </Button>
  )
}

export function BlockButton ({ children, action, className, link, button, defaults }: PropsWithChildren<{ className?: string, link: ButtonLink, button: BlockButtonStyle, action: Action, defaults?: BlockButtonStyle }>) {
  return (
    <Button
      actionComp={action.actionComp}
      actionName={action.actionName}
      backgroundColor={button.linkBackgroundColor ?? defaults?.linkBackgroundColor}
      className={className}
      color={button.linkTextColor ?? defaults?.linkTextColor}
      type={ButtonType.Block}
    >
      <Link data={link}>
        {children}
      </Link>
    </Button>
  )
}

export function LinkButton ({ children, action, className, link, button }: PropsWithChildren<{ className?: string, link: ButtonLink, button?: OutlineButtonStyle, action: Action }>) {
  return (
    <Button
      actionComp={action.actionComp}
      actionName={action.actionName}
      className={className}
      color={button?.linkTextColor}
      type={ButtonType.Link}
    >
      <Link data={link}>
        {children}
      </Link>
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

function Button (props: PropsWithChildren<ButtonProps>) {
  const { children, borderColor, color, className, backgroundColor, type, actionComp, actionName, actionLabel } = props

  const buildClassName = (child: ReactElement<HTMLProps>) => classNames(
    child.props.className,
    className,
    {
      block: type === ButtonType.Block,
      'block-button': type !== ButtonType.Outline
    }
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
