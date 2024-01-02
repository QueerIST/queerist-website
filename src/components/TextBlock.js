import React from 'react'

import { NavLink } from 'react-router-dom'

import { Button } from '.'
import { publicPath } from '../helpers'

import './textblock.css'

function TextBlockInfo ({ id, title, text, small, bgColor, titleColor, textColor, linkBackgroundColor, linkTextColor, linkText, linkPage, linkId, linkFile, linkWeb }) {
  const TextBlockButton = (
    linkPage
      ? (
        <NavLink
          className='textblock-button'
          to={{ pathname: linkPage, hash: '#' + linkId }}
        >
          {linkText}
        </NavLink>
        )
      : linkFile
        ? (
          <a href={publicPath(linkFile)} className='textblock-button'>{linkText}</a>
          )
        : (
          <a href={linkWeb} className='textblock-button'>{linkText}</a>
          )
  )
  return (
    <div id={id} className={`textblock ${small && 'textblock-small'}`} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='textblock-child'>
        <h2 className='textblock-title' style={{ color: titleColor }}>{title}</h2>
        {linkText &&
          <Button
            actionComp='TextBlock'
            actionName={`Clica ${linkText}`}
            block
            color={linkTextColor || bgColor}
            backgroundColor={linkBackgroundColor || textColor}
          >
            {TextBlockButton}
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
const TextBlock = ({ data, small }) => (
  <TextBlockInfo
    id={data.id}
    title={data.title}
    text={data.text}
    small={small}
    bgColor={data.bg_color}
    titleColor={data.title_color}
    textColor={data.text_color}
    linkBackgroundColor={data.link_bg_color}
    linkTextColor={data.link_text_color}
    linkText={data.link_text}
    linkPage={data.link_page}
    linkId={data.link_id}
    linkFile={data.link_file}
    linkWeb={data.link_web}
  />
)

export default TextBlock
