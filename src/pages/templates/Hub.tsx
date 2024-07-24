import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { DynamicZone } from '../../components/DynamicZone'
import EventTile from '../../components/EventTile'
import Page from '../../components/Page'
import { HubCover } from '../../components/PageCover'
import { hubMapper, seriesMapper } from '../../mappers/content'
import { type APIResponseSingle } from '../../types/strapi'

export const Hub = () => {
  const response = useRouteLoaderData('p:hub') as AxiosResponse< APIResponseSingle<'api::hub.hub'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const hub = hubMapper(data.attributes, 'projects')
  return (
    <Page data={hub}>
      <HubCover {...hub}/>
      <DynamicZone body={data.attributes.Body} />
      {data.attributes.Series?.data.map(
        (event, i) => (
          <EventTile key={i} n={i} data={seriesMapper(event.attributes)} />
        ))}
    </Page>
  )
}
