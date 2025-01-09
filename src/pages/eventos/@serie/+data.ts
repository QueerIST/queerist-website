import { redirect, render } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchEventsPage, fetchSeries } from '../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  let serie

  try {
    serie = (await fetchSeries({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhuma série de eventos '${pageContext.routeParams.serie}'... 😳`)
  }

  const rawSerie = serie.data.attributes
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const rawSerieHub = rawSerie.Hub?.data?.attributes

  if (rawSerieHub) {
    throw redirect(`/projetos/${rawSerieHub.Slug}/${rawSerie.Slug}`, 301)
  }

  const eventos = (await fetchEventsPage()).data

  return { serie, eventos }
}

export type Data = Awaited<ReturnType<typeof data>>
