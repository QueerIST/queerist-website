import { type TextBlock, type BigBanner, type BlockButtonLink, type SmallBanners, type OutlineButtonLink, type HighlightBox, type PageMeta, type TextBoxList, type Separator } from '../types/domain'
import { type APIResponse, type GetValues } from '../types/strapi'

export function imageMapper (data: APIResponse<'plugin::upload.file'>) {
  return data.data.attributes.url
}

export function pageMapper (data: GetValues<'meta.page-meta'>): PageMeta {
  return {
    home: data.Home,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    bgColor: data.BackgroundColor,
    textColor: data.TextColor
  }
}

export function blockButtonMapper (data: GetValues<'links.block-button'>): BlockButtonLink {
  const button: BlockButtonLink = {
    linkText: data.Text,
    linkBackgroundColor: data.BackgroundColor,
    linkTextColor: data.TextColor
  }

  if (data.Link.Page !== undefined) {
    button.linkPage = ''
  } else if (data.Link.File !== undefined) {
    button.linkFile = ''
  } else if (data.Link.Web !== undefined) {
    button.linkWeb = ''
  }

  return button
}

export function maybeBlockButtonMapper (data?: GetValues<'links.block-button'> | null): BlockButtonLink | undefined {
  if (data === undefined || data === null) { return }
  return blockButtonMapper(data)
}

export function outlineButtonMapper (data: GetValues<'links.outline-link'>): OutlineButtonLink {
  const button: OutlineButtonLink = {
    linkText: data.Text,
    linkTextColor: data.TextColor
  }

  if (data.Link.Page !== undefined) {
    button.linkPage = ''
  } else if (data.Link.File !== undefined) {
    button.linkFile = ''
  } else if (data.Link.Web !== undefined) {
    button.linkWeb = ''
  }

  return button
}

export function maybeOutlineButtonMapper (data?: GetValues<'links.outline-link'> | null): OutlineButtonLink | undefined {
  if (data === undefined || data === null) { return }
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

export function separatorMapper (data: GetValues<'blocks.separator'>): Separator {
  return data.Text
}
