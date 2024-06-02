import { notNullish } from '../helpers/types'
import { type TextBlock, type BigBanner, type BlockButtonLink, type SmallBanners, type OutlineButtonLink, type HighlightBox, type PageMeta, type TextBoxList, type Separator, type Icons, type ButtonLink } from '../types/domain'
import { type APIResponse, type GetValues } from '../types/strapi'

export function maybeImageMapper (data?: APIResponse<'plugin::upload.file'>) {
  if (!notNullish(data)) { return }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (data.data === null) { return }
  return data.data.attributes.url
}

export function imageMapper (data: APIResponse<'plugin::upload.file'>) {
  return data.data.attributes.url
}

export function pageMapper (data: GetValues<'meta.page-meta'>, id: string): PageMeta {
  return {
    id,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    bgColor: data.BackgroundColor,
    textColor: data.TextColor
  }
}

function enrichWithLink (link: GetValues<'links.button'>, button: ButtonLink
) {
  if (link.Page !== undefined) {
    const [path, hash] = link.Page.split('#')
    button.linkPage = path
    button.linkId = hash
  } else if (link.File !== undefined) {
    button.linkFile = link.File.data.attributes.url
  } else if (link.Web !== undefined) {
    button.linkWeb = link.Web
  }
}

export function blockButtonMapper (data: GetValues<'links.block-button'>): BlockButtonLink {
  const button: BlockButtonLink = {
    linkText: data.Text,
    linkBackgroundColor: data.BackgroundColor,
    linkTextColor: data.TextColor
  }

  enrichWithLink(data.Link, button)

  return button
}

export function maybeBlockButtonMapper (data?: GetValues<'links.block-button'> | null): BlockButtonLink | undefined {
  if (!notNullish(data)) { return }
  return blockButtonMapper(data)
}

export function outlineButtonMapper (data: GetValues<'links.outline-link'>): OutlineButtonLink {
  const button: OutlineButtonLink = {
    linkText: data.Text,
    linkTextColor: data.TextColor
  }

  enrichWithLink(data.Link, button)

  return button
}

export function maybeOutlineButtonMapper (data?: GetValues<'links.outline-link'> | null): OutlineButtonLink | undefined {
  if (!notNullish(data)) { return }
  return outlineButtonMapper(data)
}

export function textBlockMapper (data: GetValues<'blocks.text-block'>): TextBlock {
  return {
    id: '',
    title: data.Title,
    text: data.Text,
    small: data.Small,
    bgColor: data.BackgroundColor,
    titleColor: data.TitleColor,
    textColor: data.TextColor,
    button: maybeBlockButtonMapper(data.Button)
  }
}

export function bigBannerMapper (data: GetValues<'blocks.big-banner'>): BigBanner {
  return {
    button: maybeOutlineButtonMapper(data.Button),
    name: data.AltName,
    imgLink: imageMapper(data.Image)
  }
}

export function smallBannersMapper (data: GetValues<'blocks.small-banners-list'>): SmallBanners {
  return data.Banners.map((banner: GetValues<'blocks.small-banner'>) => ({
    name: banner.Title,
    label: banner.Subtitle,
    logoLink: imageMapper(banner.Logo),
    bgColor: banner.BackgroundColor,
    textColor: banner.TextColor,
    button: maybeOutlineButtonMapper(banner.Button)
  }))
}

export function highlightBoxMapper (data: GetValues<'blocks.highlightbox'>): HighlightBox {
  return {
    title: data.Title,
    subTitle: data.Subtitle,
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    button: blockButtonMapper(data.Button)
  }
}

export function textBoxesMapper (data: GetValues<'blocks.text-boxes-list'>): TextBoxList {
  return {
    boxes: data.Boxes.map((textbox: GetValues<'blocks.text-box'>) => ({
      name: textbox.Title,
      text: textbox.Text,
      bgColor: textbox.BackgroundColor
    }))
  }
}

export function iconsMapper (data: GetValues<'blocks.icons-list'>): Icons {
  return {
    icons: data.Icons.map((icon: GetValues<'blocks.icon'>) => ({
      name: icon.Name,
      logoLink: imageMapper(icon.Logo),
      link: icon.URL
    }))
  }
}

export function separatorMapper (data: GetValues<'blocks.separator'>): Separator {
  return data.Text
}
