import React, { Component } from 'react'
import { Header, Pages, Footer } from './components'
import { BrowserRouter } from 'react-router-dom'
import data from './data.json'
import { ScrollToTop } from './helpers'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <React.Fragment>
            <Header />
            <Pages data={data} />
            <Footer />
          </React.Fragment>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App;
