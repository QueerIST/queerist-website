import React from 'react'
import { Home } from '../pages'
import { Switch, Route } from 'react-router-dom'

function Page() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	)
}

export default Page