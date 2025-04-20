import { atcb_action } from 'add-to-calendar-button-react'
import { addHours, format } from 'date-fns'
import { pt } from 'date-fns/locale'
import ReactGA from 'react-ga4'

import Bookmark from './../svg/bookmark.svg?react'
import { LinkButton } from './Button'
import { gap } from '../helpers/ga4'
import { fullPath } from '../helpers/links'
import { isOnline } from '../helpers/location'
import { type Event } from '../types/domain'

import './eventinfo.css'

type ATCBActionEventConfig = Parameters<typeof atcb_action>[0]

let observer: MutationObserver | undefined
let b: HTMLElement | undefined

function reportEvent (id: string, e: string | null) {
  if (!e) return

  let ga
  const [event, trigger] = e.split(':')
  switch (event) {
    case 'openList':
      ga = gap('select_content', {
        content_type: 'bookmark',
        content_action: 'open',
        content_id: id
      })
      break
    case 'closeList':
      ga = gap('select_content', {
        content_type: 'bookmark',
        content_action: 'close',
        content_id: id
      })
      break
    case 'openCalendarLink': {
      const cal = trigger.split('-')[1]
      ga = {
        name: 'save',
        params: {
          content_type: 'bookmark',
          method: cal,
          item_id: id
        }
      }
      break
    }
    case 'initialization':
    case 'success':
    default:
      break
  }

  if (ga) {
    ReactGA.event(ga.name, ga.params)
  }
}

export const AddToCalendar = ({ event, url }: { event: Event, url?: string }) => {
  const { id, name, date, enddate, location, description } = event

  const onClick = async (config: ATCBActionEventConfig) => {
    const button = document.getElementById('bookmark')
    if (button) {
      if (b !== button) {
        b = undefined
        observer?.disconnect()
        observer = undefined
      }

      if (!observer) {
        b = button
        observer = new MutationObserver((mutationList) => {
          if (mutationList.length) {
            if (mutationList.length === 1) {
              const mutationElement = (mutationList[0].target as Element).getAttribute('atcb-last-event')
              reportEvent(id, mutationElement)
            } else {
              const mutation = mutationList[1]
              reportEvent(id, mutation.oldValue)
              reportEvent(id, (mutation.target as Element).getAttribute('atcb-last-event'))
            }
          }
        })
        observer.observe(button, { attributeFilter: ['atcb-last-event'], attributeOldValue: true })
      }
      await atcb_action(config, button)
    }
  }

  const online = isOnline(location)
  const calDescription = ''.concat(
    description.replace('\n', '[br]'),
    '[br]',
    `[br]- [url]${url ?? (!online ? location.pin : '')}|Chegar a ${location.name}[/url]`,
    `[br]- [url]${fullPath(event)}|Mais sobre evento ${name}[/url]`,
    '[br]- [url]http://bit.ly/CalendarQueerIST|Subscrever a todos os eventos[/url]'
  )
  const dateAfter2Hours = addHours(date, 2)
  const config: ATCBActionEventConfig = {
    name: `${name} | ${event.parentPage.name} | QueerIST`,
    description: calDescription,
    startDate: format(date, 'yyyy-MM-dd', { locale: pt }),
    endDate: format(enddate ?? dateAfter2Hours, 'yyyy-MM-dd', { locale: pt }),
    startTime: format(date, 'HH:mm', { locale: pt }),
    endTime: format(enddate ?? dateAfter2Hours, 'HH:mm', { locale: pt }),
    timeZone: 'Europe/Lisbon',
    location: location.shortVersion + (!online ? `, ${location.address}` : ''),
    organizer: 'QueerIST|queerist.sa@aeist.pt',
    buttonStyle: 'flat',
    listStyle: 'modal',
    size: '5|3',
    hideBackground: false,
    hideBranding: true,
    hideCheckmark: true,
    hideRichData: true,
    options: ['Apple', 'Google', 'Outlook.com', 'iCal'],
    customLabels: { close: 'Fechar', ical: 'iCal' }
  }

  return (
    <LinkButton
          link={{ onClick: () => { void onClick(config) } }}
          button={{ linkTextColor: 'black' }}
        >
      <Bookmark id='bookmark' />
    </LinkButton>
  )
}
