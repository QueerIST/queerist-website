import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { differenceInHours, format, isThisYear } from 'date-fns'
import { pt } from 'date-fns/locale'

import { type Happening } from '../types/domain'

import './eventinfo.css'

export const EventInfo = (props: { data: Happening }) => {
  const { name, date, enddate, place, longDescription } = props.data
  const dateObj = new Date(date)

  let yearFormat = ''; let timeFormat = "'às' HH'h'mm"; let endTimeString = ''

  if (!isThisYear(date)) { yearFormat = " 'de' yyyy" }

  if (enddate !== undefined) {
    const endDateObj = new Date(enddate)
    if (differenceInHours(endDateObj, dateObj) < 12) {
      timeFormat = "'das' HH'h'mm"
      endTimeString = format(endDateObj, " 'às' HH'h'mm", { locale: pt })
    } else {
      endTimeString = format(endDateObj, ", 'até' d MMMM 'de' yyyy 'às' HH'h'mm", { locale: pt })
    }
  }

  return (
    <div className='event-info'>
      <h3>📅 <time dateTime={dateObj.toISOString()}>{format(dateObj, `EEEE, d MMMM${yearFormat}, ${timeFormat}`, { locale: pt }) + endTimeString}</time></h3>
      <h2>{name}</h2>
      <h4><u>{place}, Instituto Superior Técnico</u></h4>
      {longDescription !== undefined && <BlocksRenderer content={longDescription}></BlocksRenderer>}
    </div>
  )
}
