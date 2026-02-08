import { render, redirect } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchEvent, fetchSeries, fetchEventsPage } from '../../../../api/loaders'
import { slug } from '../../../../helpers/types'

export async function data (pageContext: PageContextServer) {
  let event, serie

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

  const s = pageContext.urlParsed.searchOriginal ?? ''
  const rawEvent = event.data

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rawEventSerie = rawEvent.Series!
  if (rawEventSerie.Hub) {
    const rawEventSerieHub = rawEventSerie.Hub
    throw redirect(`/projetos/${rawEventSerieHub.Slug}/${rawEventSerie.Slug}/${slug(rawEvent)}${s}`, 301)
  }

  if (!serie || serie.data.Slug !== rawEventSerie.Slug) {
    throw redirect(`/eventos/${rawEventSerie.Slug}/${slug(rawEvent)}${s}`, 301)
  }

  const eventos = (await fetchEventsPage()).data

  return { event, serie, eventos }
}

export type Data = Awaited<ReturnType<typeof data>>
