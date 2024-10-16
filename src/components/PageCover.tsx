import { LinkButton } from './Button'
import { Image } from './Image'
import { gap } from '../helpers/ga4'
import { isHub } from '../helpers/types'
import { type Series, type PageMeta, type Hub, type Event } from '../types/domain'

import './pagecover.css'

export const PageCover = ({ data }: { data: PageMeta }) => {
  const { name, description, bgColor, textColor, img } = data
  return (
    <div className='page-cover'>
      <div className='page-background page-background-margin' style={{ backgroundColor: bgColor, color: textColor }}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className='page-image page-image-margin'>
        <div className='page-image-group'>
          <Image src={img} alt={`Capa da página ${name}`} />
        </div>
      </div>
    </div>
  )
}

export const HubCover = ({ data }: { data: Hub }) => {
  const { name, img, logo, description, bgColor, imgBgColor, textColor } = data
  return (
    <div className='page-hub'>
      <div className='page-background page-background-margin' style={{ backgroundColor: bgColor, color: textColor }}>
        {logo && <Image src={logo} alt={`Logo de ${name}`} />}
        <h1>{name}</h1>
      </div>
      <div className='page-image page-image-margin'>
        <div className='page-image-group'>
          <div className='page-image-child'>
            <Image src={img} alt={`Cartaz de ${name}`} />
          </div>
          <div className='page-image-child'style={{ backgroundColor: imgBgColor, color: textColor }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SeriesCover = ({ data }: { data: Series }) => {
  const { name, img, description, bgColor, textColor, logo, parentPage } = data
  return (
    <div className='page-series'>
      <div className='page-background page-background-series' style={{ backgroundColor: bgColor, color: textColor }}>
        <div className='page-series-text'>
          {logo && <Image src={logo} alt={`Logo da série de eventos ${name}`} />}
          <div className='page-series-text-container'>
            <h1>{name}</h1>
            {isHub(parentPage) && <p>
              <LinkButton
                link={{ linkPage: parentPage.path }}
                button={{ linkTextColor: textColor }}
                action={gap('navigate_content', {
                  type: 'series-cover',
                  link_text: parentPage.name,
                  link_page: parentPage.id
                })}>
                {parentPage.name}
              </LinkButton>
            </p>}
          </div>
        </div>
      </div>
      <div className='page-image'>
        <div className='page-image-group'>
          <Image src={img} alt={`Cartaz da série de eventos ${name}, parte de ${data.parentPage.name}`} />
        </div>
      </div>
      <div className='page-image-child page-background-series' style={{ backgroundColor: bgColor, color: textColor }}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const EventCover = ({ data }: { data: Event }) => {
  const { name, img } = data
  return (
    <div className='page-event'>
      <div className='page-image'>
        <div className='page-image-group'>
          <Image src={img} alt={`Cartaz do evento ${name}, parte de ${data.parentPage.name}`} />
        </div>
      </div>
    </div>
  )
}
