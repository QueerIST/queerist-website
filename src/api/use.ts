import { type PageMeta } from '../types/domain'

let page: PageMeta

export function usePage (): [ PageMeta, (p: PageMeta) => void ] {
  return [page, (p: PageMeta) => { page = p }]
}
