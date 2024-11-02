import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../../../mappers/components'
import { eventMapper, seriesMapper, hubMapper } from '../../../../../mappers/content'
import { Event as EventTemplate } from '../../../../templates/Event'

const Event = () => {
  const { projectos: rawProjectos, hub: rawHub, serie: rawSerie, event: rawEvent } = useData<Data>()

  const parentPage = seriesMapper(rawSerie.data.attributes, hubMapper(rawHub.data.attributes, pageMapper(rawProjectos.data.attributes.Meta)))

  const event = eventMapper(rawEvent.data.attributes, parentPage)
  return (
    <EventTemplate event={event} rawEvent={rawEvent}/>
  )
}

export default Event
