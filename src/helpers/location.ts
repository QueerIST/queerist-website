export function isOnline (place: PlaceInfo): place is OnlinePlace {
  return place.type === LocationType.Online
}

export enum Places {
  Online = 'Online',
  Discord = 'Discord',
  Instagram = 'Instagram',
  IST = 'Instituto Superior Técnico',
  LargoCamoes = 'Largo Luís de Camões'
}

enum LocationType {
  Physical,
  Online
}

interface OnlinePlace {
  name: string
  specific?: string
  link?: string
  shortVersion: string
  type: LocationType.Online
}

interface PhysicalPlace {
  specific?: string
  name: string
  address: string
  pin: string
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
  [Places.LargoCamoes]: {
    name: Places.LargoCamoes,
    address: 'Praça de Luís de Camões',
    pin: 'https://maps.app.goo.gl/jfP9sUEHK3DehjQL6',
    shortVersion: '',
    type: LocationType.Physical
  },
  [Places.Online]: {
    name: Places.Online,
    shortVersion: '',
    type: LocationType.Online
  },
  [Places.Instagram]: {
    name: 'Instagram do QueerIST',
    link: 'https://instagram.com/queer.ist',
    shortVersion: '',
    type: LocationType.Online
  },
  [Places.Discord]: {
    name: 'Servidor de Discord do QueerIST',
    link: 'https://queerist.tecnico.ulisboa.pt/projetos/discord',
    shortVersion: '',
    type: LocationType.Online
  }
}
