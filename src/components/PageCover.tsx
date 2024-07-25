import { NavLink } from 'react-router-dom'

import { publicPath } from '../helpers/links'
import { isHub } from '../helpers/types'
import { type Event, type PageMeta, type Hub, type Happening } from '../types/domain'

import './pagecover.css'

export const PageCover = ({ data }: { data: PageMeta }) => {
  const { name, imgLink, description, bgColor, textColor } = data
  return (
    <div className='page-cover'>
      <div className='page-background page-background-margin' style={{ backgroundColor: bgColor, color: textColor }}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className='page-image page-image-margin'>
        <div className='page-image-group'>
          <img src={publicPath(imgLink)} alt={name} />
        </div>
      </div>
    </div>
  )
}

export const HubCover = ({ data }: { data: Hub }) => {
  const { name, imgLink, logoLink, description, bgColor, imgBgColor, textColor } = data
  return (
    <div className='page-hub'>
      <div className='page-background page-background-margin' style={{ backgroundColor: bgColor, color: textColor }}>
        {logoLink !== undefined && <img src={publicPath(logoLink)} alt={`Logo ${name}`} />}
        <h1>{name}</h1>
      </div>
      <div className='page-image page-image-margin'>
        <div className='page-image-group'>
          <div className='page-image-child'>
            <img src={publicPath(imgLink)} alt={name} />
          </div>
          <div className='page-image-child'style={{ backgroundColor: imgBgColor, color: textColor }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SeriesCover = ({ data }: { data: Event }) => {
  const { name, imgLink, description, bgColor, textColor, logoLink, parentPage } = data
  return (
    <div className='page-series'>
      <div className='page-background page-background-series' style={{ backgroundColor: bgColor, color: textColor }}>
        <div className='page-series-text'>
          {logoLink !== undefined && <img src={publicPath(logoLink)} alt={`Logo ${name}`} />}
          <div className='page-series-text-container'>
            <h1>{name}</h1>
            {isHub(parentPage) && <p><NavLink style={{ color: textColor }} to={{ pathname: parentPage.path }}>{parentPage.name}</NavLink></p>}
          </div>
        </div>
      </div>
      <div className='page-image'>
        <div className='page-image-group'>
          <img src={publicPath(imgLink)} alt={name} />
        </div>
      </div>
      <div className='page-image-child page-background-series' style={{ backgroundColor: bgColor, color: textColor }}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const EventCover = ({ data }: { data: Happening }) => {
  const { name, imgLink } = data
  return (
    <div className='page-event'>
      <div className='page-image'>
        <div className='page-image-group'>
          <img src={publicPath(imgLink)} alt={name} />
        </div>
      </div>
    </div>
  )
}
