import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { DynamicZone } from '../../components/DynamicZone'
import { Page } from '../../components/Page'
import { PageCover } from '../../components/PageCover'
import { pageMapper } from '../../mappers/components'

const About = () => {
  const response = useData<Data>()

  const data = response.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover data={page} />
      <DynamicZone data={data.attributes.Body} />
    </Page>
  )
}

export default About
