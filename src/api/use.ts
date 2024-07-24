/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { type APIResponseSingle } from '../types/strapi'

export function useHubData () {
  const projectos = (useRouteLoaderData('projetos') as AxiosResponse< APIResponseSingle<'api::project-page.project-page'>> | undefined)

  const hub = (useRouteLoaderData('p:hub') as AxiosResponse< APIResponseSingle<'api::hub.hub'>> | undefined)

  if (projectos !== undefined && hub !== undefined) {
    return { projectos: projectos.data, hub: hub.data }
  }
  return { hub: undefined, projectos: undefined }
}

export function useSeriesData () {
  const { hub, projectos } = useHubData()

  const pserie = (useRouteLoaderData('p:serie') as AxiosResponse< APIResponseSingle<'api::serie.serie'>> | undefined)

  const eventos = (useRouteLoaderData('eventos') as AxiosResponse< APIResponseSingle<'api::event-page.event-page'>> | undefined)

  const eserie = (useRouteLoaderData('e:serie') as AxiosResponse< APIResponseSingle<'api::serie.serie'>> | undefined)

  if (projectos !== undefined) {
    return { projectos, hub, serie: pserie!.data, eventos: undefined }
  }
  return { eventos: eventos!.data, serie: eserie!.data, projectos: undefined, hub: undefined }
}

export function useEventData () {
  const { projectos, eventos, hub, serie } = useSeriesData()

  const pevent = (useRouteLoaderData('p:event') as AxiosResponse< APIResponseSingle<'api::event.event'>> | undefined)

  const eevent = (useRouteLoaderData('e:event') as AxiosResponse< APIResponseSingle<'api::event.event'>> | undefined)

  if (projectos !== undefined) {
    return { projectos, hub, serie, event: pevent!.data, eventos: undefined }
  }
  return { eventos, serie, event: eevent!.data, projectos: undefined, hub: undefined }
}
