import { Page } from '../../components/Page'
import { PageCover } from '../../components/PageCover'
import { TextRenderer } from '../../components/TextRenderer'
import { type SubPage as SubPageProps } from '../../types/domain'

export const SubPage = ({ subPage }: { subPage: SubPageProps }) => {
  return (
    <Page data={subPage}>
      <PageCover data={subPage}/>
      <TextRenderer data={subPage.body} />
    </Page>
  )
}
