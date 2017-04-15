import React, { Component } from 'react'
// import { Item, Image } from 'semantic-ui-react'
export default class ProductList extends Component {
  render () {
    const product = Seed.products[0]
    return (
      <div>
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          votes={product.votes}
        />
      </div>
    )
  }
}

class Product extends React.Component {
  render () {
    return (
      <div>
        A
        <div className='Item'>
          B
          <img src='' alt='' />
        </div>
        <div>
          C
          <div>
            D
            <a>Howdy</a>
            <p>React Practice</p>
          </div>
          <div>
            E
            <span>Coded By</span>
            <img src='' alt='' />
          </div>
        </div>
      </div>
    )
  }
}
const products = [
  {
    id: 1,
    title: 'BreakBeat',
    description: 'Bass',
    votes: generalVoteCount()
  }
]
