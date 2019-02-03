import React, { Component } from 'react'
import { Header, Pages, Footer } from './components'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Header />
          <Pages />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
