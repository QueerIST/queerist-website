import type { PageContextServer } from 'vike/types'

import { fetchEvent, fetchSeries, fetchEventsPage } from '../../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  const event = (await fetchEvent({ params: pageContext.routeParams })).data
  const serie = (await fetchSeries({ params: pageContext.routeParams })).data
  const eventos = (await fetchEventsPage()).data

  return { event, serie, eventos }
}

export type Data = Awaited<ReturnType<typeof data>>
