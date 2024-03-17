import React from 'react'
import { createRoot } from 'react-dom/client'

import AOS from 'aos'
import ReactGA from 'react-ga4'

import App from './App'

import './index.css'
import 'aos/dist/aos.css'
import './webfontkit/fontstylesheet.css'

AOS.init({
  once: true
})

if (import.meta.env.PROD && import.meta.env.MODE !== 'github') {
  if (import.meta.env.VITE_GA_CODE !== undefined) {
    ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
