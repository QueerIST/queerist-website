import { NavLink } from 'react-router-dom'

import Button from './Button'
import { publicPath } from '../helpers/links'
import { type Hub } from '../types/domain'

import './tile.css'

function PageTile ({ data }: { data: Hub }) {
  const { id, parentPage, name, description, imgLink, logoLink, bgColor, textColor, seeMoreText } = data
  const EventTypeInfoButton = (
    <NavLink
      className='tile-info-b'
      to={{ pathname: `/${parentPage.id}/${id}` }}
    >
      {seeMoreText}
    </NavLink>
  )
  return (
    <div id={id}>
      <div
      data-aos='zoom-in' className='tile-info page-tile-info' style={{ color: textColor }}
    >
        <img src={publicPath(imgLink)} alt={name} />
        <div className='tile-info-text'>
          <div className='page-tile-info-bg' style={{ backgroundColor: bgColor }} />
          {logoLink !== undefined &&
          <div className='tile-info-text-img'>
            <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
          </div>}
          <h2 className='tile-info-text-text'>{name}</h2>
          <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
          <Button actionComp='PageTile' actionName={`Entra ${name} (em ${parentPage.name})`} borderColor={textColor} color={textColor}>
            {EventTypeInfoButton}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageTile
