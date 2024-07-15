import { imageMapper, maybeImageMapper } from './components'
import { notNullish } from '../helpers/types'
import { type Hub, type Event, type Happening } from '../types/domain'
import { type GetValues } from '../types/strapi'

export function hubMapper (data: GetValues<'api::hub.hub'>, parentPage: string = 'projects'): Hub {
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
    seeMoreText: data.SeeMoreText
  }
}

export function seriesMapper (data: GetValues<'api::serie.serie'>): Event {
  const happenings = data.Events?.data.map(event => eventMapper(event.attributes))
  return {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    logoLink: maybeImageMapper(data.Logo),
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    seeMoreText: data.SeeMoreText,
    happenings: happenings !== undefined && (happenings.length > 0) ? happenings : undefined,
    parent: notNullish(data.Hub) ? hubMapper(data.Hub.data.attributes) : undefined
  }
}

export function eventMapper (data: GetValues<'api::event.event'>): Happening {
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
    description: description !== undefined && 'text' in description ? description.text : data.Name
  }
}
