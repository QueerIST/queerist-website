import { DynamicZone } from '../../components/DynamicZone'
import { EventInfo } from '../../components/EventInfo'
import { EventInSeries } from '../../components/EventInSeries'
import { Page } from '../../components/Page'
import { EventCover } from '../../components/PageCover'
import { type Event as EventProps } from '../../types/domain'
import { type APIResponseSingle } from '../../types/strapi'

export const Event = ({ event, rawEvent }: { event: EventProps, rawEvent: APIResponseSingle<'api::event.event'> }) => {
  return (
    <Page data={event}>
      <EventCover data={event}/>
      <EventInfo data={event}/>
      <DynamicZone data={rawEvent.data.attributes.Body} />
      <EventInSeries data={event}/>
    </Page>
  )
}
