import { DynamicZone } from '../../components/DynamicZone'
import { Page } from '../../components/Page'
import { SubPageCover } from '../../components/PageCover'
import { type SubPage as SubPageProps } from '../../types/domain'
import { type APIResponseSingle } from '../../types/strapi'

export const SubPage = ({ subPage, rawSubPage }: { subPage: SubPageProps, rawSubPage: APIResponseSingle<'api::subpage.subpage'> }) => {
  return (
    <Page data={subPage}>
      <SubPageCover data={subPage}/>
      <DynamicZone data={rawSubPage.data.attributes.Body} />
    </Page>
  )
}
