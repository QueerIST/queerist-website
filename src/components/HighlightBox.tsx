import { BlockButton } from './Button'
import { gap } from '../helpers/ga4'
import { pageId } from '../helpers/links'
import { type HighlightBox as HighlightBoxProps } from '../types/domain'

import './highlightbox.css'

export const HighlightBox = ({ id, title, subTitle, bgColor, textColor, button }: HighlightBoxProps) => (
  <div
    id={id} className='highlightbox'
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    <h2>{title}</h2>
    <p>{subTitle}</p>
    {button &&
      <BlockButton
        action={gap('navigate_content', {
          type: 'highlight-box',
          link_text: button.text,
          link_page: pageId(button.link.linkPage)
        })}
        defaults={{ linkBackgroundColor: textColor, linkTextColor: bgColor }}
        link={button.link}
        className='highlightbox-button'
        button={button.button}
      >
        {button.text}
      </BlockButton>
    }
  </div>
)
