// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

import React, { type PropsWithChildren } from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../components/layout.css'
import 'aos/dist/aos.css'
import '../webfontkit/fontstylesheet.css'

export function Layout ({ children }: PropsWithChildren) {
  return (
    <React.StrictMode>
      <Header />
      {children}
      <Footer />
    </React.StrictMode>
  )
}
