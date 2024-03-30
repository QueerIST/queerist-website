import { type PropsWithChildren } from 'react'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import ReactGA from 'react-ga4'

import Launch from './../svg/launch.svg?react'
import WrapDelayed from '../helpers/async'
import { publicPath } from '../helpers/links'
import { type Happenings, type Happening } from '../types/domain'

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

const EventGalleryItem = ({ id, name, open, date, enddate, place, imgLink, link }: Happening & { id: string, open: boolean }) => {
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
          <a href={link} target='_blank' rel='noopener noreferrer' onClick={() => { handleClickEventLink(name) }}> <Launch /></a>
        </span>
        {/* <p>{description}</p> */}
      </div>
    </li>
  )
}

function EventGallery ({ data, open }: { data: Happenings, open: boolean }) {
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

export default EventGallery
