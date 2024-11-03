import { publicPath } from '../helpers/links'
import { type GetValues } from '../types/strapi'

import './textblock.css'

/* interface Format {
  ext?: string
  hash: string
  height?: number
  mime: string
  name: string
  size: number
  sisizeInBytesze: number
  url: string
  width?: number
}

enum Types {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  Thumbnail = 'thumbnail'
}

type Formats = {
  [key in Types]?: Format
} */

export function Image ({ src, alt, className }: { src: GetValues<'plugin::upload.file'>, alt: string, className?: string }) {
  return (
    <img
      src={publicPath(src.url)}
      alt={alt}
      className={className}
    />
  )
}
