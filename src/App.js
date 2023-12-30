import React, { Component } from 'react'
import { Header, Pages, Footer } from './components'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './helpers'

import data from './data.json'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop>
            <Header />
            <Pages data={data} />
            <Footer />
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App;
