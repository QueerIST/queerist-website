import { type PropsWithChildren } from 'react'

import classNames from 'classnames'

import { BlockButton, MaybeLinkButton } from './Button'
import { Image } from './Image'
import { pageId } from '../helpers/links'
import { type List as ListProps, type Icon as IconProps, type TextBox as TextBoxProps, type TextBoxList as TextBoxListProps, type ImageBox as ImageBoxProps, type ImageBoxList as ImageBoxListProps, type Icons } from '../types/domain'

import './lists.css'

const IconImg = ({ name, label, logo }: IconProps) => (
  <>
    <div className='lists-iconlist-icon-img'>
      {logo && <Image src={logo} alt={`Logo de ${name}`} />}
    </div>
    <div>
      <h4>{name}</h4>
      {label && <p>{label}</p>}
    </div>
  </>
)

const Icon = ({ name, label, link, logo }: IconProps) => (
  <li className='lists-iconlist-icon'>
    <MaybeLinkButton
      link={link ? { linkWeb: link } : undefined}
      className='icon-list-link'
    >
      <IconImg name={name} label={label} logo={logo} />
    </MaybeLinkButton>
  </li>
)

const TextBox = ({ name, text, bgColor }: TextBoxProps) => (
  <li className='lists-textboxlist-box'>
    <h3>{name}</h3>
    <p
      className='lists-textboxlist-box-text'
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
    >
      {text}
    </p>
  </li>
)

const ImageBox = ({ name, subtitle, text, image, link, className }: ImageBoxProps & { className?: string }) => (
  <li className='lists-imgboxlist-box'>
    <img
      src={image}
      alt={name}
    />
    <h4>{name}</h4>
    <label>{subtitle}</label>
    <p className='lists-imgboxlist-box-text lists-imgboxlist-box-text'>
      {text}
    </p>
    <BlockButton
      id={pageId(link)}
      className={className}
      link={{ linkWeb: link }}
      button={{ linkBackgroundColor: 'black', linkTextColor: 'white' }}
    >
      {'Ler mais'}
    </BlockButton>
  </li>
)

const List = ({ id, children, className }: PropsWithChildren<ListProps & { className?: string }>) => (
  <ul id={id} className={classNames('lists-listwrap', className)}>
    {children}
  </ul>
)

export const IconList = ({ icons, id }: Icons) => (
  <List id={id}>
    {icons.map((icon, i) => (
      <Icon
        key={i}
        {...icon}
      />
    ))}
  </List>
)

export const TextBoxList = ({ id, boxes }: TextBoxListProps) => (
  <List id={id}>
    {boxes.map((textbox, i) => (
      <TextBox
      key={i}
      {...textbox}
      />
    ))}
  </List>
)

export const ImageBoxList = ({ id, boxes }: ImageBoxListProps) => (
  <List id={id} className='lists-imgboxlist'>
    {boxes.map((imagebox, i) => (
      <ImageBox
      key={i}
      className={id}
      {...imagebox}
      />
    ))}
  </List>
)
