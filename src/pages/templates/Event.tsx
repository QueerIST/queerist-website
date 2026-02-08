import { DynamicZone } from '../../components/DynamicZone'
import { EventInfo } from '../../components/EventInfo'
import { EventInSeries } from '../../components/EventInSeries'
import { ImageGallery } from '../../components/ImageGallery'
import { Page } from '../../components/Page'
import { EventCover } from '../../components/PageCover'
import { Separator } from '../../components/Separator'
import { type Event as EventProps } from '../../types/domain'
import { type SingleTypeResponse } from '../../types/strapi'

export const Event = ({ event, rawEvent }: { event: EventProps, rawEvent: SingleTypeResponse<'api::event.event'> }) => {
  return (
    <Page data={event}>
      <EventCover data={event}/>
      <EventInfo data={event}/>
      <DynamicZone data={rawEvent.data.Body} />
      {!!event.media?.length && <>
        <Separator data='Galeria'/>
        <ImageGallery data={event.media}/>
      </>}
      <EventInSeries data={event}/>
    </Page>
  )
}
