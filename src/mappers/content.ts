import { imageMapper } from './components'
import { type Event, type Happening } from '../types/domain'
import { type GetValues } from '../types/strapi'

export function seriesMapper (data: GetValues<'api::serie.serie'>): Event {
  return {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    logoLink: data.Logo !== undefined ? imageMapper(data.Logo) : undefined,
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    seeMoreText: data.SeeMoreText,
    happenings: data.Events?.data.map(event => eventMapper(event.attributes))
  }
}

export function eventMapper (data: GetValues<'api::event.event'>): Happening {
  return {
    id: data.Slug,
    name: data.Name,
    imgLink: imageMapper(data.Image),
    date: data.Date,
    enddate: data.EndDate,
    place: data.Place,
    link: data.Link,
    description: data.Description
  }
}
