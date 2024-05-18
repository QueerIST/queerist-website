import { useEffect, useState } from 'react'

import axios from 'axios'

import EventTile from '../components/EventTile'
import HighlightBox from '../components/HighlightBox'
import Page from '../components/Page'
import PageCover from '../components/PageCover'
import Separator from '../components/Separator'
import { notNullish } from '../helpers/types'
import { highlightBoxMapper, pageMapper } from '../mappers/components'
import { seriesMapper } from '../mappers/content'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

const Events = () => {
  const [data, setData] = useState<APIResponseData<'api::event-page.event-page'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::event-page.event-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/event-page', {
        params: {
          populate: {
            Meta: { populate: '*' },
            Series: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] },
            Highlight: { populate: ['Button', 'Button.Link'] }
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
      {data.attributes.Series?.data.map((serie, i) => (
        <EventTile key={i} n={i} data={seriesMapper(serie.attributes)} />
      ))}
      {notNullish(data.attributes.Highlight) && <HighlightBox {...highlightBoxMapper(data.attributes.Highlight)}/> }
    </Page>
  )
}

export default Events
