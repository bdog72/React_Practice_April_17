import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
export default class App1 extends Component {
  render () {
    return (
      <div>
        <Image
          className='beagle1'
          src='https://vetstreet.brightspotcdn.com/dims4/default/ed822f6/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F75%2F371580ca7a11e0ad9e12313817c323%2Ffile%2FBeagle-1-645mk062311.jpg'
          alt=''
          responsive
        />
      </div>
    )
  }
}
