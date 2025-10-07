import { useState } from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'
import Headroom from 'react-headroom'

import { NavLink } from './Link'
import logo from '../img/logo so letras brancas.png'
import Menu from '../svg/menu.svg?react'

import './header.css'

export function Header () {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClickMenuButton = () => {
    ReactGA.event('select_content', {
      content_type: 'header',
      content_id: 'menu',
      content_action: !openMenu ? 'open' : 'close'
    })
    setOpenMenu(!openMenu)
  }

  const handleClickLink = (page: string, text: string) => {
    ReactGA.event('navigate_content', {
      type: 'header',
      link_page: page,
      link_text: text
    })
    setOpenMenu(false)
  }

  const handleClickLinkCb = (page: string, text: string) => () => { handleClickLink(page, text) }

  const className = classNames('navlink', openMenu && 'navmenu-open')

  return (
    <Headroom>
      <div className='navbar'>
        <div className='navbar-content'>
          <div className='navbar-delimiter'>
            <div className='navtop'>
              <div className='navtop-side' />
              <NavLink className='navimg' href='/' onClick={handleClickLinkCb('home', 'Logo')}>
                <img src={logo} alt='QueerIST logo' />
              </NavLink>
              <Menu className='navtop-side' onClick={handleClickMenuButton} />
            </div>
            <NavLink className={className} href='/sobre' onClick={handleClickLinkCb('sobre', 'Sobre')}>Sobre</NavLink>
            <NavLink className={className} href='/eventos' onClick={handleClickLinkCb('eventos', 'Eventos')}>Eventos</NavLink>
            <NavLink className={className} href='/projetos' onClick={handleClickLinkCb('projetos', 'Projetos')}>Projetos</NavLink>
            <a className={className} href='https://queerist.tecnico.ulisboa.pt/blog/' onClick={handleClickLinkCb('blog', 'Blog')}>Blog</a>
            <a id='newsletter-link' className={className} href='https://eepurl.com/dnApYP'>Newsletter</a>
          </div>
        </div>
      </div>
    </Headroom>
  )
}
