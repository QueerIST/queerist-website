import { type DPage, type DSubPageMeta, type DTile, type DSubPage, type DEvent, type DEventWithHappenings } from '../types/data'
import { type PagesMeta, type SubPageMeta, type EventWithHappenings, type Event } from '../types/domain'

/* DOMAIN */

export function isSubPageMeta (page: PagesMeta): page is SubPageMeta {
  return 'parentPage' in page
}

export function isEventWithHappenings (event: Event): event is EventWithHappenings {
  return 'happenings' in event
}

/* DATA */

export function isDataSubPageMeta (_page: DPage, parentPage?: string): _page is DSubPageMeta {
  return parentPage !== undefined
}

export function isDataSubPage (_tile: DTile, parentPage?: string): _tile is DSubPage {
  return parentPage !== undefined
}

export function isDataEventWithHappenings (event: DEvent): event is DEventWithHappenings {
  return 'happenings' in event
}
