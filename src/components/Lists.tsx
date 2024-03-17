import { type PropsWithChildren } from 'react'

import ReactGA from 'react-ga4'

import { publicPath } from '../helpers/links'
import { type DIcons, type DTextboxs } from '../types/data'
import { type List as ListProps, type Icon as IconProps, type TextBox as TextBoxProps } from '../types/domain'

import './lists.css'

const handleClickLink = (name: string) => {
  ReactGA.event({
    category: 'IconList', // Required
    action: `Clica ${name}` // Required
  })
}

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
    {link !== undefined
      ? <a href={link} onClick={() => { handleClickLink(name) }}>
        <IconImg name={name} logoLink={logoLink} />
      </a>
      : <IconImg name={name} logoLink={logoLink} />
      }
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

const IconList = ({ data }: { data: DIcons }) => (
  <List>
    {data.map((icon, i) => (
      <Icon
        key={i}
        name={icon.name}
        link={icon.link}
        logoLink={icon.logo_link}
      />
    ))}
  </List>
)

const TextBoxList = ({ data }: { data: DTextboxs }) => (
  <List id={data.id}>
    {data.boxes.map((textbox, i) => (
      <TextBox
        key={i}
        name={textbox.name}
        text={textbox.text}
        bgColor={textbox.bg_color}
      />
    ))}
  </List>
)

export { IconList, TextBoxList }
