import { useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import Expand from './../svg/expand.svg?react'
import Button from './Button'
import EventGallery from './EventGallery'
import { publicPath } from '../helpers/links'
import { type Event, type SubPage } from '../types/domain'
// import Launch from './../svg/launch.svg?react'

import './tile.css'

function PageTile ({ id, parentPage, name, description, imgLink, logoLink, bgColor, textColor, seeMoreText }: Omit<SubPage, 'textBlock' | 'imgBgColor'>) {
  const EventTypeInfoButton = (
    <NavLink
      className='tile-info-b'
      to={{ pathname: `/${parentPage}/${id}` }}
    >
      {seeMoreText}
      {/* <Launch fill={textColor} /> */}
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
          <Button actionComp='PageTile' actionName={`Entra ${name} (em ${parentPage})`} borderColor={textColor} color={textColor}>
            {EventTypeInfoButton}
          </Button>
        </div>
      </div>
    </div>
  )
}

const EventTile = ({ data, n }: { data: Event, n: number }) => {
  const { id, name, description, imgLink, logoLink, bgColor, textColor, happenings, seeMoreText } = data

  const [open, setOpen] = useState(false)
  const location = useLocation()
  const dir = n % 2 !== 0 ? 'left' : 'right'
  const openClass = open ? 'open' : ''

  const EventTypeInfoButton = (seeMoreText?: string) => (
    <button
      onClick={() => { setOpen(!open) }}
      className={`tile-info-b tile-info-button ${openClass}`}
    >
      {seeMoreText ?? 'Ver mais'}
      <Expand fill={textColor} />
    </button>
  )

  useEffect(() => {
    if (location.hash.split('-')[0] === `#${id}`) { setOpen(true) }
  }, [location, id])

  return (
    <div id={id}>
      <div
      data-aos={`flip-${dir}`} className={`tile-info ${dir}`} style={{ backgroundColor: bgColor, color: textColor }}
    >
        <div className={`tile-info-text ${openClass}`}>
          {logoLink !== undefined &&
          <div className='tile-info-text-img'>
            <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
          </div>}
          <h3 className='tile-info-text-text'>{name}</h3>
          <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
          {happenings !== undefined &&
          <Button actionComp='EventTile' actionName={`Clica ${name}`} actionLabel={open ? 'Close' : 'Open'} borderColor={textColor} color={textColor}>
            {EventTypeInfoButton(seeMoreText)}
          </Button>}
        </div>
        <div className='tile-info-img'>
          <img className={openClass} src={publicPath(imgLink)} alt={name} />
          {happenings !== undefined && <EventGallery open={open} data={happenings} />}
        </div>
      </div>
    </div>
  )
}

export { EventTile, PageTile }
