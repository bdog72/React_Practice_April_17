import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
export default class App2 extends Component {
  render () {
    return (
      <div>
        { ex1 }
        <br />
        { But }
      </div>
    )
  }
}
const ex1 = <h2>Bdog you the man</h2>
const But = <ButtonToolbar>
  <Button bsStyle='primary'>Primary</Button>
  <Button bsStyle='danger'>Danger</Button>
</ButtonToolbar>
