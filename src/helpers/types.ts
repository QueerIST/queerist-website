import { type PagesMeta, type SubPageMeta } from '../types/domain'

export function isSubPageMeta (page: PagesMeta): page is SubPageMeta {
  return 'parentPage' in page
}

export function notNullish<T> (obj: T | null | undefined): obj is T {
  return obj !== undefined && obj !== null
}
