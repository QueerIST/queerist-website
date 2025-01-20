import { useData } from 'vike-react/useData'
import { usePageContext } from 'vike-react/usePageContext'

import { type Data } from './+data'
import { BodyText } from '../../components/BodyText'
import { Image } from '../../components/Image'
import { SizeTypes } from '../../helpers/image'

const ErrorPage = () => {
  const response = useData<Data>()
  const pageContext = usePageContext()
  const abortReason = pageContext.abortReason as string | undefined

  let message

  if (abortReason) {
    message = abortReason
  } else {
    message = pageContext.is404 ? 'Hmmm estranho, esta página não existe!' : 'Oops algo correu mal! Tenta de novo...'
  }

  return (
    <BodyText className='alignCenter'>
      <h1>Oh, naurr</h1>
      <p>{message}</p>
      {response && <Image src={response} sizes={{ mobile: { type: SizeTypes.Proportion, proportion: 1 }, desktop: { type: SizeTypes.Proportion, proportion: 1 } }} className='width100' />}
    </BodyText>
  )
}

export default ErrorPage
