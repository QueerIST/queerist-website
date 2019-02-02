import React, { Component } from 'react'
import { Header, Page, Footer } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Page/>
        <Footer/>
      </div>
    );
  }
}

export default App;
