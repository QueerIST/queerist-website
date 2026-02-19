import ReactGA from 'react-ga4'

export function initJotFormTracking () {
  window.addEventListener('message', (event) => {
    if (!event.origin.includes('jotform.com')) return

    const data = event.data
    const pathParts = window.location.pathname.split('/').filter(Boolean)
    const pageId = pathParts[pathParts.length - 1] || 'unknown'

    const getFormTitle = (jotformId: string) => {
      const iframe = document.getElementById(`JotFormIFrame-${jotformId}`)
      return iframe?.getAttribute('title') ?? 'Unknown Form'
    }

    const trackSubmit = (jotformId: string, additionalParams = {}) => {
      ReactGA.event('form_submit', {
        form_id: pageId,
        form_name: 'jotform',
        form_title: getFormTitle(jotformId),
        form_destination: window.location.pathname,
        ...additionalParams
      })
    }

    if (typeof data === 'string') {
      const parts = data.split(':')
      const action = parts[0]
      const jotformId = parts[parts.length - 1]

      if (action === 'formSubmitted' || action === 'thankYouPageOpened') {
        trackSubmit(jotformId)
      }
    } else if (typeof data === 'object' && data !== null) {
      const jotformId = String(data.formID || data.formId || data.id || 'unknown')

      if (data.action === 'submission-completed' || data.type === 'form-submit' || data.status === 'success') {
        trackSubmit(jotformId, {
          submission_id: data.submissionID || data.submissionId || data.sid
        })
      }
    }
  })
}
