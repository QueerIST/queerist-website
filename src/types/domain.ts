import { type BlocksContent } from '@strapi/blocks-react-renderer'

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
  bigBanner: BigBanner
  smallBanners: SmallBanners
  highlightbox: HighlightBox
}

export interface TextBlock {
  id: string
  title: string
  text: BlocksContent
  bgColor: string
  titleColor?: string
  textColor: string
  small: boolean
  button?: BlockButtonLink
}

interface BlockButton {
  linkText: string
  linkTextColor?: string
  linkBackgroundColor?: string
}

interface OutlineButton {
  linkText: string
  linkTextColor: string
}

interface ButtonLink {
  linkPage?: string
  linkId?: string
  linkFile?: string
  linkWeb?: string
}

export type BlockButtonLink = BlockButton & ButtonLink

export type OutlineButtonLink = OutlineButton & ButtonLink

export interface BigBanner {
  name: string
  imgLink: string
  button?: OutlineButtonLink
}

export type SmallBanners = SmallBanner[]

export interface SmallBanner {
  name: string
  label: string
  logoLink: string
  bgColor: string
  textColor: string
  button?: OutlineButtonLink
}

export interface HighlightBox {
  id?: string
  title: string
  subTitle: string
  bgColor: string
  textColor: string
  button: BlockButtonLink
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
  highlightbox: HighlightBox
}

export interface EventMeta {
  n: number
  id: string
  name: string
  description: string
  imgLink: string
  logoLink?: string
  bgColor: string
  textColor: string
}

export interface EventWithHappenings extends EventMeta {
  seeMoreText: string
  happenings: Happening[]
}

export type Event = EventMeta | EventWithHappenings

export type Tile = Event | SubPage

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
  parentPage: string
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
  highlightbox?: HighlightBox
  textBlock_2?: TextBlock
}

export interface Icon {
  name: string
  logoLink?: string
  link?: string
}

export type PagesMeta = PageMeta | SubPageMeta
