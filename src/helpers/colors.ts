import { type PageMeta } from '../types/domain'

function ensureNotWhite (color: string | undefined) {
  if (color !== 'white' && color !== '#ffffff') return color
}

export function getNonWhiteColor (page: PageMeta) {
  if (ensureNotWhite(page.bgColor)) {
    return page.bgColor
  }

  if (ensureNotWhite(page.textColor)) {
    return page.textColor
  }

  if (ensureNotWhite(page.parentPage?.bgColor)) {
    return page.parentPage?.bgColor
  }

  if (ensureNotWhite(page.parentPage?.textColor)) {
    return page.parentPage?.textColor
  }
}
