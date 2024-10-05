import { pagePath } from '../helpers/links'
import { type TextBlock, type BigBanner, type BlockButtonLink, type SmallBanners, type OutlineButtonLink, type HighlightBox, type PageMeta, type TextBoxList, type Separator, type Icons, type ButtonLink, Pages } from '../types/domain'
import { type APIResponse, type GetValues } from '../types/strapi'

export function maybeImageMapper (data?: APIResponse<'plugin::upload.file'>) {
  if (!data) { return }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!data.data) { return }
  return data.data.attributes.url
}

export function imageMapper (data: APIResponse<'plugin::upload.file'>) {
  return data.data.attributes.url
}

export function pageMapper (data: GetValues<'meta.page-meta'>): PageMeta {
  const page: PageMeta = {
    id: data.Slug,
    name: data.Name,
    description: data.Description,
    imgLink: imageMapper(data.Image),
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    path: '',
    type: Pages.Root
  }

  page.path = pagePath(page)

  return page
}

function enrichWithLink (link: GetValues<'links.button'>) {
  const button: ButtonLink = {}

  if (link.Page) {
    const [path, hash] = link.Page.split('#')
    button.linkPage = path
    button.linkId = hash
  } else if (link.Web) {
    button.linkWeb = link.Web
  } else if (link.File?.data) {
    button.linkFile = link.File.data.attributes.url
  }

  return button
}

export function blockButtonMapper (data: GetValues<'links.block-button'>): BlockButtonLink {
  const button: BlockButtonLink = {
    text: data.Text,
    button: {
      linkBackgroundColor: data.BackgroundColor,
      linkTextColor: data.TextColor
    },
    link: {}
  }

  button.link = enrichWithLink(data.Link)

  return button
}

export function maybeBlockButtonMapper (data?: GetValues<'links.block-button'>): BlockButtonLink | undefined {
  if (!data) { return }
  return blockButtonMapper(data)
}

export function outlineButtonMapper (data: GetValues<'links.outline-link'>): OutlineButtonLink {
  const button: OutlineButtonLink = {
    text: data.Text,
    button: { linkTextColor: data.TextColor },
    link: {}
  }

  button.link = enrichWithLink(data.Link)

  return button
}

export function maybeOutlineButtonMapper (data?: GetValues<'links.outline-link'>): OutlineButtonLink | undefined {
  if (!data) { return }
  return outlineButtonMapper(data)
}

export function textBlockMapper (data: GetValues<'blocks.text-block'>): TextBlock {
  return {
    id: data.Slug,
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
    id: data.Slug,
    button: maybeOutlineButtonMapper(data.Button),
    name: data.AltName,
    imgLink: imageMapper(data.Image)
  }
}

export function smallBannersMapper (data: GetValues<'blocks.small-banners-list'>): SmallBanners {
  return {
    id: data.Slug,
    banners: data.Banners.map((banner: GetValues<'blocks.small-banner'>) => ({
      name: banner.Title,
      label: banner.Subtitle,
      logoLink: imageMapper(banner.Logo),
      bgColor: banner.BackgroundColor,
      textColor: banner.TextColor,
      button: maybeOutlineButtonMapper(banner.Button)
    }))
  }
}

export function highlightBoxMapper (data: GetValues<'blocks.highlightbox'>): HighlightBox {
  return {
    id: data.Slug,
    title: data.Title,
    subTitle: data.Subtitle,
    bgColor: data.BackgroundColor,
    textColor: data.TextColor,
    button: maybeBlockButtonMapper(data.Button)
  }
}

export function textBoxesMapper (data: GetValues<'blocks.text-boxes-list'>): TextBoxList {
  return {
    id: data.Slug,
    boxes: data.Boxes.map((textbox: GetValues<'blocks.text-box'>) => ({
      name: textbox.Title,
      text: textbox.Text,
      bgColor: textbox.BackgroundColor
    }))
  }
}

export function iconsMapper (data: GetValues<'blocks.icons-list'>): Icons {
  return {
    id: data.Slug,
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
