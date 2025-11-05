import { type Attribute } from '@strapi/strapi'
import { isAfter } from 'date-fns'

import { imageMapper, maybeImageMapper, maybeMediaMapper } from './components'
import { type YoastPost } from '../api/loaders'
import { pagePath } from '../helpers/links'
import { isOnline, Places, PLACES_MAP, type PlaceInfo } from '../helpers/location'
import { type Hub, type Series, type Event, Pages, type PageMeta, type EventMedia, type SubPage, type Post } from '../types/domain'
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
  const date = new Date(data.Date)
  const enddate = data.EndDate ? new Date(data.EndDate) : undefined
  const event: Event = {
    id: data.Slug,
    name: data.Name,
    img: imageMapper(data.Image),
    date,
    enddate: enddate && isAfter(enddate, date) ? enddate : undefined,
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

export function subPageMapper (data: GetValues<'api::subpage.subpage'>, parentPage: PageMeta): SubPage {
  const subpage: SubPage = {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    img: imageMapper(data.Image),
    date: data.Date ? new Date(data.Date) : undefined,
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    parentPage,
    path: '',
    type: Pages.SubPage
  }

  subpage.path = pagePath(subpage)

  return subpage
}

export function postMapper (data: YoastPost): Post {
  const imageUrl = new URL(data.yoast_head_json.og_image[0].url)
  imageUrl.search = new URLSearchParams({ fit: '400,400' }).toString()
  return {
    id: data.id,
    title: data.title.rendered,
    img: imageUrl.toString(),
    text: data.yoast_head_json.og_description,
    link: data.link
  }
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
  }).join('\n')
}
