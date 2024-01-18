export interface Data {
  main_page: DMainPage
  about_page: DAboutPage
  events_page: DEventsPage
  projects_page: DProjectsPage
}

export interface DMainPage {
  home: boolean
  name: string
  description: string
  img_link: string
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

export interface DAboutPage {
  id: string
  name: string
  description: string
  img_link: string
  bg_color: string
  separator?: DSeparator
  text_block_1: DTextBlock
  text_block_2: DTextBlock
  big_banner: DBigBanner
  textboxs: DTextboxs
}

export interface DTextboxs {
  id: string
  boxes: DBox[]
}

export interface DBox {
  name: string
  bg_color: string
  text: string
}

export type DSeparator = string

export interface DEventsPage {
  name: string
  description: string
  img_link: string
  bg_color: string
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

export interface DProjectsPage {
  id: string
  name: string
  description: string
  img_link: string
  bg_color: string
  sub_pages: DSubPage[]
}

export interface DSubPage {
  id: string
  name: string
  see_more_text: string
  description: string
  img_link: string
  logo_link?: string
  img_bg_color: string
  bg_color: string
  text_color: string
  text_block: DTextBlock
  separator_events?: string
  events?: DEvent[]
  separator?: DSeparator
  icons?: DIcon[]
  highlightbox?: DHighlightbox
  text_block_2?: DTextBlock
}

export interface DIcon {
  name: string
  logo_link?: string
  link?: string
}
