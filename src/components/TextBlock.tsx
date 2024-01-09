import { NavLink } from 'react-router-dom'

import { Button } from '.'
import { publicPath } from '../helpers'
import { isDataTextBlockWithLink, isDataTextBlockWithLinkToFile, isDataTextBlockWithLinkToPage, isTextBlockWithLink, isTextBlockWithLinkToFile, isTextBlockWithLinkToPage } from '../helpers/types'
import { type DTextBlock } from '../types/data'
import { type TextBlockWithLink, type TextBlock as TextBlockProps } from '../types/domain'

import './textblock.css'

const TextBlockButton = (props: TextBlockWithLink) => (
  isTextBlockWithLinkToPage(props)
    ? (
        <NavLink
          className='textblock-button'
          to={{ pathname: props.linkPage, hash: '#' + props.linkId }}
        >
          {props.linkText}
        </NavLink>
      )
    : isTextBlockWithLinkToFile(props)
      ? (
          <a href={publicPath(props.linkFile)} className='textblock-button'>{props.linkText}</a>
        )
      : (
          <a href={props.linkWeb} className='textblock-button'>{props.linkText}</a>
        )
)

function TextBlockInfo (props: TextBlockProps) {
  const { id, title, text, small, bgColor, titleColor, textColor } = props
  return (
    <div id={id} className={`textblock ${small && 'textblock-small'}`} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='textblock-child'>
        <h2 className='textblock-title' style={{ color: titleColor }}>{title}</h2>
        {isTextBlockWithLink(props) &&
          <Button
            actionComp='TextBlock'
            actionName={`Clica ${props.linkText}`}
            block
            color={props.linkTextColor ?? bgColor}
            backgroundColor={props.linkBackgroundColor ?? textColor}
          >
            {TextBlockButton(props)}
          </Button>}
      </div>
      <div className='textblock-child'>
        {(Array.isArray(text) ? text : [text]).map((t, i) => (
          <p key={i} className='textblock-text'>
            {t}
          </p>
        ))}
      </div>
    </div>
  )
}

const TextBlock = ({ data, small = false }: { data: DTextBlock, small?: boolean }) => (
  <TextBlockInfo
    id={data.id}
    title={data.title}
    text={data.text}
    small={small}
    bgColor={data.bg_color}
    titleColor={data.title_color}
    textColor={data.text_color}
    {...(isDataTextBlockWithLink(data) && {
      linkText: data.link_text,
      linkBackgroundColor: data.link_bg_color,
      linkTextColor: data.link_text_color,
      ...(isDataTextBlockWithLinkToPage(data)
        ? {
            linkPage: data.link_page,
            linkId: data.link_id
          }
        : isDataTextBlockWithLinkToFile(data)
          ? { linkFile: data.link_file }
          : { linkWeb: data.link_web })
    })}
  />
)

export default TextBlock
