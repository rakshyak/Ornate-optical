import React, { Component } from 'react'
import Layout from '../shared/Layout'
import { getItems } from '../services/item'
import '../styles/items.css'

export default class Items extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      image: ''
    }
    
  }
  
  async componentDidMount() {
    this.fetchItems()
  }

  handleChange = () => {
   this.renderItems()
  }

  fetchItems = async () => {
    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
    }
  }
  
  renderItems = () => {
    if (this.state.items.length) {
      return this.state.items.map(item => {
        return (
        <div className='item-box'>
          <div className="item" key={item.id}  onClick={() =>
            this.props.history.push(`${this.props.match.url}/${item.id}`)}>
            <h4>{item.name}</h4>
            <>{this.image} </>
          </div>
          <div onClick={this.handleChange}>click me </div>
          </div>                                                  
        )
      })
    } else {
      return null
    }
  }

  render() {
    const { user } = this.props
    const { items } = this.state
    if (user) {
      return (
        <Layout>
          {!items.length ? <h3>No glasses at this time.</h3> : null}
          <div className="item-container"><img src='https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}<img src='https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}
          </div>
        </Layout>
      )
    } else {
      return (
        <div className="landing">
          <div className="main">
            {!this.state.items.length ? <h3>No glasses at this time.</h3> : null}
            <div className="item-container"><img src='https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}<img src='https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}</div>
          </div>
        </div>
      )
    }
  }
}
