import { type MouseEventHandler } from 'react'

import { type BlocksContent } from '@strapi/blocks-react-renderer'

import { type GetValues } from './strapi'
import { type PlaceInfo } from '../helpers/location'

export enum Pages {
  Root,
  Hub,
  Series,
  Event
}

export interface PageMeta {
  id: string
  name: string
  description: string
  img: GetValues<'plugin::upload.file'>
  bgColor?: string
  textColor?: string
  parentPage?: PageMeta
  path: string
  type: Pages
}

export interface TextBlock {
  id?: string
  title: string
  text: BlocksContent
  bgColor: string
  titleColor?: string
  textColor: string
  small: boolean
  button?: BlockButtonLink
}

export interface BlockButtonStyle {
  linkTextColor?: string
  linkBackgroundColor?: string
}

export interface OutlineButtonStyle {
  linkTextColor: string
}

export interface ButtonLink {
  linkPage?: string
  linkId?: string
  linkFile?: string
  linkWeb?: string
  onClick?: MouseEventHandler
}

export type BlockButtonLink = { button: BlockButtonStyle } & { link: ButtonLink } & { text: string }

export type OutlineButtonLink = { button: OutlineButtonStyle } & { link: ButtonLink } & { text: string }

export interface BigBanner {
  id?: string
  name: string
  img: GetValues<'plugin::upload.file'>
  button?: OutlineButtonLink
}

export type SmallBanners = { banners: SmallBanner[] } & List

export interface SmallBanner {
  name: string
  label: string
  logo: GetValues<'plugin::upload.file'>
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
  button?: BlockButtonLink
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

export type Events = Event[]

export interface Series extends PageMeta {
  logo?: GetValues<'plugin::upload.file'>
  bgColor: string
  textColor: string
  seeMoreText?: string
  events?: Events
  parentPage: PageMeta
  type: Pages.Series
}

export interface Event extends PageMeta {
  date: Date
  enddate?: Date
  location: PlaceInfo
  link?: string
  longDescription?: BlocksContent
  parentPage: Series
  type: Pages.Event
}

export interface Hub extends PageMeta {
  logo?: GetValues<'plugin::upload.file'>
  imgBgColor: string
  bgColor: string
  textColor: string
  seeMoreText: string
  events?: Series[]
  parentPage: PageMeta
  type: Pages.Hub
}

export interface Icon {
  name: string
  logo?: GetValues<'plugin::upload.file'>
  link?: string
}

export type Icons = { icons: Icon[] } & List
