import React from 'react'
import { MainCover, Mission, Banners, Page } from '../components'

class Home extends React.Component {

	render() {
		return (
			<Page>
				<MainCover />
				<Mission />
				<Banners />
			</Page>
		)
	}
}


export default Home