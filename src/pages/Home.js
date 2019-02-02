import React from 'react'
import { Cover, Mission, Banners } from '../components'

class Home extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Cover/>
				<Mission/>
				<Banners/>
			</React.Fragment>
		)
	}
}


export default Home