const publicPath = (path) => `${process.env.PUBLIC_URL}/${path}`
const fullPath = (path) => `${process.env.REACT_APP_FULL_URL}/${path}`
const fullPathSlashless = (path) => `${process.env.REACT_APP_FULL_URL}${path}`

export { publicPath, fullPath, fullPathSlashless }