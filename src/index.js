import React from 'react'
import { render } from 'react-snapshot';
import './index.css'
import App from './App'
import AOS from 'aos'
import ReactGA from 'react-ga4'
import { createBrowserHistory } from 'history'
import 'aos/dist/aos.css'
import './webfontkit/fontstylesheet.css'


AOS.init({
	once: true
});

ReactGA.initialize(process.env.REACT_APP_GA_CODE, {
	gaOptions: {
		siteSpeedSampleRate: 100
	}
})

const history = createBrowserHistory()
const analyticsHistory = location => {
	ReactGA.set({ page: location.pathname + location.hash }); // Update the user's current page
}

// Initialize google analytics page view tracking
analyticsHistory(history.location)
history.listen(analyticsHistory)

render(<App history={history} />, document.getElementById('root'))