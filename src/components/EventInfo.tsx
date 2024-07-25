import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { differenceInHours, format, isThisYear } from 'date-fns'
import { pt } from 'date-fns/locale'
import { JsonLd } from 'react-schemaorg'
import { type Event, type VirtualLocation, type Place } from 'schema-dts'

import { isOnline } from '../helpers/location'
import { type Happening } from '../types/domain'
import './eventinfo.css'

export const EventInfo = ({ data }: { data: Happening }) => {
  const { name, date, enddate, location, longDescription, description, imgLink } = data
  const dateObj = new Date(date)

  let yearFormat = ''; let timeFormat = "'às' HH'h'mm"; let endDateObj; let endTimeString = ''

  if (!isThisYear(date)) { yearFormat = " 'de' yyyy" }

  if (enddate !== undefined) {
    endDateObj = new Date(enddate)
    if (differenceInHours(endDateObj, dateObj) < 12) {
      timeFormat = "'das' HH'h'mm"
      endTimeString = format(endDateObj, " 'às' HH'h'mm", { locale: pt })
    } else {
      endTimeString = format(endDateObj, ", 'até' d MMMM 'de' yyyy 'às' HH'h'mm", { locale: pt })
    }
  }

  const online = isOnline(location)
  let locationBlock: Place | VirtualLocation
  if (online) {
    locationBlock = {
      '@type': 'VirtualLocation',
      url: location.link
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
      <h3>📅 <time dateTime={dateObj.toISOString()}>{format(dateObj, `EEEE, d MMMM${yearFormat}, ${timeFormat}`, { locale: pt }) + endTimeString}</time></h3>
      <h2>{name}</h2>
      <h4><u>{location.shortVersion}</u></h4>
      {longDescription !== undefined && <BlocksRenderer content={longDescription}></BlocksRenderer>}
      <JsonLd<Event>
      item={ {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name,
        startDate: dateObj.toISOString(),
        endDate: endDateObj !== undefined ? dateObj.toISOString() : undefined,
        eventAttendanceMode: online ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: locationBlock,
        image: [imgLink],
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
