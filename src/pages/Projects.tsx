import { useEffect, useState } from 'react'

import axios from 'axios'

import Page from '../components/Page'
import { PageCover } from '../components/PageCover'
import PageTile from '../components/PageTile'
import Separator from '../components/Separator'
import { pageMapper } from '../mappers/components'
import { hubMapper } from '../mappers/content'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

const Projects = () => {
  const [data, setData] = useState<APIResponseData<'api::project-page.project-page'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::project-page.project-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/project-page', {
        params: {
          populate: {
            Meta: { populate: '*' },
            Hubs: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] }
          }
        }
      })
      setData(data.data.data)
    }
    fetchData().catch((error) => { console.log(error) })
  }, [])

  if (data === undefined) { return null }

  return (
    <Page data={pageMapper(data.attributes.Meta)}>
      <PageCover {...pageMapper(data.attributes.Meta)} />
      <Separator />
      {data.attributes.Hubs?.data.map((hub, i) => (
        <PageTile key={i} data={hubMapper(hub.attributes, 'projetos')} />
      ))}
    </Page>
  )
}

export default Projects
