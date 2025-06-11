import { type ButtonLink } from '../types/domain'

export function isOnline (place: PlaceInfo): place is OnlinePlace {
  return place.type === LocationType.Online
}

export enum Places {
  Online = 'Online',
  Discord = 'Discord',
  Instagram = 'Instagram',
  Sala = 'Sala do QueerIST',
  IST = 'Instituto Superior Técnico',
  Taguspark = 'Instituto Superior Técnico - Taguspark',
  LargoCamoes = 'Largo Luís de Camões',
  Lisboa = 'Lisboa'
}

enum LocationType {
  Physical,
  Online
}

interface OnlinePlace {
  name: string
  specific?: string
  link: ButtonLink
  shortVersion: string
  type: LocationType.Online
}

interface PhysicalPlace {
  specific?: string
  name: string
  address: string
  pin: string
  link?: ButtonLink
  shortVersion: string
  type: LocationType.Physical
}

export type PlaceInfo = OnlinePlace | PhysicalPlace

export const PLACES_MAP: Record<Places, PlaceInfo> = {
  [Places.IST]: {
    name: Places.IST,
    address: 'Avenida Rovisco Pais 1',
    pin: 'https://maps.app.goo.gl/mpvynRuatqFKoXyt7',
    shortVersion: '',
    type: LocationType.Physical
  },
  [Places.Taguspark]: {
    name: Places.Taguspark,
    address: 'Av. Prof. Dr. Cavaco Silva',
    pin: 'https://maps.app.goo.gl/YUWRV9uWGA1Uw7AW7',
    shortVersion: '',
    type: LocationType.Physical
  },
  [Places.Sala]: {
    name: Places.Sala,
    address: 'IST, Avenida Rovisco Pais 1',
    pin: 'https://maps.app.goo.gl/mpvynRuatqFKoXyt7',
    shortVersion: '',
    type: LocationType.Physical,
    link: { linkPage: '/sobre/sala' }
  },
  [Places.LargoCamoes]: {
    name: Places.LargoCamoes,
    address: 'Praça de Luís de Camões',
    pin: 'https://maps.app.goo.gl/jfP9sUEHK3DehjQL6',
    shortVersion: '',
    type: LocationType.Physical
  },
  [Places.Lisboa]: {
    name: Places.Lisboa,
    address: 'Lisboa',
    pin: 'https://maps.app.goo.gl/QH9JEZ52x7FCe8qP8',
    shortVersion: '',
    type: LocationType.Physical
  },
  [Places.Online]: {
    name: Places.Online,
    link: {},
    shortVersion: '',
    type: LocationType.Online
  },
  [Places.Instagram]: {
    name: 'Instagram do QueerIST',
    link: { linkWeb: 'https://instagram.com/queer.ist' },
    shortVersion: '',
    type: LocationType.Online
  },
  [Places.Discord]: {
    name: 'Servidor de Discord do QueerIST',
    link: { linkPage: '/projetos/discord', linkId: 'link' },
    shortVersion: '',
    type: LocationType.Online
  }
}
