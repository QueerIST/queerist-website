import { BodyText } from '../../components/BodyText'
import { Page } from '../../components/Page'
import { SubPageCover } from '../../components/PageCover'
import { TextRenderer } from '../../components/TextRenderer'
import { type SubPage as SubPageProps } from '../../types/domain'

export const SubPage = ({ subPage }: { subPage: SubPageProps }) => {
  return (
    <Page data={subPage}>
      <SubPageCover data={subPage}/>
      <BodyText>
        <TextRenderer data={subPage.body} />
      </BodyText>
    </Page>
  )
}
