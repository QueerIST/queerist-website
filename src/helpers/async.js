import React from 'react'

class WrapDelayed extends React.Component {

	constructor(props) {
		super(props);
		this.state = { loaded: false }
	}

	render() {
		if (this.props.load && !this.state.loaded)
			this.setState({ loaded: true })
		return this.state.loaded && this.props.children
	}
}

export default WrapDelayed
