import { type PropsWithChildren } from 'react'

import { MaybeLinkButton } from './Button'
import { publicPath } from '../helpers/links'
import { type List as ListProps, type Icon as IconProps, type TextBox as TextBoxProps, type TextBoxList as TextBoxListProps, type Icons } from '../types/domain'

import './lists.css'

const IconImg = ({ name, logoLink }: IconProps) => (
  <>
    {logoLink !== undefined &&
    <div className='lists-iconlist-icon-img'>
      <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
    </div>
    }
    <h4>{name}</h4>
  </>
)

const Icon = ({ name, link, logoLink }: IconProps) => (
  <li className='lists-iconlist-icon'>
    <MaybeLinkButton
      link={link !== undefined ? { linkWeb: link } : undefined}
    >
      <IconImg name={name} logoLink={logoLink} />
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
