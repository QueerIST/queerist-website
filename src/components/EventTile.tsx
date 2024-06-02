import { useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import Expand from './../svg/expand.svg?react'
import Button from './Button'
import { EventGallery } from './EventGallery'
import { publicPath } from '../helpers/links'
import { type Event } from '../types/domain'

import './tile.css'

const EventTile = ({ data, n, inline = false }: { data: Event, n: number, inline?: boolean }) => {
  const { id, name, description, imgLink, logoLink, bgColor, textColor, happenings, seeMoreText } = data

  const [open, setOpen] = useState(false)
  const location = useLocation()
  const dir = n % 2 !== 0 ? 'left' : 'right'
  const openClass = inline && open ? 'open' : ''

  const EventTypeInfoButton = (seeMoreText?: string) => (
    inline
      ? <button
      onClick={() => { setOpen(!open) }}
      className={`tile-info-b tile-info-button ${openClass}`}
    >
        {seeMoreText ?? 'Ver mais'}
        { <Expand fill={textColor} />}
      </button>
      : <NavLink
      className='tile-info-b'
      to={{ pathname: `${id}` }}
    >
        {seeMoreText}
      </NavLink>
  )

  useEffect(() => {
    if (inline && location.hash.split('-')[0] === `#${id}`) { setOpen(true) }
  }, [location, id, inline])

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
          <Button actionComp='EventTile' actionName={`Clica ${name}`} actionLabel={inline ? (open ? 'Close' : 'Open') : undefined} borderColor={textColor} color={textColor}>
            {EventTypeInfoButton(seeMoreText)}
          </Button>}
        </div>
        <div className='tile-info-img'>
          <img className={openClass} src={publicPath(imgLink)} alt={name} />
          {inline && happenings !== undefined && <EventGallery open={open} data={happenings} />}
        </div>
      </div>
    </div>
  )
}

export default EventTile
