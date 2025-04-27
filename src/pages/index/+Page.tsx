import { Suspense } from 'react'

import { isAfter, isBefore } from 'date-fns'
import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { fetchAllEvents, type YoastPosts } from '../../api/loaders'
import { DynamicZone } from '../../components/DynamicZone'
import { InlineEventGallery } from '../../components/EventGallery'
import { ImageBoxList } from '../../components/Lists'
import { MainCover } from '../../components/MainCover'
import { Page } from '../../components/Page'
import { wrapPromise } from '../../helpers/async'
import { pageMapper } from '../../mappers/components'
import { eventMapper, hubMapper, postMapper, seriesMapper } from '../../mappers/content'
import { type PageMeta } from '../../types/domain'
import { type APIResponseCollection } from '../../types/strapi'

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
        <InlineEventGallery data={futureEvents} detailed />
      </>
      }
      <h4 style={{ textAlign: 'center' }}>Eventos anteriores</h4>
      <InlineEventGallery data={previousEvents} reduced detailed />
    </>
  )
}

export function AllPosts ({ data }: { data: () => YoastPosts | undefined }) {
  const rawPosts = data()
  if (!rawPosts) { return undefined }

  const posts = rawPosts.map((e) => postMapper(e)).filter((p) => !p.link.includes('/en/'))
  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Do Blog</h4>
      <ImageBoxList boxes={posts.map((p) => ({ id: p.id, text: p.text, name: p.title, bgColor: 'white', image: p.img }))} />
    </>
  )
}

function Home () {
  const response = useData<Data>()

  const data = response.data

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

export default Home
