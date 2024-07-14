import { useState, useEffect } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { EventInfo } from '../components/EventInfo'
import Page from '../components/Page'
import { EventCover } from '../components/PageCover'
import { eventMapper } from '../mappers/content'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

export const Event = () => {
  const { event } = useParams()
  const [data, setData] = useState<APIResponseData<'api::event.event'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::event.event'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/event/${event}`, {
        params: {
          populate: {
            Image: { populate: '*' }
          }
        }
      })
      setData(data.data.data)
    }
    fetchData().catch((error) => { console.log(error) })
  }, [event])

  if (data === undefined) return null

  return (
    <Page data={eventMapper(data.attributes)}>
      <EventCover {...eventMapper(data.attributes)}/>
      <EventInfo data={eventMapper(data.attributes)}/>
    </Page>
  )
}
