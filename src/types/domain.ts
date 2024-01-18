export interface Domain {
  mainPage: MainPage
  aboutPage: AboutPage
  eventsPage: EventsPage
  projectsPage: ProjectsPage
}

export interface MainPage {
  home: boolean
  name: string
  description: string
  imgLink: string
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

export interface AboutPage {
  id: string
  name: string
  description: string
  imgLink: string
  bgColor: string
  separator: string
  textBlock_1: TextBlock
  textBlock_2: TextBlock
  big_banner: BigBanner
  textboxs: Textboxs
}

export interface Textboxs {
  id: string
  boxes: Box[]
}

export interface Box {
  name: string
  bgColor: string
  text: string
}

export interface EventsPage {
  name: string
  description: string
  imgLink: string
  bgColor: string
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
export interface ProjectsPage {
  id: string
  name: string
  description: string
  imgLink: string
  bgColor: string
  subPages: SubPage[]
}

export interface SubPage {
  id: string
  name: string
  seeMoreText: string
  description: string
  imgLink: string
  logoLink?: string
  imgBgColor: string
  bgColor: string
  textColor: string
  textBlock: TextBlock
  separatorEvents?: string
  events?: Event[]
  separator?: string
  icons?: Icon[]
  highlightbox?: Highlightbox
  textBlock_2?: TextBlock
}

export interface Icon {
  name: string
  logoLink?: string
  link?: string
}
