import { Outlet, ScrollRestoration } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'

export function Layout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  )
}
