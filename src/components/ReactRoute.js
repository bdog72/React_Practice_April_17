import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class ReactRoute extends Component {
  render () {
    return <div>
      <BasicExample />
    </div>
  }
}

const Example1 = () => (
  <div>
    <h2>Example 1</h2>
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
        <li><Link to='/about'>Example 2</Link></li>
        <li><Link to='/topics'>Example 3</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Example1} />
      <Route exact path='/about' component={Example2} />
      <Route exact path='/topics' component={Example3} />

    </div>
  </Router>
)
