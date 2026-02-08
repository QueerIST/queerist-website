import { redirect, render } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchEventsPage, fetchSeries } from '../../../api/loaders'
import { slug } from '../../../helpers/types'

export async function data (pageContext: PageContextServer) {
  let serie

  try {
    serie = (await fetchSeries({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhuma série de eventos '${pageContext.routeParams.serie}'... 😳`)
  }

  const s = pageContext.urlParsed.searchOriginal ?? ''

  const rawSerie = serie.data
  if (rawSerie.Hub) {
    const rawSerieHub = rawSerie.Hub
    throw redirect(`/projetos/${rawSerieHub.Slug}/${slug(rawSerie)}${s}`, 301)
  }

  const eventos = (await fetchEventsPage()).data

  return { serie, eventos }
}

export type Data = Awaited<ReturnType<typeof data>>
