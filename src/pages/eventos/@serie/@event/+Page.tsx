import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../../mappers/components'
import { eventMapper, seriesMapper } from '../../../../mappers/content'
import { Event as EventTemplate } from '../../../templates/Event'

const Event = () => {
  const { eventos: rawEventos, serie: rawSerie, event: rawEvent } = useData<Data>()

  const parentPage = seriesMapper(rawSerie.data, pageMapper(rawEventos.data.Meta))

  const event = eventMapper(rawEvent.data, parentPage)
  return (
    <EventTemplate event={event} rawEvent={rawEvent}/>
  )
}

export default Event
