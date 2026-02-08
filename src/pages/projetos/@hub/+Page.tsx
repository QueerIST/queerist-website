import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { DynamicZone } from '../../../components/DynamicZone'
import { EventTile } from '../../../components/EventTile'
import { Page } from '../../../components/Page'
import { HubCover } from '../../../components/PageCover'
import { pageMapper } from '../../../mappers/components'
import { hubMapper, seriesMapper } from '../../../mappers/content'
import { type GetValues } from '../../../types/strapi'

const Hub = () => {
  const { projectos: rawProjectos, hub: rawHub } = useData<Data>()

  const parentPage = pageMapper(rawProjectos.data.Meta)

  const hub = hubMapper(rawHub.data, parentPage)
  return (
    <Page data={hub}>
      <HubCover data={hub}/>
      <DynamicZone data={rawHub.data.Body} />
      {rawHub.data.Series && rawHub.data.Series.map(
        (event: GetValues<'api::serie.serie'>, i) => (
          <EventTile key={i} n={i} data={seriesMapper(event, hub)} />
        ))}
    </Page>
  )
}

export default Hub
