import ReactGA from 'react-ga4'

import { publicPath } from '../helpers'

import './lists.css'

const handleClickLink = (name) => {
  ReactGA.event({
    category: 'IconList', // Required
    action: `Clica ${name}` // Required
  })
}

const Icon = ({ name, link, logoLink }) => (
  <li className='lists-iconlist-icon'>
    <a href={link} onClick={() => handleClickLink(name)}>
      <div className='lists-iconlist-icon-img'>
        {logoLink && <img src={publicPath(logoLink)} alt={`Logo ${name}`} />}
      </div>
      <h4>{name}</h4>
    </a>
  </li>
)

const TextBox = ({ name, text, bgColor }) => (
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

const List = ({ id, children }) => (
  <ul id={id} className='lists-listwrap'>
    {children}
  </ul>
)

const IconList = ({ data }) => (
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

const TextBoxList = ({ data }) => (
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
