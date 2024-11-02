import { type PropsWithChildren } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const App = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
