import { type AxiosResponse } from 'axios'
import { useLoaderData } from 'react-router-dom'

import { DynamicZone } from '../components/DynamicZone'
import Page from '../components/Page'
import { PageCover } from '../components/PageCover'
import { pageMapper } from '../mappers/components'
import { type APIResponseSingle } from '../types/strapi'

export const About = () => {
  const response = useLoaderData() as AxiosResponse< APIResponseSingle<'api::about-page.about-page'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}
