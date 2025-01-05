import AOS from 'aos'
import ReactGA from 'react-ga4'

AOS.init({
  once: true
})

const params = new URLSearchParams(location.search)

if (import.meta.env.PROD && import.meta.env.VITE_GA_CODE !== '') {
  ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100,
      debug_mode: !!params.get('debug')
    }
  })
}
