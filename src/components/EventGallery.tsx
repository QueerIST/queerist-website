import { type PropsWithChildren } from 'react'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import ReactGA from 'react-ga4'

import Launch from './../svg/launch.svg?react'
import WrapDelayed from '../helpers/async'
import { publicPath } from '../helpers/links'
import { type DHappening } from '../types/data'
import { type Event, type Happening } from '../types/domain'

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

const EventGalleryItem = ({ id, name, open, date, time, place, imgLink, link }: Happening & { id: string, open: boolean }) => {
  const dateObj = new Date(`${date}T${time ?? '00:00:00'}`)
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
          <p>{format(dateObj, `dd MMM yyyy${time !== undefined ? ', HH\'h\'mm' : ''}`, { locale: pt })} @ {place}</p>
          <a href={link} target='_blank' rel='noopener noreferrer' onClick={() => { handleClickEventLink(name) }}> <Launch /></a>
        </span>
        {/* <p>{description}</p> */}
      </div>
    </li>
  )
}

function EventGallery ({ id, data, open }: Pick<Event, 'id'> & { data: DHappening[], open: boolean }) {
  return (
    <EventGalleryWrap open={open}>
      {data.map((event, i) => (
        <EventGalleryItem
          key={i}
          id={`${id}-${i}`}
          name={event.name}
          open={open}
          description={event.description}
          date={event.date}
          time={event.time}
          place={event.place}
          imgLink={event.img_link}
          link={event.link}
        />
      ))}
    </EventGalleryWrap>
  )
}

export default EventGallery
