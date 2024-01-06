const publicPath = (path) => `${import.meta.env.BASE_URL}${path}`
const fullPath = (path) => `${import.meta.env.VITE_FULL_URL}/${path}`
const fullPathSlashless = (path) => `${import.meta.env.VITE_FULL_URL}${path}`

export { publicPath, fullPath, fullPathSlashless }
