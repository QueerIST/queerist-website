import type { PageContextServer } from 'vike/types'

import { fetchHub, fetchProjectsPage } from '../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  const hub = (await fetchHub({ params: pageContext.routeParams })).data
  const projectos = (await fetchProjectsPage()).data

  return { hub, projectos }
}

export type Data = Awaited<ReturnType<typeof data>>
