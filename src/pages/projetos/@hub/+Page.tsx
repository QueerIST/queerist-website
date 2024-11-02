import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { DynamicZone } from '../../../components/DynamicZone'
import { EventTile } from '../../../components/EventTile'
import { Page } from '../../../components/Page'
import { HubCover } from '../../../components/PageCover'
import { pageMapper } from '../../../mappers/components'
import { hubMapper, seriesMapper } from '../../../mappers/content'

const Hub = () => {
  const { projectos: rawProjectos, hub: rawHub } = useData<Data>()

  const parentPage = pageMapper(rawProjectos.data.attributes.Meta)

  const hub = hubMapper(rawHub.data.attributes, parentPage)
  return (
    <Page data={hub}>
      <HubCover data={hub}/>
      <DynamicZone data={rawHub.data.attributes.Body} />
      {rawHub.data.attributes.Series?.data.map(
        (event, i) => (
          <EventTile key={i} n={i} data={seriesMapper(event.attributes, hub)} />
        ))}
    </Page>
  )
}

export default Hub
