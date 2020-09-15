import React from 'react'
import { Home, About, Events, Projects, SubPage } from '../pages'
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
				exact path='/sobre'
				render={() =>
					<About data={data.about_page} />
				} />
			<Route
				exact path='/eventos'
				render={() =>
					<Events data={data.events_page} />
				} />
			<Route
				exact path='/projetos'
				render={() =>
					<Projects data={data.projects_page} />
				} />
			<Route
				exact path='/projetos/:id'
				render={({ match }) =>
					<SubPage id={match.params.id} parentData={data.projects_page} />
				} />
		</Switch>
	)
}

export default Pages