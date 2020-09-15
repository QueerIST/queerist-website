import React from 'react'
import { Home, About, Events } from '../pages'
import { Switch, Route } from 'react-router-dom'

function Pages({ data }) {
	return (
		<Switch>
			<Route
				exact path='/'
				render={() =>
					<Home data={data.main_page} />
				} />
			<Route
				exact path='/about'
				render={() =>
					<About data={data.about_page} />
				} />
			<Route
				exact path='/events'
				render={() =>
					<Events data={data.events_page} />
				} />
		</Switch>
	)
}

export default Pages