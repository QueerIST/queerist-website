import { type AxiosResponse } from 'axios'
import { useLoaderData } from 'react-router-dom'

import { DynamicZone } from '../components/DynamicZone'
import MainCover from '../components/MainCover'
import Page from '../components/Page'
import { pageMapper } from '../mappers/components'
import { type APIResponseSingle } from '../types/strapi'

export const Home = () => {
  const response = useLoaderData() as AxiosResponse< APIResponseSingle<'api::main-page.main-page'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page} home>
      <MainCover />
      <DynamicZone body={data.attributes.Body} />
    </Page>
  )
}
