import Button from './Button'
import { publicPath } from '../helpers/links'
import { type HighlightBox as HighlightBoxProps } from '../types/domain'

import './highlightbox.css'

const HighlightBox = ({ id, title, subTitle, bgColor, textColor, button }: HighlightBoxProps) => (
  <div
    id={id} className='highlightbox'
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    <h2>{title}</h2>
    <p>{subTitle}</p>
    {button !== undefined &&
    <Button
      actionComp='HighlightBox'
      actionName={`Clica ${button.linkText}`}
      backgroundColor={button.linkBackgroundColor ?? textColor}
      color={button.linkTextColor ?? bgColor}
      block
    >
      {button.linkFile !== undefined
        ? <a href={publicPath(button.linkFile)} className='highlightbox-button'>{button.linkText}</a>
        : <a href={button.linkWeb} className='highlightbox-button'>{button.linkText}</a>
      }
    </Button>
    }
  </div>
)

export default HighlightBox
