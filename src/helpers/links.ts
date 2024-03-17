const publicPath = (path: string) => `${import.meta.env.BASE_URL}${path}`
const fullPath = (path: string) => `${import.meta.env.VITE_FULL_URL}/${path}`
const fullPathSlashless = (path: string) => `${import.meta.env.VITE_FULL_URL}${path}`

export { publicPath, fullPath, fullPathSlashless }
