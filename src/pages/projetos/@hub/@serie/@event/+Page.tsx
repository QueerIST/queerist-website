import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../../../mappers/components'
import { eventMapper, seriesMapper, hubMapper } from '../../../../../mappers/content'
import { Event as EventTemplate } from '../../../../templates/Event'

const Event = () => {
  const { projectos: rawProjectos, hub: rawHub, serie: rawSerie, event: rawEvent } = useData<Data>()

  const parentPage = seriesMapper(rawSerie.data, hubMapper(rawHub.data, pageMapper(rawProjectos.data.Meta)))

  const event = eventMapper(rawEvent.data, parentPage)
  return (
    <EventTemplate event={event} rawEvent={rawEvent}/>
  )
}

export default Event
