import { render, redirect } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchEvent, fetchHub, fetchProjectsPage, fetchSeries } from '../../../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  let event, serie, hub

  try {
    event = (await fetchEvent({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhum evento '${pageContext.routeParams.event}'... 😳`)
  }

  try {
    serie = (await fetchSeries({ params: pageContext.routeParams })).data
  } catch (error) {
    console.warn(`Oops. Não temos nenhuma série de eventos '${pageContext.routeParams.serie}' 😳 Redirecionando...`)
  }

  try {
    hub = (await fetchHub({ params: pageContext.routeParams })).data
  } catch (error) {
    console.warn(`Oops. Não temos nenhum hub '${pageContext.routeParams.hub}' 😳 Redirecionando...`)
  }

  const rawEvent = event.data.attributes
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rawEventSerie = rawEvent.Series!.data.attributes
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const rawEventSerieHub = rawEventSerie.Hub?.data?.attributes

  if (!rawEventSerieHub) {
    throw redirect(`/eventos/${rawEventSerie.Slug}/${rawEvent.Slug}`, 301)
  }

  if ((!serie || serie.data.attributes.Slug !== rawEventSerie.Slug) || (!hub || hub.data.attributes.Slug !== rawEventSerieHub.Slug)) {
    throw redirect(`/projetos/${rawEventSerieHub.Slug}/${rawEventSerie.Slug}/${rawEvent.Slug}`, 301)
  }

  const projectos = (await fetchProjectsPage()).data

  return { event, serie, hub, projectos }
}

export type Data = Awaited<ReturnType<typeof data>>
