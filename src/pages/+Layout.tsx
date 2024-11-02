// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

import React from 'react'

import AOS from 'aos'
import ReactGA from 'react-ga4'

import { App } from '../App'
import '../components/layout.css'
import 'aos/dist/aos.css'
import '../webfontkit/fontstylesheet.css'

AOS.init({
  once: true
})

if (import.meta.env.PROD && import.meta.env.MODE !== 'github') {
  if (import.meta.env.VITE_GA_CODE !== '') {
    ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    })
  }
}

export function Layout () {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
