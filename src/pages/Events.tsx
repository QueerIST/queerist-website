import HighlightBox from '../components/HighlightBox'
import Page from '../components/Page'
import PageCover from '../components/PageCover'
import Separator from '../components/Separator'
import Tile from '../components/Tile'
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
