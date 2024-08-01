import { NavLink } from 'react-router-dom'

import { type Event } from '../types/domain'

import './eventinseries.css'

export const EventInSeries = ({ data }: { data: Event }) => {
  const series = data.parentPage
  const events = series.events

  if (events === undefined) { return }

  const eventIndex = events.findIndex((e) => e.id === data.id)
  const previous = events.at(eventIndex + 1)
  const next = eventIndex !== 0 ? events.at(eventIndex - 1) : undefined

  return (
    <div className='event-in-series'>
      <div className='event-in-series-container' style={{ backgroundColor: series.bgColor, color: series.textColor }}>
        <div className='event-in-series-title'>
          <h3><NavLink style={{ color: series.textColor }} to={{ pathname: series.path }}>{series.name}</NavLink></h3>
        </div>
        <div className='event-in-series-links'>
          <div className='event-in-series-link'>
            {previous !== undefined &&
            <>
              <h4>Anterior</h4>
              <p>{'< '}<NavLink style={{ color: series.textColor }} to={{ pathname: previous.path }}>{`${previous.name}`}</NavLink></p>
            </>}
          </div>
          <div className='event-in-series-link'>
            {next !== undefined &&
            <>
              <h4>Seguinte</h4>
              <p><NavLink style={{ color: series.textColor }} to={{ pathname: next.path }}>{`${next.name}`}</NavLink>{' >'}</p>
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}
