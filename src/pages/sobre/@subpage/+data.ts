import { redirect, render } from 'vike/abort'
import type { PageContextServer } from 'vike/types'

import { fetchAboutPage, fetchSubPage } from '../../../api/loaders'
import { slug } from '../../../helpers/types'

export async function data (pageContext: PageContextServer) {
  let subPage

  try {
    subPage = (await fetchSubPage({ params: pageContext.routeParams })).data
  } catch (error) {
    throw render(404, `Oops. Não temos nenhuma página '${pageContext.routeParams.subpage}'... 😳`)
  }

  const s = pageContext.urlParsed.searchOriginal ?? ''

  const rawSubPage = subPage.data
  if (rawSubPage.Parent) {
    const rawSubPagePage = rawSubPage.Parent
    throw redirect(`/sobre/${rawSubPagePage.Slug}/${slug(rawSubPage)}${s}`, 301)
  }

  const sobre = (await fetchAboutPage()).data

  return { subPage, sobre }
}

export type Data = Awaited<ReturnType<typeof data>>
