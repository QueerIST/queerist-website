import { type PropsWithChildren } from 'react'

import { JsonLd } from 'react-schemaorg'
import { type BreadcrumbList } from 'schema-dts'
import { Config } from 'vike-react/Config'
import { Head } from 'vike-react/Head'

import { usePage } from '../api/use'
import { getNonWhiteColor } from '../helpers/colors'
import { fullPath, publicPath } from '../helpers/links'
import { type PageMeta } from '../types/domain'

const buildBreadcrumbs = (page?: PageMeta): PageMeta[] => {
  if (!page) { return [] }
  return buildBreadcrumbs(page.parentPage).concat(page)
}

export const Page = ({ data, children, home }: PropsWithChildren<{ data: PageMeta, home?: boolean }>) => {
  const [, setPage] = usePage()
  setPage(data)

  const title = home ? 'QueerIST – Incluir, informar, dialogar' : `${data.name} – QueerIST`
  const linkColor = getNonWhiteColor(data)
  return (
    <div>
      <Config
        favicon='/favicon.ico'
        title={title}
        description={data.description}
        image={publicPath(data.img.url)}
      />
      <Head>
        <meta itemProp='name' content={data.name} />
        <meta itemProp='description' content={data.description} />
        <meta itemProp='image' content={publicPath(data.img.url)} />
        <meta property='og:url' content={fullPath(data)} />
        <link rel='canonical' href={fullPath(data)} />
        <meta property='og:type' content='website' />
        <meta name='twitter:site' content='@queerist' />
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
      </Head>
      {children}
      {linkColor && <style>{`a { color: ${linkColor} }`}</style>}
    </div>
  )
}
