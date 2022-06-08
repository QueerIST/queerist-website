import React from 'react'
import { Home, About, Events, Projects, SubPage } from '../pages'
import { Switch, Route } from 'react-router-dom'

function Pages({ data }) {
	return (
		<Switch>
			<Route
				exact path='/'>
				<Home data={data.main_page} />
			</Route>
			<Route
				exact path='/sobre'>
				<About data={data.about_page} />
			</Route>
			<Route
				exact path='/eventos'>
				<Events data={data.events_page} />
			</Route>
			<Route
				exact path='/projetos'>
				<Projects data={data.projects_page} />
			</Route>
			<Route
				exact path='/projetos/:id'>
				<SubPage parentData={data.projects_page} />
			</Route>
		</Switch>
	)
}

export default Pages