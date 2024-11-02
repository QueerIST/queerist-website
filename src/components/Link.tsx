import classNames from 'classnames'
import { usePageContext } from 'vike-react/usePageContext'

function Link (props: React.ComponentProps<'a'>) {
  const { href } = props
  const { urlPathname } = usePageContext()

  const isActive = href && (href === '/' ? urlPathname === href : urlPathname.startsWith(href))
  const className = classNames(props.className, { active: isActive })
  return <a {...props} className={className} />
}

export { Link as NavLink }
