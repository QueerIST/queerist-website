import React from 'react'
import './eventgallery.css'
import { ReactComponent as Launch } from './../svg/launch.svg'
import { ReactComponent as Expand } from './../svg/expand.svg'
import { ReactComponent as Collapse } from './../svg/collapse.svg'
import AnimateHeight from 'react-animate-height'

const Arrow = ({ open }) => (
	open ?
		(
			<Collapse /*preserveAspectRatio="none"*/ />
		) : (
			<div>
				<p>Ver todas as tertúlias</p>
				<Expand /*preserveAspectRatio="none"*/ />
			</div>
		)
)

class EventGalleryWrap extends React.Component {

	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	toggleGallery = () => {
		this.setState({ open: !this.state.open })
	}

	getHeight = (open) => open ? "auto" : '0'

	render() {
		return (
			<React.Fragment>
				<AnimateHeight duration={300} height={this.getHeight(this.state.open)} >
					<ul className="event-gallery">
						{this.props.children}
					</ul>
				</AnimateHeight>
				<button onClick={this.toggleGallery} className="toggleGallery">
					<Arrow open={this.state.open} />
				</button>
			</React.Fragment >
		)
	}
}

const EventGalleryItem = () => (
	<li className="event-gallery-item">
		<div className="event-gallery-item-img">
			<img src="assets/terts.jpg" alt="Tertúlia Faz-te Ouvir!" />
		</div>
		<div className="event-gallery-item-text">
			<h3>Faz-te Ouvir!</h3>
			<span className="event-gallery-item-launch">
				<h4>22 nov, 18h @ GA1</h4>
				<a href="https://www.facebook.com/events/1074556752718680/"><Launch /></a>
			</span>
			<p>Sabemos que ao longo dos anos o conceito de família tem evoluído mas
				de que forma? Quão diferente é a dinâmica familiar de um agregado
				com pais queer? E como é que pais não queer lidam com as necessidades
				dos seus filhos queer? Quais são as suas dificuldades e desafios?
			</p>
		</div>
	</li>
)

function EventGallery({ id }) {
	return (
		<EventGalleryWrap id={id}>
			<EventGalleryItem />
			<EventGalleryItem />
			<EventGalleryItem />
			<EventGalleryItem />
		</EventGalleryWrap>
	)
}

export default EventGallery