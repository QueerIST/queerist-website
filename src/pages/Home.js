import React from 'react'
import { Cover, Mission, Banners, Page } from '../components'

class Home extends React.Component {

	render() {
		return (
			<Page>
				<Cover />
				<Mission />
				<Banners />
			</Page>
		)
	}
}


export default Home