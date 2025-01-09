import { render } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchHub, fetchProjectsPage } from '../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  let hub

  try {
    hub = (await fetchHub({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhum hub '${pageContext.routeParams.hub}'... 😳`)
  }

  const projectos = (await fetchProjectsPage()).data

  return { hub, projectos }
}

export type Data = Awaited<ReturnType<typeof data>>
