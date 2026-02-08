import { JsonLd } from 'react-schemaorg'
import { type BlogPosting } from 'schema-dts'

import { DynamicZone } from '../../components/DynamicZone'
import { Page } from '../../components/Page'
import { SubPageCover } from '../../components/PageCover'
import { type SubPage as SubPageProps } from '../../types/domain'
import { type SingleTypeResponse } from '../../types/strapi'

export const SubPage = ({ subPage, rawSubPage }: { subPage: SubPageProps, rawSubPage: SingleTypeResponse<'api::subpage.subpage'> }) => {
  return (
    <Page data={subPage}>
      <SubPageCover data={subPage}/>
      <JsonLd<BlogPosting>
      item={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        dateCreated: subPage.date?.toISOString()
      }}/>
      <DynamicZone data={rawSubPage.data.Body} />
    </Page>
  )
}
