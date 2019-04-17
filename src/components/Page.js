import React from 'react'

class Page extends React.Component {

	componentDidMount() {
		let params = new URLSearchParams(this.props.location.search)
		if (params.get("scroll"))
			document.getElementById(params.get("scroll")).scrollIntoView()
	}

	render() {
		return (
			<div data-aos="fade-left">
				{this.props.children}
			</div>
		)
	}
}

export default Page