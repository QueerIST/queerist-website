import { publicPath } from '../helpers/links'
import { type Event, type PageMeta, type Hub } from '../types/domain'

import './pagecover.css'

export const PageCover = (props: PageMeta) => {
  const { name, imgLink, description, bgColor, textColor } = props
  return (
    <>
      <div className='page-background' style={{ backgroundColor: bgColor, color: textColor }}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className='page-image'>
        <div className='page-image-group'>
          <img src={publicPath(imgLink)} alt={name} />
        </div>
      </div>
    </>
  )
}

export const HubCover = (props: Hub) => {
  const { name, imgLink, logoLink, description, bgColor, imgBgColor, textColor } = props
  return (
    <>
      <div className='page-background' style={{ backgroundColor: bgColor, color: textColor }}>
        {logoLink !== undefined && <img src={publicPath(logoLink)} alt={`Logo ${name}`} />}
        <h1>{name}</h1>
      </div>
      <div className='page-image'>
        <div className='page-image-group'>
          <div className='page-image-child'>
            <img src={publicPath(imgLink)} alt={name} />
          </div>
          <div className='page-image-child'style={{ backgroundColor: imgBgColor, color: textColor }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export const SeriesCover = (props: Event) => {
  const { name, imgLink, description, bgColor, textColor, logoLink } = props
  return (
    <div className='page-series'>
      <div className='page-background page-background-series' style={{ backgroundColor: bgColor, color: textColor }}>
        <div className='page-series-text'>
          {logoLink !== undefined && <img src={publicPath(logoLink)} alt={`Logo ${name}`} />}
          <div className='page-series-text-container'>
            <h1>{name}</h1>
            <p>{'Projetos'}</p>
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
