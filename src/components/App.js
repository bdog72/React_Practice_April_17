import React, { Component } from 'react'
import App1 from './App1'
import ReactRoute from './ReactRoute'
class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, World!</h1>
        <App1 />
        <br />
        <ReactRoute />
        <br />
      </div>
    )
  }
}

export default App
