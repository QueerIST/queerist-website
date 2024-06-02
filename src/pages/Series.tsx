import { useState, useEffect } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { InlineEventGallery } from '../components/EventGallery'
import Page from '../components/Page'
import { SeriesCover } from '../components/PageCover'
import Separator from '../components/Separator'
import { seriesMapper } from '../mappers/content'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

export const Series = () => {
  const { serie } = useParams()
  const [data, setData] = useState<APIResponseData<'api::serie.serie'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::serie.serie'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/serie/${serie}`, {
        params: {
          populate: {
            Image: { populate: '*' },
            Logo: { populate: '*' },
            Hub: { populate: '*' },
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
      <SeriesCover {...series}/>
      <Separator />
      {series.happenings !== undefined && <InlineEventGallery data={series} />}
    </Page>
  )
}
