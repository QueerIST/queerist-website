import AOS from 'aos'
import ReactGA from 'react-ga4'

AOS.init({
  once: true
})

const params = new URLSearchParams(location.search)

function normalizeUTMParameters () {
  const utmSource = params.get('utm_source')

  if (utmSource === 'QueerIST') {
    params.set('utm_source', 'mailchimp')
    params.set('utm_medium', 'email')

    const utmCampaign = params.get('utm_campaign')
    if (utmCampaign) {
      const index = utmCampaign.indexOf('-')
      if (index !== -1) {
        const campaign = utmCampaign.substring(index + 1)
        params.set('utm_campaign', campaign)
      }
    }

    const newUrl = `${location.pathname}?${params.toString()}${location.hash}`
    window.history.replaceState({}, '', newUrl)
  }
}

normalizeUTMParameters()

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
