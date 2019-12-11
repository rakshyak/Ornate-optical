import React, { Component } from 'react'
import Layout from '../shared/Layout'
import { getItems } from '../services/item'
import './Items.css'

export default class Items extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  async componentDidMount() {
    this.fetchItems()
  }

  fetchItems = async () => {
    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
    }
  }

  renderButton = id => {
    if (this.state.items) {
      return (
        <button
          onClick={() =>
            this.props.history.push(`${this.props.match.url}/${id}`)
          }
        >
          See More
        </button>
      )
    } else {
      return null
    }
  }

  renderItems = () => {
    if (this.state.items.length) {
      return this.state.items.map(item => {
        return (
          <div className="item" key={item.id}>
            <h4>{item.name}</h4>
            {this.renderButton(item.id)}
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
          <h4>glasses</h4>
          {!items.length ? <h3>No glasses at this time.</h3> : null}
          <div className="item-container"><img src='https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}<img src='https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
        <div className="landing">
          <h2>Ornate Optical</h2>
          <div className="main">
            {!this.state.items.length ? <h3>No glasses at this time.</h3> : null}
            <div className="item-container"><img src='https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}<img src='https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>{this.renderItems()}</div>
          </div>
        </div>
        </Layout>
      )
    }
  }
}
