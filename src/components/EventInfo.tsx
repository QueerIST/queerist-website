import { differenceInHours, format, isThisYear } from 'date-fns'
import { pt } from 'date-fns/locale'
import { JsonLd } from 'react-schemaorg'
import { type Event as EventDTS, type VirtualLocation, type Place } from 'schema-dts'

import Launch from './../svg/launch.svg?react'
import { AddToCalendar } from './AddToCalendar'
import { LinkButton } from './Button'
import { Share } from './Share'
import { TextRenderer } from './TextRenderer'
import { gap } from '../helpers/ga4'
import { fullPath, fullURL, pageId, publicPath } from '../helpers/links'
import { isOnline } from '../helpers/location'
import { type Event } from '../types/domain'

import './eventinfo.css'

export const EventInfo = ({ data }: { data: Event }) => {
  const { name, date, enddate, location, longDescription, description, img, link } = data

  let yearFormat = ''; let timeFormat = "'às' HH'h'mm"; let endTimeString = ''

  if (!isThisYear(date)) { yearFormat = " 'de' yyyy" }

  if (enddate) {
    if (differenceInHours(enddate, date) < 12) {
      timeFormat = "'das' HH'h'mm"
      endTimeString = format(enddate, " 'às' HH'h'mm", { locale: pt })
    } else {
      endTimeString = format(enddate, ", 'até' d MMMM 'de' yyyy 'às' HH'h'mm", { locale: pt })
    }
  }

  const moreColor = data.parentPage.bgColor !== 'white' ? data.parentPage.bgColor : data.parentPage.textColor

  let locationUrl
  if (location.link?.linkWeb) locationUrl = location.link.linkWeb
  else if (location.link?.linkPage) locationUrl = fullURL(location.link.linkPage)

  const online = isOnline(location)
  let locationBlock: Place | VirtualLocation
  if (online) {
    locationBlock = {
      '@type': 'VirtualLocation',
      url: locationUrl ?? fullPath(data)
    }
  } else {
    locationBlock = {
      '@type': 'Place',
      name: location.shortVersion,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address,
        addressLocality: 'Lisboa',
        addressCountry: 'PT'
      }
    }
  }

  return (
    <div className='event-info'>
      <h3 className='event-info-date'>📅 <time dateTime={date.toISOString()}>{format(date, `EEEE, d MMMM${yearFormat}, ${timeFormat}`, { locale: pt }) + endTimeString}</time>
        <AddToCalendar event={data} url={locationUrl} />
        <Share page={data} />
      </h3>
      <h2>{name}</h2>
      {isOnline(location)
        ? (
          <LinkButton
          className='no-link-decoration'
          link={location.link}
          action={gap('navigate_content', { type: 'event-info', link_page: pageId(location.link.linkPage), link_text: location.shortVersion })}
        >
            <h4>🌐 <u>{location.shortVersion}</u></h4>
          </LinkButton>
          )
        : (
          <LinkButton
            className='no-link-decoration'
            link={{ linkWeb: location.pin, ...location.link }}
          >
            <h4>📍 <u>{location.shortVersion}</u></h4>
          </LinkButton>
          )}
      {longDescription && <TextRenderer data={longDescription} />}
      <p className='icon-svg'>
        {link
          ? <>
            <LinkButton
              link={{ linkWeb: link }}
              button={{ linkTextColor: moreColor }}
            >
              {'Mais informações'}
            </LinkButton>
            <Launch fill={moreColor}/>
          </>
          : 'Sabe mais nossas redes sociais! 👇'}
      </p>
      <JsonLd<EventDTS>
      item={ {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name,
        startDate: date.toISOString(),
        endDate: enddate ? enddate.toISOString() : undefined,
        eventAttendanceMode: online ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: locationBlock,
        image: [publicPath(img.url)],
        description,
        organizer: {
          '@type': 'Organization',
          name: 'QueerIST',
          url: import.meta.env.VITE_FULL_URL
        }
      }}
    />
    </div>
  )
}
