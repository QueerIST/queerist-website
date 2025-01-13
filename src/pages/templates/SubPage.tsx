import { BodyText } from '../../components/BodyText'
import { Page } from '../../components/Page'
import { SubPageCover } from '../../components/PageCover'
import { type SubPage as SubPageProps } from '../../types/domain'

export const SubPage = ({ subPage }: { subPage: SubPageProps }) => {
  return (
    <Page data={subPage}>
      <SubPageCover data={subPage}/>
      <BodyText data={subPage.body}/>
    </Page>
  )
}
