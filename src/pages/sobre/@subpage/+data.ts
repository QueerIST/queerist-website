import { redirect, render } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchAboutPage, fetchSubPage } from '../../../api/loaders'

export async function data (pageContext: PageContextServer) {
  let subPage

  try {
    subPage = (await fetchSubPage({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhuma página '${pageContext.routeParams.subpage}'... 😳`)
  }

  const s = pageContext.urlParsed.searchOriginal ?? ''

  const rawSubPage = subPage.data.attributes
  if (rawSubPage.Parent?.data) {
    const rawSubPagePage = rawSubPage.Parent.data.attributes
    throw redirect(`/sobre/${rawSubPagePage.Slug}/${rawSubPage.Slug}${s}`, 301)
  }

  const sobre = (await fetchAboutPage()).data

  return { subPage, sobre }
}

export type Data = Awaited<ReturnType<typeof data>>
