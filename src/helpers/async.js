import { useState } from 'react'

function WrapDelayed(props) {
	const { load, children } = props
	const [loaded, setLoaded] = useState(false)

	if (load && !loaded)
		setLoaded(true)

	return loaded && (children)
}

export default WrapDelayed
