import React, { Component } from 'react'
import { Header, Pages, Footer } from './components'
import { Router } from 'react-router-dom'
import { ScrollToTop } from './helpers'

import data from './data.json'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} history={this.props.history}>
        <ScrollToTop>
          <React.Fragment>
            <Header />
            <Pages data={data} />
            <Footer />
          </React.Fragment>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App;
