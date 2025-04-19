import AOS from 'aos'
import ReactGA from 'react-ga4'

AOS.init({
  once: true
})

const params = new URLSearchParams(location.search)

if (import.meta.env.VITE_GA_CODE !== '') {
  let debugMode

  if (params.get('debug') !== null || import.meta.env.DEV || !import.meta.env.PROD) {
    debugMode = true
  }

  ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100,
      debug_mode: debugMode
    }
  })
}
