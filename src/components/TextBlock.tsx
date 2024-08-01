import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import { Button } from './Button'
import { publicPath } from '../helpers/links'
import { type TextBlock as TextBlockProps, type BlockButtonLink as TextBlockButtonProps } from '../types/domain'

import './textblock.css'

const TextBlockButton = (props: TextBlockButtonProps) => (
  props.linkPage !== undefined
    ? (
      <NavLink
          className='textblock-button'
          to={{ pathname: props.linkPage, hash: props.linkId !== undefined ? '#' + props.linkId : undefined }}
        >
        {props.linkText}
      </NavLink>
      )
    : props.linkFile !== undefined
      ? (
        <a href={publicPath(props.linkFile)} className='textblock-button'>{props.linkText}</a>
        )
      : (
        <a href={props.linkWeb} className='textblock-button'>{props.linkText}</a>
        )
)

export function TextBlock (props: TextBlockProps) {
  const { id, title, text, small, bgColor, titleColor, textColor, button } = props
  return (
    <div id={id} className={classNames('textblock', small && 'textblock-small')} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='textblock-child'>
        <h2 className='textblock-title' style={{ color: titleColor }}>{title}</h2>
        {button !== undefined &&
          <Button
            actionComp='TextBlock'
            actionName={`Clica ${button.linkText}`}
            block
            color={button.linkTextColor ?? bgColor}
            backgroundColor={button.linkBackgroundColor ?? textColor}
          >
            {TextBlockButton(button)}
          </Button>}
      </div>
      <div className='textblock-child'>
        <BlocksRenderer content={text}
        blocks={{
          paragraph: ({ children }) => <p className='textblock-text'>{children}</p>
        }} />
      </div>
    </div>
  )
}
