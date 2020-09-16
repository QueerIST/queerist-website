import React from 'react'
import { render } from 'react-snapshot';
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import AOS from 'aos'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import 'aos/dist/aos.css'
import './webfontkit/fontstylesheet.css'


AOS.init({
	once: true
});

ReactGA.initialize(process.env.REACT_APP_GA_CODE, {
	debug: true,
	gaOptions: {
		siteSpeedSampleRate: 100
	}
})

const history = createBrowserHistory()
const analyticsHistory = location => {
	ReactGA.set({ page: location.pathname + location.search }); // Update the user's current page
	ReactGA.pageview(location.pathname); // Record a pageview for the given page
}

// Initialize google analytics page view tracking
analyticsHistory(history.location)
history.listen(analyticsHistory)

render(<App history={history} />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
