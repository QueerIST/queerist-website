import { useState, type PropsWithChildren } from 'react'

export function WrapDelayed (props: PropsWithChildren<{ load: boolean }>) {
  const { load, children } = props
  const [loaded, setLoaded] = useState(false)

  if (load && !loaded) { setLoaded(true) }

  return loaded && (children)
}
