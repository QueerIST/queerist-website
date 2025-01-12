import { usePageContext } from 'vike-react/usePageContext'

const ErrorPage = () => {
  const pageContext = usePageContext()
  const abortReason = pageContext.abortReason as string | undefined

  let message

  if (abortReason) {
    message = abortReason
  } else {
    message = pageContext.is404 ? 'Hmmm estranho, esta página não existe!' : 'Oops algo correu mal! Tenta de novo...'
  }

  return <p>{message}</p>
}

export default ErrorPage
