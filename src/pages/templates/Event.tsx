import { useEventData } from '../../api/use'
import { DynamicZone } from '../../components/DynamicZone'
import { EventInfo } from '../../components/EventInfo'
import { EventInSeries } from '../../components/EventInSeries'
import { Page } from '../../components/Page'
import { EventCover } from '../../components/PageCover'
import { pageMapper } from '../../mappers/components'
import { eventMapper, seriesMapper, hubMapper } from '../../mappers/content'

export const Event = () => {
  const { projectos: rawProjectos, eventos: rawEventos, hub: rawHub, serie: rawSerie, event: rawEvent } = useEventData()
  let parentPage

  if (rawProjectos) {
    parentPage = seriesMapper(rawSerie.data.attributes, hubMapper(rawHub.data.attributes, pageMapper(rawProjectos.data.attributes.Meta)))
  } else {
    parentPage = seriesMapper(rawSerie.data.attributes, pageMapper(rawEventos.data.attributes.Meta))
  }

  const event = eventMapper(rawEvent.data.attributes, parentPage)
  return (
    <Page data={event}>
      <EventCover data={event}/>
      <EventInfo data={event}/>
      <DynamicZone data={rawEvent.data.attributes.Body} />
      <EventInSeries data={event}/>
    </Page>
  )
}
