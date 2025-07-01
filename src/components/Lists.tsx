import { type PropsWithChildren } from 'react'

import { MaybeLinkButton } from './Button'
import { Image } from './Image'
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

const ImageBox = ({ name, text, bgColor, image }: ImageBoxProps) => (
  <li className='lists-textboxlist-box'>
    <img
      src={image}
      alt={name}
    />
    <h3>{name}</h3>
    <p
      className='lists-textboxlist-box-text lists-imgboxlist-box-text'
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
    >
      {text}
    </p>
  </li>
)

const List = ({ id, children }: PropsWithChildren<ListProps>) => (
  <ul id={id} className='lists-listwrap'>
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
  <List id={id}>
    {boxes.map((imagebox, i) => (
      <ImageBox
      key={i}
      {...imagebox}
      />
    ))}
  </List>
)
