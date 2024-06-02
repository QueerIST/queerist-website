import { type PropsWithChildren } from 'react'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import ReactGA from 'react-ga4'
import { NavLink } from 'react-router-dom'

import Launch from './../svg/launch.svg?react'
import Button from './Button'
import WrapDelayed from '../helpers/async'
import { publicPath } from '../helpers/links'
import { type Happenings, type Happening, type Event } from '../types/domain'

import './eventgallery.css'

const handleClickEventLink = (event: string) => {
  ReactGA.event({
    category: 'EventGallery', // Required
    action: `Clica link de ${event}` // Required
  })
}

const EventGalleryWrap = (props: PropsWithChildren<{ open: boolean }>) => (
  <ul className={`event-gallery ${props.open ? '' : 'closed'}`}>
    {props.children}
  </ul>
)

const EventGalleryItem = ({ id, name, open = true, date, place, imgLink, link, parentEvent }: Happening & { id: string, open?: boolean, parentEvent?: Event }) => {
  const dateObj = new Date(date)
  return (
    <li className='event-gallery-item' id={id}>
      <div className='event-gallery-item-img'>
        <WrapDelayed load={open}>
          <img src={publicPath(imgLink)} alt={name} />
        </WrapDelayed>
      </div>
      <div className='event-gallery-item-text'>
        <h3>{name}</h3>
        <span className='event-gallery-item-launch'>
          <p>{format(dateObj, 'dd MMM yyyy, HH\'h\'mm', { locale: pt })} @ {place}</p>
          {parentEvent === undefined && <a href={link} target='_blank' rel='noopener noreferrer' onClick={() => { handleClickEventLink(name) }}> <Launch /></a>}
        </span>
        {parentEvent !== undefined && <Button actionComp='EventList' actionName={`Entra ${name} (em ${parentEvent.name})`} color={parentEvent.textColor} backgroundColor={parentEvent.bgColor}>
          <NavLink to={{ pathname: `${id}` }}>
            {'Ver mais'}
          </NavLink>
        </Button>}
      </div>
    </li>
  )
}

export function EventGallery ({ data, open }: { data: Happenings, open: boolean }) {
  return (
    <EventGalleryWrap open={open}>
      {data.map((event, i) => (
        <EventGalleryItem
        key={i}
        open={open}
        {...event}
        />
      ))}
    </EventGalleryWrap>
  )
}

export const InlineEventGallery = ({ data }: { data: Event }) => (
  <div className='event-gallery-inline'>
    <ul className='event-gallery'>
      {data.happenings?.map((event, i) => (
        <EventGalleryItem
          key={i}
          {...event}
          parentEvent={data}
        />
      ))}
    </ul>
  </div>
)
