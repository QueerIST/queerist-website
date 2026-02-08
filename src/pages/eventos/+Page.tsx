import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { DynamicZone } from '../../components/DynamicZone'
import { EventTile } from '../../components/EventTile'
import { Page } from '../../components/Page'
import { PageCover } from '../../components/PageCover'
import { Separator } from '../../components/Separator'
import { pageMapper } from '../../mappers/components'
import { seriesMapper } from '../../mappers/content'

const Events = () => {
  const response = useData<Data>()

  const data = response.data

  const page = pageMapper(data.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <Separator />
      {data.Series && data.Series.map((serie, i) => (
        <EventTile key={i} n={i} data={seriesMapper(serie, page)} />
      ))}
      <DynamicZone data={data.Body} />
    </Page>
  )
}

export default Events
