import AOS from 'aos'
import ReactGA from 'react-ga4'

import { initJotFormTracking } from '../helpers/jotform'
import { normalizeUTMParameters } from '../helpers/utm'

AOS.init({
  once: true
})

const params = new URLSearchParams(location.search)

normalizeUTMParameters()

if (import.meta.env.VITE_GA_CODE !== '') {
  const isDebugUser = localStorage.getItem('ga_debug_mode')
  let debugMode

  if (isDebugUser === 'true' || params.get('debug') !== null || import.meta.env.DEV || !import.meta.env.PROD) {
    debugMode = true
    localStorage.setItem('ga_debug_mode', 'true')
  }

  ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100,
      debug_mode: debugMode
    }
  })
}

initJotFormTracking()
