import React, { Component } from 'react'
import { Header, Page, Footer } from './components'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Header />
          <Page />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
