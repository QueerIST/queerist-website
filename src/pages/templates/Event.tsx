import { type AxiosResponse } from 'axios'
import { useLoaderData } from 'react-router-dom'

import { DynamicZone } from '../../components/DynamicZone'
import { EventInfo } from '../../components/EventInfo'
import Page from '../../components/Page'
import { EventCover } from '../../components/PageCover'
import { eventMapper } from '../../mappers/content'
import { type APIResponseSingle } from '../../types/strapi'

export const Event = () => {
  const response = useLoaderData() as AxiosResponse< APIResponseSingle<'api::event.event'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const event = eventMapper(data.attributes)
  return (
    <Page data={event}>
      <EventCover {...event}/>
      <EventInfo data={event}/>
      <DynamicZone body={data.attributes.Body} />
    </Page>
  )
}
