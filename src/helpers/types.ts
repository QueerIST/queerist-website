import { type DTextBlock, type DTextBlockWithLink, type DLinkToPage, type DLinkToFile, type DPage, type DSubPageMeta } from '../types/data'
import { type PagesMeta, type LinkToFile, type LinkToPage, type TextBlockWithLink, type TextBlock as TypeTextBlock, type SubPageMeta } from '../types/domain'

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
  return 'isSubPage' in page && page.isSubPage
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

export function isDataSubPageMeta (page: DPage, isSubPage: boolean): page is DSubPageMeta {
  return isSubPage
}
