import { type DTextBlock, type DTextBlockWithLink, type DLinkToPage, type DLinkToFile, type DPage, type DSubPageMeta, type DTile, type DSubPage, type DEvent, type DEventWithHappenings } from '../types/data'
import { type PagesMeta, type LinkToFile, type LinkToPage, type TextBlockWithLink, type TextBlock as TypeTextBlock, type SubPageMeta, type EventWithHappenings, type Event } from '../types/domain'

/* DOMAIN */

export function isTextBlockWithLink (textBlock: TypeTextBlock): textBlock is TextBlockWithLink {
  return 'linkText' in textBlock
}

export function isTextBlockWithLinkToPage (textBlock: TextBlockWithLink): textBlock is LinkToPage {
  return 'linkPage' in textBlock
}

export function isTextBlockWithLinkToFile (textBlock: TextBlockWithLink): textBlock is LinkToFile {
  return 'linkFile' in textBlock
}

export function isSubPageMeta (page: PagesMeta): page is SubPageMeta {
  return 'parentPage' in page
}

export function isEventWithHappenings (event: Event): event is EventWithHappenings {
  return 'happenings' in event
}

/* DATA */

export function isDataTextBlockWithLink (textBlock: DTextBlock): textBlock is DTextBlockWithLink {
  return 'link_text' in textBlock
}

export function isDataTextBlockWithLinkToPage (textBlock: DTextBlock): textBlock is DLinkToPage {
  return 'link_page' in textBlock
}

export function isDataTextBlockWithLinkToFile (textBlock: DTextBlock): textBlock is DLinkToFile {
  return 'link_file' in textBlock
}

export function isDataSubPageMeta (_page: DPage, parentPage?: string): _page is DSubPageMeta {
  return parentPage !== undefined
}

export function isDataSubPage (_tile: DTile, parentPage?: string): _tile is DSubPage {
  return parentPage !== undefined
}

export function isDataEventWithHappenings (event: DEvent): event is DEventWithHappenings {
  return 'happenings' in event
}
