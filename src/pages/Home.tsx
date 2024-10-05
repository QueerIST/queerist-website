import { Suspense } from 'react'

import { type AxiosResponse } from 'axios'
import { isAfter, isBefore } from 'date-fns'
import { useLoaderData } from 'react-router-dom'

import { fetchAllEvents } from '../api/loaders'
import { DynamicZone } from '../components/DynamicZone'
import { InlineEventGallery } from '../components/EventGallery'
import { MainCover } from '../components/MainCover'
import { Page } from '../components/Page'
import { wrapPromise } from '../helpers/async'
import { pageMapper } from '../mappers/components'
import { eventMapper, hubMapper, seriesMapper } from '../mappers/content'
import { type PageMeta } from '../types/domain'
import { type APIResponseCollection, type APIResponseSingle } from '../types/strapi'

function AllEvents ({ data }: { data: () => APIResponseCollection<'api::event.event'> | undefined }) {
  const rawEvents = data()
  if (!rawEvents) { return undefined }

  const events = rawEvents.data.map((e) => {
    const rawEvent = e.attributes
    const rawSeries = rawEvent.Series?.data.attributes

    if (!rawSeries) { return undefined }

    let seriesParent
    if (rawSeries.Hub?.data) {
      const rawHub = rawSeries.Hub.data.attributes
      seriesParent = hubMapper(rawHub, { id: 'projetos' } as unknown as PageMeta)
    } else {
      seriesParent = { id: 'eventos' } as unknown as PageMeta
    }

    return eventMapper(rawEvent, seriesMapper(rawSeries, seriesParent))
  }).filter((e) => !!e)

  const futureEvents = events.filter((e) => isAfter(e.date, Date.now()))
  const previousEvents = events.filter((e) => isBefore(e.date, Date.now()))

  return (
    <>
      {futureEvents.length !== 0 && <>
        <br/>
        <InlineEventGallery data={futureEvents} />
      </>
      }
      <h4 style={{ textAlign: 'center' }}>Eventos anteriores</h4>
      <InlineEventGallery data={previousEvents} reduced />
    </>
  )
}

export const Home = () => {
  const response = useLoaderData() as AxiosResponse<APIResponseSingle<'api::main-page.main-page'>> | undefined
  if (!response) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  const promise = wrapPromise<APIResponseCollection<'api::event.event'>>(fetchAllEvents)
  return (
    <Page data={page} home>
      <MainCover />
      <DynamicZone data={data.attributes.Body} />
      <Suspense>
        <AllEvents data={promise}/>
      </Suspense>
    </Page>
  )
}
