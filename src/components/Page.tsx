import { type PropsWithChildren } from 'react'

import { Helmet, HelmetData } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { fullPath, fullPathSlashless } from '../helpers/links'
import { type DPageMeta } from '../types/data'

const Page = ({ data, children }: PropsWithChildren<{ data: DPageMeta }>) => {
  const location = useLocation()
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
        {!(data.home ?? false) && <title>{data.name}</title>}
        <meta name='description' content={data.description} />
        <link
          rel='canonical'
          href={fullPathSlashless(location.pathname)}
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={data.name} />
        <meta itemProp='description' content={data.description} />
        <meta itemProp='image' content={fullPath(data.img_link)} />

        {/* Facebook Meta Tags */}
        <meta
          property='og:url'
          content={fullPathSlashless(location.pathname)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={data.name} />
        <meta property='og:description' content={data.description} />
        <meta property='og:image' content={fullPath(data.img_link)} />

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
