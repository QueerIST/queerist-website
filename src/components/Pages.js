import React from 'react'
import { Home, Events } from '../pages'
import { Switch, Route } from 'react-router-dom'

function Pages() {
	return (
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/events' component={Events}/>
		</Switch>
	)
}

export default Pages