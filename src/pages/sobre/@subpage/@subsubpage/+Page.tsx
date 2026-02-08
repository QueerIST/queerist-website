import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../../mappers/components'
import { subPageMapper } from '../../../../mappers/content'
import { SubPage as SubPageTemplate } from '../../../templates/SubPage'
const SubPage = () => {
  const { sobre: rawSobre, page: rawSubPage, subPage: rawSubSubPage } = useData<Data>()

  const parentPage = pageMapper(rawSobre.data.Meta)

  const subPage = subPageMapper(rawSubPage.data, parentPage)

  const subSubPage = subPageMapper(rawSubSubPage.data, subPage)

  return (
    <SubPageTemplate subPage={subSubPage} rawSubPage={rawSubSubPage} />
  )
}

export default SubPage
