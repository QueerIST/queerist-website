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

  const page = pageMapper(data.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <Separator />
      {data.Hubs && data.Hubs.map((hub, i) => (
        <PageTile key={i} n={i} data={hubMapper(hub, page)} />
      ))}
      <DynamicZone data={data.Body} />
    </Page>
  )
}

export default Projects
