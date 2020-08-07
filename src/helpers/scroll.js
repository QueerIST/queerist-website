import { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollToTopComp extends Component {

	shouldComponentUpdate(prevProps) {
		if (this.props.history.action === 'POP')
			return true;
		if (this.props.location.pathname !== prevProps.location.pathname) {
			document.documentElement.style.scrollBehavior = 'unset';
			setTimeout(() => {
				window.scrollTo(0, 0);
				document.documentElement.style.scrollBehavior = 'smooth';
			}, 0)
		} else {
			window.scrollTo(0, 0);
		}
		return true;
	}

	render() {
		return this.props.children;
	}
}

const ScrollToTop = withRouter(ScrollToTopComp)

export { ScrollToTop }

function scrollOptions(el) {
	document.documentElement.style.scrollBehavior = 'unset';
	setTimeout((e) => {
		window.scrollTo(0, 0);
		document.documentElement.style.scrollBehavior = 'smooth';
		el.scrollIntoView({ block: 'center' });
	}, 0, el)
}

export { scrollOptions }