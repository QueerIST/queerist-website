import { imageMapper, maybeImageMapper } from './components'
import { fullPath, pagePath } from '../helpers/links'
import { isOnline, Places, PLACES_MAP, type PlaceInfo } from '../helpers/location'
import { notNullish } from '../helpers/types'
import { type Hub, type Event, type Happening, Pages, type PageMeta } from '../types/domain'
import { type GetValues } from '../types/strapi'

export function hubMapper (data: GetValues<'api::hub.hub'>, parentPage: PageMeta): Hub {
  const hub: Hub = {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    parentPage,
    logoLink: maybeImageMapper(data.Logo),
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

export function seriesMapper (data: GetValues<'api::serie.serie'>, parentPage: PageMeta): Event {
  const series: Event = {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    logoLink: maybeImageMapper(data.Logo),
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    seeMoreText: data.SeeMoreText,
    parentPage,
    path: '',
    type: Pages.Series
  }

  series.path = pagePath(series)

  const rawHappenings = data.Events
  if (rawHappenings !== undefined && notNullish(rawHappenings.data) && rawHappenings.data.length > 0) {
    series.happenings = rawHappenings.data.map(event => eventMapper(event.attributes, series))
  }

  return series
}

export function eventMapper (data: GetValues<'api::event.event'>, parentPage: Event): Happening {
  const description = data.Description?.[0].children[0]
  const event: Happening = {
    id: data.Slug,
    name: data.Name,
    imgLink: imageMapper(data.Image),
    date: data.Date,
    enddate: notNullish(data.EndDate) ? data.EndDate : undefined,
    location: PLACES_MAP[data.Pin as Places],
    link: data.Link,
    longDescription: notNullish(data.Description) ? data.Description : undefined,
    description: description !== undefined && 'text' in description ? description.text : data.Name,
    parentPage,
    path: '',
    type: Pages.Event
  }

  event.path = pagePath(event)
  event.location = enrichLocation(event, data.Place !== undefined && data.Place.length !== 0 ? data.Place : undefined)

  return event
}

function enrichLocation (event: Happening, place?: string): PlaceInfo {
  const location = event.location

  if (isOnline(location)) {
    location.specific = place
    location.shortVersion = (place !== undefined ? place + ', ' : '') + location.name
    if (location.name === Places.Online) {
      location.link = fullPath(event)
      location.shortVersion = place ?? location.name
    }
  } else {
    location.specific = place
    location.shortVersion = (place !== undefined ? place + ', ' : '') + location.name
  }

  return location
}
