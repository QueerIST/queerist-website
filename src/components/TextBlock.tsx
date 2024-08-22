import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import classNames from 'classnames'

import { BlockButton } from './Button'
import { type TextBlock as TextBlockProps } from '../types/domain'

import './textblock.css'

export function TextBlock (props: TextBlockProps) {
  const { id, title, text, small, bgColor, titleColor, textColor, button } = props
  return (
    <div id={id} className={classNames('textblock', small && 'textblock-small')} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='textblock-child'>
        <h2 className='textblock-title' style={{ color: titleColor }}>{title}</h2>
        {button !== undefined &&
          <BlockButton
            action={{
              name: 'navigate_content',
              type: 'text-block',
              link_text: button.text,
              link_page: button.link.linkPage
            }}
            defaults={{ linkBackgroundColor: textColor, linkTextColor: bgColor }}
            link={button.link}
            className='textblock-button'
            button={button.button}>
              {button.text}
          </BlockButton>
          }
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
