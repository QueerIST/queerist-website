import React from 'react'
import { MainCover, Mission, Banners, Page } from '../components'

const Home = ({ data }) => (
	<Page>
		<MainCover />
		<Mission mission={data.mission} missionStatement={data.mission_statement} />
		<Banners data={data.banners} />
	</Page>
)


export default Home