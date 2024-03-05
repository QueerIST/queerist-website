import { Page, PageCover, Tile, Separator } from '../components'
import { type DProjectsPage } from '../types/data'

const Projects = ({ data }: { data: DProjectsPage }) => (
  <Page data={data}>
    <PageCover data={data} />
    <Separator />
    {data.sub_pages.map(
      (page, i) => (
        <Tile key={i} n={i} data={page} parentPage={data.id} />
      )
    )}
  </Page>
)

export default Projects
