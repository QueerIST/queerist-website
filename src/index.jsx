import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AOS from 'aos'
import ReactGA from 'react-ga4'

import App from './App'
import 'aos/dist/aos.css'
import './webfontkit/fontstylesheet.css'

AOS.init({
  once: true
})

if (import.meta.env.PROD && import.meta.env.MODE !== 'github') {
  ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
