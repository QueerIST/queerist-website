import React from 'react'
import './eventgallery.css'

const EventGalleryWrap = ({ children }) => (
	<ul className="event-gallery">
		{children}
	</ul>
)

function EventGalleryItem() {
	return (
		<li className="event-gallery-item">
			<div className="event-gallery-item-img">
				<img src="assets/terts.jpg" alt="Tertúlia Faz-te Ouvir!" />
			</div>
			<div className="event-gallery-item-text">
				<h3>Faz-te Ouvir!</h3>
				<h4>22-11</h4>
				<p>Sabemos que ao longo dos anos o conceito de família tem evoluído mas
					de que forma? Quão diferente é a dinâmica familiar de um agregado
					com pais queer? 👩‍👩‍👧 👨‍👨‍👦 E como é que pais não queer lidam com as necessidades
					dos seus filhos queer? Quais são as suas dificuldades e desafios?
				</p>
			</div>
		</li>
	)
}

class EventGallery extends React.Component {
	render() {
		return (
			<EventGalleryWrap>
				<EventGalleryItem />
				<EventGalleryItem />
				<EventGalleryItem />
				<EventGalleryItem />
			</EventGalleryWrap>
		)
	}
}

export default EventGallery