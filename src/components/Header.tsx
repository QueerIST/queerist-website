import { useState } from 'react'

import classNames from 'classnames'
import ReactGA from 'react-ga4'
import Headroom from 'react-headroom'
import { NavLink } from 'react-router-dom'

import logo from '../img/logo so letras brancas.png'
import Menu from '../svg/menu.svg?react'

import './header.css'

export function Header () {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClickMenuButton = () => {
    ReactGA.event({
      category: 'NavMenuToogle', // Required
      action: `Menu ${openMenu ? 'fecha' : 'abre'}` // Required
    })
    setOpenMenu(!openMenu)
  }

  const handleClickLink = (page: string) => {
    ReactGA.event({
      category: 'NavMenuLink', // Required
      action: `Navega ${page}` // Required
    })
    setOpenMenu(false)
  }

  const handleClickLinkCb = (page: string) => () => { handleClickLink(page) }

  const className = classNames('navlink', openMenu && 'navmenu-open')

  return (
    <Headroom>
      <div className='navbar'>
        <div className='navbar-content'>
          <div className='navbar-delimiter'>
            <div className='navtop'>
              <div className='navtop-side' />
              <NavLink className='navimg' end to='/' onClick={handleClickLinkCb('logo')}>
                <img src={logo} alt='QueerIST logo' />
              </NavLink>
              <Menu className='navtop-side' onClick={handleClickMenuButton} />
            </div>
            <NavLink className={className} to='/sobre' onClick={handleClickLinkCb('sobre')}>Sobre</NavLink>
            <NavLink className={className} to='/eventos' onClick={handleClickLinkCb('eventos')}>Eventos</NavLink>
            <NavLink className={className} to='/projetos' onClick={handleClickLinkCb('projetos')}>Projetos</NavLink>
            <a className={className} href='https://queerist.tecnico.ulisboa.pt/blog/' onClick={handleClickLinkCb('blog')}>Blog</a>
            <a className={className} href='https://eepurl.com/dnApYP' onClick={handleClickLinkCb('newsletter')}>Newsletter</a>
          </div>
        </div>
      </div>
    </Headroom>
  )
}
