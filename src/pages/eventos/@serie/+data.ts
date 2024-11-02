import type { PageContextServer } from 'vike/types'

import { fetchEventsPage, fetchSeries } from '../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  const serie = (await fetchSeries({ params: pageContext.routeParams })).data
  const eventos = (await fetchEventsPage()).data

  return { serie, eventos }
}

export type Data = Awaited<ReturnType<typeof data>>
