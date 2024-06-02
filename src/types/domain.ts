import { type BlocksContent } from '@strapi/blocks-react-renderer'

export interface PageMeta {
  id: string
  name: string
  description: string
  imgLink: string
  bgColor?: string
  textColor?: string
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

export interface ButtonLink {
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

export interface List {
  id?: string
}

type TextBoxes = TextBox[]

export type TextBoxList = {
  boxes: TextBoxes
} & List

export interface TextBox {
  name: string
  bgColor: string
  text: string
}

export type Separator = string | undefined

export type Happenings = Happening[]

export interface Event extends PageMeta {
  logoLink?: string
  bgColor: string
  textColor: string
  seeMoreText?: string
  happenings?: Happenings
  parent?: Hub
}

export interface Happening {
  id: string
  name: string
  imgLink: string
  date: Date | string
  enddate?: Date | string // TODO use
  place: string
  link: string
  description: string
  longDescription?: BlocksContent
}

export interface Hub extends PageMeta {
  parentPage: string
  logoLink?: string
  imgBgColor: string
  bgColor: string
  textColor: string
  seeMoreText: string
  events?: Event[]
}

export interface Icon {
  name: string
  logoLink?: string
  link?: string
}

export type Icons = { icons: Icon[] } & List
