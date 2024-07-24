import { type PropsWithChildren } from 'react'

import { Helmet, HelmetData } from 'react-helmet-async'

import { pagePath } from '../helpers/links'
import { type PageMeta } from '../types/domain'

const publicFullPath = (path: string) => `${import.meta.env.VITE_FULL_URL}/a${path}`

const fullPath = (page: PageMeta) => {
  const path = pagePath(page)
  return `${import.meta.env.VITE_FULL_URL}${path === '/' ? '' : path}`
}

const Page = ({ data, children, home }: PropsWithChildren<{ data: PageMeta, home?: boolean }>) => {
  const helmetData = new HelmetData({})
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
        <meta itemProp='image' content={publicFullPath(data.imgLink)} />

        {/* Facebook Meta Tags */}
        <meta
          property='og:url'
          content={fullPath(data)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={data.name} />
        <meta property='og:description' content={data.description} />
        <meta property='og:image' content={publicFullPath(data.imgLink)} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:site' content='@queerist' />
        <meta name='twitter:card' content='summary_large_image' />
        {/* <meta name="twitter:card" content="summary" /> */}
      </Helmet>
      {children}
    </div>
  )
}

export default Page
