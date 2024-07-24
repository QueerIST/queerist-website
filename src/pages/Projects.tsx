import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { DynamicZone } from '../components/DynamicZone'
import Page from '../components/Page'
import { PageCover } from '../components/PageCover'
import PageTile from '../components/PageTile'
import Separator from '../components/Separator'
import { pageMapper } from '../mappers/components'
import { hubMapper } from '../mappers/content'
import { type APIResponseSingle } from '../types/strapi'

export const Projects = () => {
  const response = useRouteLoaderData('projetos') as AxiosResponse< APIResponseSingle<'api::project-page.project-page'>> | undefined
  if (response === undefined) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <Separator />
      {data.attributes.Hubs?.data.map((hub, i) => (
        <PageTile key={i} data={hubMapper(hub.attributes, page)} />
      ))}
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}
