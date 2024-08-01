import { type PropsWithChildren } from 'react'

import classNames from 'classnames'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import ReactGA from 'react-ga4'
import { NavLink } from 'react-router-dom'

import Launch from './../svg/launch.svg?react'
import { Button } from './Button'
import { usePage } from '../api/use'
import { WrapDelayed } from '../helpers/delay'
import { publicPath } from '../helpers/links'
import { type Events, type Event } from '../types/domain'

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

const EventGalleryItem = ({ id, name, open = true, detached = false, date, location, imgLink, link, parentPage, path }: Event & { open?: boolean, detached?: boolean }) => {
  const [page] = usePage()
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
          <p>{format(date, 'dd MMM yyyy, HH\'h\'mm', { locale: pt })} @ {location.specific ?? location.name}</p>
          {!detached && <a href={link} target='_blank' rel='noopener noreferrer' onClick={() => { handleClickEventLink(name) }}> <Launch /></a>}
        </span>
        {<Button actionComp='EventList' actionName={`Entra ${name} (em ${page.name})`} color={parentPage.textColor} backgroundColor={parentPage.bgColor}>
          <NavLink to={{ pathname: path }}>
            {'Ver mais'}
          </NavLink>
        </Button>}
      </div>
    </li>
  )
}

export function EventGallery ({ data, open }: { data: Events, open: boolean }) {
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

export const InlineEventGallery = ({ data, reduced = false }: { data: Events, reduced?: boolean }) => (
  <div className={classNames('event-gallery-inline', reduced && 'event-gallery-reduced')}>
    <ul className='event-gallery'>
      {data.map((event, i) => (
        <EventGalleryItem
          key={i}
          detached
          {...event}
        />
      ))}
    </ul>
  </div>
)
