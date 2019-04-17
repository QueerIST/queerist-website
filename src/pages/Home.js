import React from 'react'
import { MainCover, Mission, Banners, Page } from '../components'

const Home = ({ location }) => (
	<Page location={location}>
		<MainCover />
		<Mission />
		<Banners />
	</Page>
)


export default Home