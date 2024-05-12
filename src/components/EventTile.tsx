import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Expand from './../svg/expand.svg?react'
import Button from './Button'
import EventGallery from './EventGallery'
import { publicPath } from '../helpers/links'
import { type Event } from '../types/domain'

import './tile.css'

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

export default EventTile
