export interface Domain {
  mainPage: MainPage
  aboutPage: AboutPage
  eventsPage: EventsPage
  projectsPage: ProjectsPage
}

export interface PageMeta {
  id?: string
  home?: boolean
  name: string
  description: string
  imgLink: string
  bgColor?: string
  textColor?: string
}

export interface MainPage extends PageMeta {
  textBlock: TextBlock
  banners: Banners
  highlightbox: Highlightbox
}

interface BaseTextBlock {
  id: string
  title: string
  text: string | string[]
  bgColor: string
  titleColor?: string
  textColor: string
  small: boolean
}

interface BaseTextBlockWithLink extends BaseTextBlock {
  linkText: string
  linkTextColor?: string
  linkBackgroundColor?: string
}

export interface LinkToPage extends BaseTextBlockWithLink {
  linkPage: string
  linkId: string
}

export interface LinkToFile extends BaseTextBlockWithLink {
  linkFile: string
}

export interface LinkToWeb extends BaseTextBlockWithLink {
  linkWeb: string
}

export type TextBlockWithLink = LinkToPage | LinkToFile | LinkToWeb

export type TextBlock = BaseTextBlock | TextBlockWithLink

export interface Banners {
  bigBanner: BigBanner
  smallBanners: SmallBanner[]
}

export interface BigBanner {
  name: string
  imgLink: string
  textColor?: string
  linkText?: string
  linkPage?: string
  linkId?: string
}

export interface SmallBanner {
  name: string
  label: string
  logoLink: string
  bgColor: string
  textColor: string
  linkText: string
  linkPage: string
  linkId: string
}

export interface Highlightbox {
  id?: string
  title: string
  subTitle: string
  bgColor: string
  textColor: string
  linkTextColor: string
  linkBgColor: string
  linkText: string
  linkWeb: string
}

export interface AboutPage extends PageMeta {
  separator?: Separator
  textBlock_1: TextBlock
  textBlock_2: TextBlock
  big_banner: BigBanner
  textboxs: Textboxs
}

export interface List {
  id?: string
}

export interface Textboxs extends List {
  boxes: TextBox[]
}

export interface TextBox {
  name: string
  bgColor: string
  text: string
}

export type Separator = string

export interface EventsPage extends PageMeta {
  events: Event[]
  highlightbox: Highlightbox
}

export interface Event {
  id: string
  name: string
  description: string
  seeMoreText?: string
  imgLink: string
  logoLink?: string
  bgColor: string
  textColor: string
  happenings?: Happening[]
}

export interface Happening {
  name: string
  imgLink: string
  date: string
  enddate?: string
  place: string
  time?: string
  link: string
  description?: string
}
export interface ProjectsPage extends PageMeta {
  subPages: SubPage[]
}

export interface SubPageMeta extends PageMeta {
  id: string
  isSubPage: boolean
  logoLink?: string
  imgBgColor: string
  bgColor: string
  textColor: string
}

export interface SubPage extends SubPageMeta {
  seeMoreText: string
  separator?: Separator
  icons?: Icon[]
  textBlock: TextBlock
  separatorEvents?: Separator
  events?: Event[]
  highlightbox?: Highlightbox
  textBlock_2?: TextBlock
}

export interface Icon {
  name: string
  logoLink?: string
  link?: string
}

export type PagesMeta = PageMeta | SubPageMeta
