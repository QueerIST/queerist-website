import { type PropsWithChildren } from 'react'

import { Helmet, HelmetData } from 'react-helmet-async'
import { JsonLd } from 'react-schemaorg'
import { type BreadcrumbList } from 'schema-dts'

import { usePage } from '../api/use'
import { fullPath, publicPath } from '../helpers/links'
import { type PageMeta } from '../types/domain'

const buildBreadcrumbs = (page?: PageMeta): PageMeta[] => {
  if (!page) { return [] }
  return buildBreadcrumbs(page.parentPage).concat(page)
}

export const Page = ({ data, children, home }: PropsWithChildren<{ data: PageMeta, home?: boolean }>) => {
  const [, setPage] = usePage()
  const helmetData = new HelmetData({})
  setPage(data)
  return (
    <div>
      <Helmet
        defaultTitle='QueerIST – Incluir, informar, dialogar'
        titleTemplate='%s – QueerIST'
        helmetData={helmetData}
        defer={false}
      >
        {/* HTML Meta Tags */}
        {!(home ?? false) && <title>{data.name}</title>}
        <meta name='description' content={data.description} />
        <link
          rel='canonical'
          href={fullPath(data)}
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={data.name} />
        <meta itemProp='description' content={data.description} />
        <meta itemProp='image' content={publicPath(data.img.url)} />

        {/* Facebook Meta Tags */}
        <meta
          property='og:url'
          content={fullPath(data)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={data.name} />
        <meta property='og:description' content={data.description} />
        <meta property='og:image' content={publicPath(data.img.url)} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:site' content='@queerist' />
        <meta name='twitter:card' content='summary_large_image' />
        {/* <meta name="twitter:card" content="summary" /> */}
      </Helmet>
      <JsonLd<BreadcrumbList>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: buildBreadcrumbs(data).map((page: PageMeta, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: page.name,
            item: fullPath(page)
          }))
        }} />
      {children}
    </div>
  )
}
