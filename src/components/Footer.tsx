import Email from '../svg/email.svg?react'
import Facebook from '../svg/facebook.svg?react'
import GitHub from '../svg/github.svg?react'
import Instagram from '../svg/instagram.svg?react'
import Twiter from '../svg/twitter.svg?react'
import './footer.css'

export function Footer () {
  return (
    <footer>
      <div className='footer-logos'>
        <a id='facebook-link' href='https://facebook.com/QueerIST'><Facebook className='footer-logo clickable' /></a>
        <a id='instagram-link' href='https://instagram.com/queer.ist'><Instagram className='footer-logo clickable' /></a>
        <a id='twitter-link' href='https://twitter.com/QueerIST'><Twiter className='footer-logo clickable' /></a>
        <a id='github-link' href='https://github.com/QueerIST'><GitHub className='footer-logo clickable' /></a>
        <a id='email-link' href='mailto:queerist.sa@aeist.pt'><Email className='footer-logo clickable' /></a>
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
