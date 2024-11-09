import AOS from 'aos'
import ReactGA from 'react-ga4'
import TagManager from 'react-gtm-module'

AOS.init({
  once: true
})

if (import.meta.env.PROD && import.meta.env.VITE_GA_CODE !== '') {
  ReactGA.initialize(import.meta.env.VITE_GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  })
}

TagManager.initialize({
  gtmId: 'GTM-NVMBPCQ8'
})
