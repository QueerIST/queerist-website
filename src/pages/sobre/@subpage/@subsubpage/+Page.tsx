import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../../mappers/components'
import { subPageMapper } from '../../../../mappers/content'
import { SubPage as SubPageTemplate } from '../../../templates/SubPage'
const SubPage = () => {
  const { sobre: rawSobre, page: rawSubPage, subPage: rawSubSubPage } = useData<Data>()

  const parentPage = pageMapper(rawSobre.data.attributes.Meta)

  const subPage = subPageMapper(rawSubPage.data.attributes, parentPage)

  const subSubPage = subPageMapper(rawSubSubPage.data.attributes, subPage)

  return (
    <SubPageTemplate subPage={subSubPage} />
  )
}

export default SubPage
