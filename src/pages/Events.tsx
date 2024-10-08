import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { DynamicZone } from '../components/DynamicZone'
import { EventTile } from '../components/EventTile'
import { Page } from '../components/Page'
import { PageCover } from '../components/PageCover'
import { Separator } from '../components/Separator'
import { pageMapper } from '../mappers/components'
import { seriesMapper } from '../mappers/content'
import { type APIResponseSingle } from '../types/strapi'

export const Events = () => {
  const response = useRouteLoaderData('eventos') as AxiosResponse< APIResponseSingle<'api::event-page.event-page'>> | undefined
  if (!response) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <Separator />
      {data.attributes.Series?.data.map((serie, i) => (
        <EventTile key={i} n={i} data={seriesMapper(serie.attributes, page)} />
      ))}
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}
