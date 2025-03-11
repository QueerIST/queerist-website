import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../mappers/components'
import { subPageMapper } from '../../../mappers/content'
import { SubPage as SubPageTemplate } from '../../templates/SubPage'

const SubPage = () => {
  const { sobre: rawSobre, subPage: rawSubPage } = useData<Data>()

  const parentPage = pageMapper(rawSobre.data.attributes.Meta)

  const subPage = subPageMapper(rawSubPage.data.attributes, parentPage)
  return (
    <SubPageTemplate subPage={subPage} rawSubPage={rawSubPage} />
  )
}

export default SubPage
