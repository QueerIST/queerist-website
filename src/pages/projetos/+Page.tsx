import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { DynamicZone } from '../../components/DynamicZone'
import { Page } from '../../components/Page'
import { PageCover } from '../../components/PageCover'
import { PageTile } from '../../components/PageTile'
import { Separator } from '../../components/Separator'
import { pageMapper } from '../../mappers/components'
import { hubMapper } from '../../mappers/content'

const Projects = () => {
  const response = useData<Data>()

  const data = response.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <Separator />
      {data.attributes.Hubs?.data.map((hub, i) => (
        <PageTile key={i} n={i} data={hubMapper(hub.attributes, page)} />
      ))}
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}

export default Projects
