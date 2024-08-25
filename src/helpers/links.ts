import { type PageMeta } from '../types/domain'

export const publicPath = (path: string) => `${import.meta.env.VITE_FULL_URL}/a${path}`

const buildPagePath = (page?: PageMeta): string => page === undefined ? '' : `${buildPagePath(page.parentPage)}/${page.id}`

export const pagePath = (page: PageMeta) => `${page.id === 'home' ? '/' : buildPagePath(page)}`

export const fullPath = (page: PageMeta) => {
  const path = page.path
  return `${import.meta.env.VITE_FULL_URL}${path === '/' ? '' : path}`
}

export const pageId = (path: string | undefined) => {
  if (path === undefined) return ''
  if (path === '/') return 'home'
  const split = path.split('/')
  return split[split.length - 1]
}
