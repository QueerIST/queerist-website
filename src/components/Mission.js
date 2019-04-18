import React from 'react'
import './mission.css'

class Mission extends React.Component {
	render() {
		return (
			<div className="mission">
				<div className="mission-child">
					<h2 className="mission-button-child mission-button-text">a nossa missão</h2>
					<div className="mission-button-child">
						<button className="mission-button" type="button">Mission Statement</button>
					</div>
				</div>
				<p className="mission-child mission-text">{this.props.mission}</p>
			</div>
		)
	}
}

export default Mission