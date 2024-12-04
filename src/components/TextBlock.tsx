import classNames from 'classnames'

import { BlockButton } from './Button'
import { TextRenderer } from './TextRenderer'
import { gap } from '../helpers/ga4'
import { pageId } from '../helpers/links'
import { type TextBlock as TextBlockProps } from '../types/domain'

import './textblock.css'

export function TextBlock (props: TextBlockProps) {
  const { id, title, text, small, bgColor, titleColor, textColor, button } = props
  return (
    <div id={id} className={classNames('textblock', small && 'textblock-small')} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='textblock-child'>
        <h2 className='textblock-title' style={{ color: titleColor }}>{title}</h2>
        {button &&
          <BlockButton
            action={gap('navigate_content', {
              type: 'text-block',
              link_text: button.text,
              link_page: pageId(button.link.linkPage)
            })}
            defaults={{ linkBackgroundColor: textColor, linkTextColor: bgColor }}
            link={button.link}
            className='textblock-button'
            button={button.button}>
              {button.text}
          </BlockButton>
          }
      </div>
      <div className='textblock-child textblock-text'>
        <TextRenderer data={text} />
      </div>
    </div>
  )
}
