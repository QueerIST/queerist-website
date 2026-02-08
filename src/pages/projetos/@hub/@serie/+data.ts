import { redirect, render } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchHub, fetchProjectsPage, fetchSeries } from '../../../../api/loaders'
import { slug } from '../../../../helpers/types'

export async function data (pageContext: PageContextServer) {
  let serie, hub

  try {
    serie = (await fetchSeries({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhuma série de eventos '${pageContext.routeParams.serie}'... 😳`)
  }

  try {
    hub = (await fetchHub({ params: pageContext.routeParams })).data
  } catch (error) {
    console.warn(`Oops. Não temos nenhum hub '${pageContext.routeParams.hub}' 😳 Redirecionando...`)
  }

  const s = pageContext.urlParsed.searchOriginal ?? ''

  const rawSerie = serie.data
  if (!rawSerie.Hub) {
    throw redirect(`/eventos/${slug(rawSerie)}${s}`, 301)
  }

  const rawSerieHub = rawSerie.Hub
  if (!hub || hub.data.Slug !== rawSerieHub.Slug) {
    throw redirect(`/projetos/${rawSerieHub.Slug}/${slug(rawSerie)}${s}`, 301)
  }

  const projectos = (await fetchProjectsPage()).data

  return { serie, hub, projectos }
}

export type Data = Awaited<ReturnType<typeof data>>
