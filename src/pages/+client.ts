import AOS from 'aos'
import ReactGA from 'react-ga4'
import type { OnHydrationEndAsync } from 'vike/types'

export const onHydrationEnd: OnHydrationEndAsync = async (
  _pageContext
): ReturnType<OnHydrationEndAsync> => {
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
}
