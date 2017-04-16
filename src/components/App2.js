import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
export default class App2 extends Component {
  render () {
    const ex1 = <h2>Bdog you the man</h2>
    const But = (
      <a href='https://www.yahoo.com'><ButtonToolbar>
        <Button bsStyle='primary'>Primary</Button>
        <Button bsStyle='danger'>Danger</Button>
      </ButtonToolbar></a>
    )
    return (
      <div className='app2'>
        {ex1}
        {But}
      </div>
    )
  }
}
