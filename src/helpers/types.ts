import { type Event, type Happening, type Hub, type PageMeta, Pages } from '../types/domain'

export function notNullish<T> (obj: T | null | undefined): obj is T {
  return obj !== undefined && obj !== null
}

export function isHub (page: PageMeta): page is Hub {
  return page.type === Pages.Hub
}

export function isSeries (page: PageMeta): page is Event {
  return page.type === Pages.Series
}

export function isEvent (page: PageMeta): page is Happening {
  return page.type === Pages.Event
}
