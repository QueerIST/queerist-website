import { Page, PageCover, Tile, Separator, HighlightBox } from '../components'
import { type DEventsPage } from '../types/data'

const Events = ({ data }: { data: DEventsPage }) => (
  <Page data={data}>
    <PageCover data={data} />
    <Separator />
    {data.events.map((event, i) => (
      <Tile key={i} n={i} data={event} />
    )
    )}
    <HighlightBox data={data.highlightbox} />
  </Page>
)

export default Events
