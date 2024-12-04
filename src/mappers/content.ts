import { type Attribute } from '@strapi/strapi'

import { imageMapper, maybeImageMapper, maybeMediaMapper } from './components'
import { pagePath } from '../helpers/links'
import { isOnline, Places, PLACES_MAP, type PlaceInfo } from '../helpers/location'
import { type Hub, type Series, type Event, Pages, type PageMeta, type EventMedia } from '../types/domain'
import { type GetValue, type GetValues } from '../types/strapi'

export function hubMapper (data: GetValues<'api::hub.hub'>, parentPage: PageMeta): Hub {
  const hub: Hub = {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    img: imageMapper(data.Image),
    parentPage,
    logo: maybeImageMapper(data.Logo),
    imgBgColor: data.ImageBackgroundColor,
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    seeMoreText: data.SeeMoreText,
    path: '',
    type: Pages.Hub
  }

  hub.path = pagePath(hub)

  return hub
}

export function seriesMapper (data: GetValues<'api::serie.serie'>, parentPage: PageMeta): Series {
  const series: Series = {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    img: imageMapper(data.Image),
    logo: maybeImageMapper(data.Logo),
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    seeMoreText: data.SeeMoreText,
    parentPage,
    path: '',
    type: Pages.Series
  }

  series.path = pagePath(series)

  const rawEvents = data.Events
  if (rawEvents?.data && rawEvents.data.length > 0) {
    series.events = rawEvents.data.map(event => eventMapper(event.attributes, series))
    series.eventMedia = series.events.reduce((a: EventMedia[], e) => ([...a, ...(e.media?.map((m): EventMedia => ({ event: e, media: m.media })) ?? [])]), [])
  }

  return series
}

export function eventMapper (data: GetValues<'api::event.event'>, parentPage: Series): Event {
  const description = textBlockFlattener(data.Description)
  const event: Event = {
    id: data.Slug,
    name: data.Name,
    img: imageMapper(data.Image),
    date: new Date(data.Date),
    enddate: data.EndDate ? new Date(data.EndDate) : undefined,
    location: { ...PLACES_MAP[data.Pin] },
    link: data.Link,
    longDescription: data.Description ? data.Description : undefined,
    description: description?.length ? description : parentPage.description,
    media: data.Media ? maybeMediaMapper(data.Media)?.map((m) => ({ media: m })) : undefined,
    parentPage,
    path: '',
    type: Pages.Event
  }

  event.path = pagePath(event)
  event.location = enrichLocation(event, data.Place ?? undefined)

  return event
}

function enrichLocation (event: Event, place?: string): PlaceInfo {
  const location = event.location

  if (isOnline(location)) {
    location.specific = place
    location.shortVersion = (place ? place + ', ' : '') + location.name
    if (location.name === Places.Online) {
      location.shortVersion = place ?? location.name
    }
  } else {
    location.specific = place
    location.shortVersion = (place ? place + ', ' : '') + location.name
  }

  return location
}

function textBlockFlattener (data: GetValue<Attribute.Blocks> | undefined) {
  return data?.map((block) => {
    if (block.type === 'paragraph' || block.type === 'heading') {
      return block.children.map((inline) => {
        if (inline.type === 'text') {
          return inline.text
        }
        return inline.children.map(link => link.text).join('')
      }).join('')
    }
    return ''
  }).join(' ')
}
