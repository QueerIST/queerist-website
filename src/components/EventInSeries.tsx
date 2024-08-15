import { LinkButton } from './Button'
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
          <h3>
            <LinkButton
                link={{ linkPage: series.path }}
                button={{ linkTextColor: series.textColor }}
                action={{
                  actionComp: 'EventInSeries',
                  actionName: `Volta para ${series.name}`
                }}>
              {series.name}
            </LinkButton>
          </h3>
        </div>
        <div className='event-in-series-links'>
          <div className='event-in-series-link'>
            {previous !== undefined &&
            <>
              <h4>Anterior</h4>
              <p>
                {'< '}
                <LinkButton
                  link={{ linkPage: previous.path }}
                  button={{ linkTextColor: series.textColor }}
                  action={{
                    actionComp: 'EventInSeries',
                    actionName: `Volta para ${previous.name}`
                  }}>
                  {previous.name}
                </LinkButton>
              </p>
            </>}
          </div>
          <div className='event-in-series-link'>
            {next !== undefined &&
            <>
              <h4>Seguinte</h4>
              <p>
                <LinkButton
                  link={{ linkPage: next.path }}
                  button={{ linkTextColor: series.textColor }}
                  action={{
                    actionComp: 'EventInSeries',
                    actionName: `Avança para ${next.name}`
                  }}>
                  {next.name}
                </LinkButton>
                {' >'}
              </p>
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}
