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

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <Separator />
      {data.attributes.Series?.data.map((serie, i) => (
        <EventTile key={i} n={i} data={seriesMapper(serie.attributes, page)} />
      ))}
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}

export default Events
