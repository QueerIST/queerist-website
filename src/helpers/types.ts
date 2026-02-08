import { type Series, type Event, type Hub, type PageMeta, Pages } from '../types/domain'

export function isHub (page: PageMeta): page is Hub {
  return page.type === Pages.Hub
}

export function isSeries (page: PageMeta): page is Series {
  return page.type === Pages.Series
}

export function isEvent (page: PageMeta): page is Event {
  return page.type === Pages.Event
}

export function slug (page: { Slug: string }) {
  return page.Slug
}
