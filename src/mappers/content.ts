import { imageMapper, maybeImageMapper } from './components'
import { notNullish } from '../helpers/types'
import { type Hub, type Event, type Happening, Pages, type PageMeta } from '../types/domain'
import { type GetValues } from '../types/strapi'

export function hubMapper (data: GetValues<'api::hub.hub'>, parentPage: PageMeta): Hub {
  return {
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
    type: Pages.Hub
  }
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
    type: Pages.Series
  }

  const rawHappenings = data.Events
  if (rawHappenings !== undefined && notNullish(rawHappenings.data) && rawHappenings.data.length > 0) {
    series.happenings = rawHappenings.data.map(event => eventMapper(event.attributes, series))
  }

  return series
}

export function eventMapper (data: GetValues<'api::event.event'>, parentPage: Event): Happening {
  const description = data.Description?.[0].children[0]
  return {
    id: data.Slug,
    name: data.Name,
    imgLink: imageMapper(data.Image),
    date: data.Date,
    enddate: notNullish(data.EndDate) ? data.EndDate : undefined,
    place: data.Place,
    pin: data.Pin,
    link: data.Link,
    longDescription: notNullish(data.Description) ? data.Description : undefined,
    description: description !== undefined && 'text' in description ? description.text : data.Name,
    parentPage,
    type: Pages.Event
  }
}
