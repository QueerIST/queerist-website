import { usePageContext } from 'vike-react/usePageContext'

function Link (props: React.ComponentProps<'a'> & { to?: { pathname: string, hash?: string } | string }) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const { href, to } = props
  let hrefe = href ?? ''
  if (to) {
    if (typeof to === 'string') {
      hrefe = to
    } else {
      hrefe = new URL(to.pathname + to.hash).toString()
    }
  }
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(hrefe)
  const className = [props.className, isActive && 'is-active'].filter(Boolean).join(' ')
  return <a {...props} href={hrefe} className={className} />
}

export { Link as NavLink }
