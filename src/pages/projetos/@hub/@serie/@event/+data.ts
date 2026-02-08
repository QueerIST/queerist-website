import { render, redirect } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchEvent, fetchHub, fetchProjectsPage, fetchSeries } from '../../../../../api/loaders'
import { slug } from '../../../../../helpers/types'

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

  const s = pageContext.urlParsed.searchOriginal ?? ''

  const rawEvent = event.data

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rawEventSerie = rawEvent.Series!
  if (!rawEventSerie.Hub) {
    throw redirect(`/eventos/${rawEventSerie.Slug}/${slug(rawEvent)}${s}`, 301)
  }

  const rawEventSerieHub = rawEventSerie.Hub
  if ((!serie || serie.data.Slug !== rawEventSerie.Slug) || (!hub || hub.data.Slug !== rawEventSerieHub.Slug)) {
    throw redirect(`/projetos/${rawEventSerieHub.Slug}/${rawEventSerie.Slug}/${slug(rawEvent)}${s}`, 301)
  }

  const projectos = (await fetchProjectsPage()).data

  return { event, serie, hub, projectos }
}

export type Data = Awaited<ReturnType<typeof data>>
