import React, { Component } from 'react'
import App2 from './App2'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class ReactRoute extends Component {
  render () {
    return (
      <div>
        <BasicExample />
      </div>
    )
  }
}

const Example1 = () => (
  <div>
    <App2 />
  </div>
)

const Example2 = () => (
  <div>
    <h2>Example 2</h2>
  </div>
)

const Example3 = () => (
  <div>
    <h2>Example 3</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Example 1</Link></li>
        <li><Link to='/example2'>Example 2</Link></li>
        <li><Link to='/example3'>Example 3</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Example1} />
      <Route exact path='/example2' component={Example2} />
      <Route exact path='/example3' component={Example3} />
    </div>
  </Router>
)
