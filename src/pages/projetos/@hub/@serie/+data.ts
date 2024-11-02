import type { PageContextServer } from 'vike/types'

import { fetchHub, fetchProjectsPage, fetchSeries } from '../../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  const serie = (await fetchSeries({ params: pageContext.routeParams })).data
  const hub = (await fetchHub({ params: pageContext.routeParams })).data
  const projectos = (await fetchProjectsPage()).data

  return { serie, hub, projectos }
}

export type Data = Awaited<ReturnType<typeof data>>
