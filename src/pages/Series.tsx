import { useState, useEffect } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { IconList } from '../components/Lists'
import Page from '../components/Page'
import PageCover from '../components/PageCover'
import { seriesMapper } from '../mappers/content'
import { type Happening } from '../types/domain'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

const Series = () => {
  const { serie } = useParams()
  const [data, setData] = useState<APIResponseData<'api::serie.serie'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::serie.serie'>>(`http://queerist.vps.tecnico.ulisboa.pt/a/pi/slugify/slugs/serie/${serie}`, {
        params: {
          populate: {
            Image: { populate: '*' },
            Events: { populate: ['Image'] }
          }
        }
      })
      setData(data.data.data)
    }
    fetchData().catch((error) => { console.log(error) })
  }, [serie])

  if (data === undefined) return null

  const series = seriesMapper(data.attributes)
  return (
    <Page data={series}>
      <PageCover {...series}/>
      {series.happenings !== undefined && <IconList icons={series.happenings.map((happening: Happening) => ({
        name: happening.name,
        logoLink: happening.imgLink,
        link: `${serie}/${happening.id}`
      }))} />}
    </Page>
  )
}

export default Series
