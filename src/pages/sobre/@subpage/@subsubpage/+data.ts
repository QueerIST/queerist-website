import { render, redirect } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchSubPage, fetchAboutPage } from '../../../../api/loaders'
import { slug } from '../../../../helpers/types'

export async function data (pageContext: PageContextServer) {
  let subPage, page

  try {
    subPage = (await fetchSubPage({ params: { subpage: pageContext.routeParams.subsubpage } })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhuma página '${pageContext.routeParams.subsubpage}'... 😳`)
  }

  try {
    page = (await fetchSubPage({ params: pageContext.routeParams })).data
  } catch (error) {
    console.warn(`Oops. Não temos nenhum grupo de páginas '${pageContext.routeParams.subpage}' 😳 Redirecionando...`)
  }

  const s = pageContext.urlParsed.searchOriginal ?? ''

  const rawSubPage = subPage.data
  if (!rawSubPage.Parent) {
    throw redirect(`/sobre/${slug(rawSubPage)}${s}`, 301)
  }

  const rawSubPagePage = rawSubPage.Parent
  if (!page || page.data.Slug !== rawSubPagePage.Slug) {
    throw redirect(`/sobre/${rawSubPagePage.Slug}/${slug(rawSubPage)}${s}`, 301)
  }

  const sobre = (await fetchAboutPage()).data

  return { subPage, page, sobre }
}

export type Data = Awaited<ReturnType<typeof data>>
