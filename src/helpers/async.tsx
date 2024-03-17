import { useState, type PropsWithChildren } from 'react'

function WrapDelayed (props: PropsWithChildren<{ load: boolean }>) {
  const { load, children } = props
  const [loaded, setLoaded] = useState(false)

  if (load && !loaded) { setLoaded(true) }

  return loaded && (children)
}

export default WrapDelayed
