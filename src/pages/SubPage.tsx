import { useParams } from 'react-router-dom'

import { Page, PageCover, Tile, Separator, TextBlock, IconList, HighlightBox } from '../components'
import { type DPageWithSubPages } from '../types/data'

const SubPage = ({ parentData }: { parentData: DPageWithSubPages }) => {
  const { id } = useParams()
  const data = parentData.sub_pages.find(p => p.id === id)
  if (data === undefined) return null

  return (
    <Page data={data}>
      <PageCover data={data} parentPage={parentData.id} />
      <Separator data={data.separator} />
      {data.icons !== undefined && <IconList data={data.icons} />}
      <TextBlock data={data.text_block} />
      {data.highlightbox !== undefined && <HighlightBox data={data.highlightbox} />}
      {data.text_block_2 !== undefined && <TextBlock data={data.text_block_2} small />}
      {data.events !== undefined &&
        <>
          <Separator data={data.separator_events} />
          {data.events.map(
            (event, i) => (
              <Tile key={i} n={i} data={event} />
            )
          )}
        </>}
    </Page>
  )
}

export default SubPage
