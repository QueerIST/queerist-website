import React from 'react'

import AOS from 'aos'
import { hydrate, render } from 'react-dom'
import ReactGA from 'react-ga4'

import App from './App'

import './index.css'
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

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    , rootElement)
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    , rootElement)
}
