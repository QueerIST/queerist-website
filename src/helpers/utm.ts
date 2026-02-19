export function normalizeUTMParameters () {
  const params = new URLSearchParams(location.search)
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
