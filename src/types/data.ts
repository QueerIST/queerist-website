export interface Data {
  main_page: DMainPage
  about_page: DAboutPage
  events_page: DEventsPage
  projects_page: DProjectsPage
}

export interface DPageMeta {
  id?: string
  home?: boolean
  name: string
  description: string
  img_link: string
  bg_color?: string
  text_color?: string
}

export interface DMainPage extends DPageMeta {
  text_block: DTextBlock
  banners: DBanners
  highlightbox: DHighlightbox
}

export interface DBaseTextBlock {
  id: string
  title: string
  text: string | string[]
  bg_color: string
  title_color?: string
  text_color: string
}

interface DBaseTextBlockWithLink extends DBaseTextBlock {
  link_text: string
  link_bg_color?: string
  link_text_color?: string
}

export interface DLinkToPage extends DBaseTextBlockWithLink {
  link_page: string
  link_id: string
}

export interface DLinkToFile extends DBaseTextBlockWithLink {
  link_file: string
}

export interface DLinkToWeb extends DBaseTextBlockWithLink {
  link_web: string
}

export type DTextBlockWithLink = DLinkToPage | DLinkToFile | DLinkToWeb

export type DTextBlock = DBaseTextBlock | DTextBlockWithLink

export interface DBanners {
  big_banner: DBigBanner
  small_banners: DSmallBanner[]
}

export interface DBigBanner {
  name: string
  img_link: string
  text_color?: string
  link_text?: string
  link_page?: string
  link_id?: string
}

export interface DSmallBanner {
  name: string
  label: string
  logo_link: string
  bg_color: string
  text_color: string
  link_text: string
  link_page: string
  link_id: string
}

export interface DHighlightbox {
  id?: string
  title: string
  sub_title: string
  bg_color: string
  text_color: string
  link_text_color: string
  link_bg_color: string
  link_text: string
  link_web: string
}

export interface DAboutPage extends DPageMeta {
  separator?: DSeparator
  text_block_1: DTextBlock
  text_block_2: DTextBlock
  big_banner: DBigBanner
  textboxs: DTextboxs
}

export interface DList {
  id: string
}

export interface DTextboxs extends DList {
  boxes: DTextBox[]
}

export interface DTextBox {
  name: string
  bg_color: string
  text: string
}

export type DSeparator = string

export interface DEventsPage extends DPageMeta {
  events: DEvent[]
  highlightbox: DHighlightbox
}

export interface DEvent {
  id: string
  name: string
  description: string
  see_more_text?: string
  img_link: string
  logo_link?: string
  bg_color: string
  text_color: string
  happenings?: DHappening[]
}

export interface DHappening {
  name: string
  img_link: string
  date: string
  enddate?: string
  place: string
  time?: string
  link: string
  description?: string
}

export interface DProjectsPage extends DPageMeta {
  sub_pages: DSubPage[]
}

export interface DSubPageMeta extends DPageMeta {
  id: string
  see_more_text: string
  logo_link?: string
  img_bg_color: string
  bg_color: string
  text_color: string
}

export interface DSubPage extends DSubPageMeta {
  separator?: DSeparator
  icons?: DIcons
  text_block: DTextBlock
  separator_events?: DSeparator
  events?: DEvent[]
  highlightbox?: DHighlightbox
  text_block_2?: DTextBlock
}

export type DPage = DPageMeta | DSubPageMeta

export type DIcons = DIcon[]

export interface DIcon {
  name: string
  logo_link?: string
  link?: string
}
