import React from 'react'
import { render } from 'react-snapshot';
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './webfontkit/fontstylesheet.css'

AOS.init({
	once: true
});

render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
