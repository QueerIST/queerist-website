import ReactGA from 'react-ga4'

import Email from '../svg/email.svg?react'
import Facebook from '../svg/facebook.svg?react'
import GitHub from '../svg/github.svg?react'
import Instagram from '../svg/instagram.svg?react'
import Twiter from '../svg/twitter.svg?react'
import './footer.css'

export function Footer () {
  const handleClickLink = (link: string) => {
    ReactGA.event({
      category: 'Footer', // Required
      action: `Clica ${link}` // Required
    })
  }

  const handleClickLinkCb = (page: string) => () => { handleClickLink(page) }

  return (
    <footer>
      <div className='footer-logos'>
        <a href='https://facebook.com/QueerIST' onClick={handleClickLinkCb('facebook')}><Facebook className='footer-logo clickable' /></a>
        <a href='https://instagram.com/queer.ist' onClick={handleClickLinkCb('instagram')}><Instagram className='footer-logo clickable' /></a>
        <a href='https://twitter.com/QueerIST' onClick={handleClickLinkCb('twitter')}><Twiter className='footer-logo clickable' /></a>
        <a href='https://github.com/QueerIST' onClick={handleClickLinkCb('github')}><GitHub className='footer-logo clickable' /></a>
        <a href='mailto:queerist.sa@aeist.pt' onClick={handleClickLinkCb('email')}><Email className='footer-logo clickable' /></a>
      </div>
      <div className='footer-text'>
        <address>
          Encontra-nos pessoalmente no Instituto Superior Técnico!<br />
          Av. Rovisco Pais 1,<br />
          1049-001 Lisboa
        </address>
      </div>
    </footer>
  )
}
