import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { DynamicZone } from '../../components/DynamicZone'
import { InlineEventGallery } from '../../components/EventGallery'
import Page from '../../components/Page'
import { SeriesCover } from '../../components/PageCover'
import Separator from '../../components/Separator'
import { seriesMapper } from '../../mappers/content'
import { type APIResponseSingle } from '../../types/strapi'

export const Series = () => {
  const projectsResponse = useRouteLoaderData('p:serie')
  const eventsResponse = useRouteLoaderData('e:serie')

  const response = (projectsResponse !== undefined ? projectsResponse : eventsResponse) as AxiosResponse< APIResponseSingle<'api::serie.serie'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const series = seriesMapper(data.attributes)
  return (
    <Page data={series}>
      <SeriesCover data={series}/>
      <Separator />
      {series.happenings !== undefined && <InlineEventGallery data={series} />}
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}
