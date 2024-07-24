import { type PageMeta } from '../types/domain'

export const publicPath = (path: string) => `${import.meta.env.VITE_FULL_URL}/a${path}`

const buildFullPath = (page?: PageMeta): string => page === undefined ? '' : `${buildFullPath(page.parentPage)}/${page.id}`

export const pagePath = (page: PageMeta) => `${page.id === 'home' ? '/' : buildFullPath(page)}`
