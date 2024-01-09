import { type DTextBlock, type DTextBlockWithLink, type DLinkToPage, type DLinkToFile } from '../types/data'
import { type LinkToFile, type LinkToPage, type TextBlockWithLink, type TextBlock as TypeTextBlock } from '../types/domain'

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
