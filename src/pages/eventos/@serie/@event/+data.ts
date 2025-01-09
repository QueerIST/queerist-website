import { render, redirect } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchEvent, fetchSeries, fetchEventsPage } from '../../../../api/loaders'

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

  const rawEvent = event.data.attributes

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rawEventSerie = rawEvent.Series!.data.attributes
  if (rawEventSerie.Hub?.data) {
    const rawEventSerieHub = rawEventSerie.Hub.data.attributes
    throw redirect(`/projetos/${rawEventSerieHub.Slug}/${rawEventSerie.Slug}/${rawEvent.Slug}`, 301)
  }

  if (!serie || serie.data.attributes.Slug !== rawEventSerie.Slug) {
    throw redirect(`/eventos/${rawEventSerie.Slug}/${rawEvent.Slug}`, 301)
  }

  const eventos = (await fetchEventsPage()).data

  return { event, serie, eventos }
}

export type Data = Awaited<ReturnType<typeof data>>
