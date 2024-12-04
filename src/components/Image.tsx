import { SizeTypes } from '../helpers/image'
import { publicPath } from '../helpers/links'
import { type GetValues } from '../types/strapi'

import './textblock.css'

interface Format {
  ext?: string
  hash: string
  height?: number
  mime: string
  name: string
  size: number
  sizeInBytes?: number
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
}

type FixedSize = { type: SizeTypes.Fixed } & ({
  height: number
  width?: undefined
} | {
  height?: undefined
  width: number
})

interface ProportionalSize {
  maxHeight?: number
  maxWidth?: number
  minHeight?: number
  minWidth?: number
  type: SizeTypes.Limit
}

enum SizeCoordIndex {
  ViewportWidth = 0,
  ImageWidth = 1
}

type Size = { proportion: number } & ({ type: SizeTypes.Proportion } | FixedSize | ProportionalSize)

interface Sizes {
  mobile: Size
  desktop: Size
}

const sizeNames: Types[] = [Types.Thumbnail, Types.Small, Types.Medium, Types.Large]

export function Image ({ src, alt, className, sizes }: { src: GetValues<'plugin::upload.file'>, alt?: string, className?: string, sizes?: Sizes }) {
  const formats = src.formats as Formats | undefined
  const sizeList: Array<Format | undefined> = sizeNames.map((type) => formats?.[type])
  sizeList.push(src)

  const widths = sizeList.map((f) => f?.width).filter((s) => s !== undefined)
  const ratio = src.width && src.height ? (src.width / src.height) : 1

  let srcSet, srcSizes
  if (sizes) {
    const mobile = sizes.mobile
    const mobileSizes = getSizesOptions(mobile, ratio)
    const mobileW = widths.map((w) => ([w / mobile.proportion, w])).filter(([vw, _]) => (vw < 600))
    const mob = createSizes(mobileW, mobileSizes, [599, 599 * mobile.proportion])
    const desktop = sizes.desktop
    const desktopSizes = getSizesOptions(desktop, ratio)
    const desktopW = widths.map((w) => ([w / desktop.proportion, w])).filter(([vw, _]) => (vw >= 600))
    const des = createSizes(desktopW, desktopSizes, [600, 600 * desktop.proportion])

    const joinSizes = [...mob, ...des].map(([v, s]) => ([Math.round(v), Math.round(s)]))
    joinSizes.sort(([a, _1], [b, _2]) => (a - b)) // ASC

    srcSizes = joinSizes.map(([vw, s]) => `(max-width: ${vw}px) ${s}px`)
    srcSizes.push(`${joinSizes[joinSizes.length - 1][SizeCoordIndex.ImageWidth]}px`)
    srcSizes = srcSizes.join(', ')

    srcSet = sizeList.map((f) => f && `${publicPath(f.url)} ${f.width}w`).filter((s) => s !== undefined)
    srcSet = srcSet.join(', ')
  }

  return (
    <img
      src={publicPath(src.url)}
      srcSet={srcSet}
      sizes={srcSizes}
      alt={alt ?? src.alternativeText}
      className={className}
    />
  )
}

function getSizesOptions (size: Size, ratio: number) {
  const p = size.proportion
  if (size.type === SizeTypes.Fixed) {
    const f = size.width ?? size.height * ratio
    return { type: size.type, fixed: [f / p, f] }
  } else if (size.type === SizeTypes.Limit) {
    let a = size.maxWidth ?? (size.maxHeight && size.maxHeight * ratio)
    let i = size.minWidth ?? (size.minHeight && size.minHeight * ratio)

    if (a && i && a < i) {
      if (ratio > 1) {
        a = i
      } else {
        i = a
      }
    }

    return { type: size.type, max: a ? [a / p, a] : undefined, min: i ? [i / p, i] : undefined }
  }
  return { type: size.type }
}

function createSizes (widths: number[][], options: ReturnType<typeof getSizesOptions>, edge: number[]): number[][] {
  if (options.type === SizeTypes.Fixed) {
    return [options.fixed]
  } else {
    if (options.type === SizeTypes.Proportion) {
      widths.push(edge)
      return widths
    } else {
      const prop = []

      const max = options.max
      if (max) {
        widths.sort(([a, _1], [b, _2]) => (a - b)) // ASC
        const index = widths.findIndex(([a, _2]) => a > max[SizeCoordIndex.ViewportWidth])
        widths = widths.slice(0, index)
        prop.push(max)
        if (edge[SizeCoordIndex.ImageWidth] > max[SizeCoordIndex.ImageWidth]) {
          edge[SizeCoordIndex.ImageWidth] = max[SizeCoordIndex.ImageWidth]
        }
      }

      const min = options.min
      if (min) {
        widths.sort(([a, _1], [b, _2]) => (b - a)) // DESC
        const index = widths.findIndex(([a, _2]) => a < min[SizeCoordIndex.ViewportWidth])
        widths = widths.slice(0, index)
        prop.push(min)
        if (edge[SizeCoordIndex.ImageWidth] < min[SizeCoordIndex.ImageWidth]) {
          edge[SizeCoordIndex.ImageWidth] = min[SizeCoordIndex.ImageWidth]
        }
      }

      prop.push(edge)
      prop.push(...widths)
      return prop
    }
  }
}
