import React, { Component } from 'react'
import { getItemsMen, getItemsWomen } from '../services/item'
import '../styles/items.css'
import { Redirect } from 'react-router-dom'

export default class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      image: '',
      changed: false
    }

  }

  async componentDidMount() {
    this.fetchItems()
  }

  handleChange = (id) => {
    this.props.history.push(`/items/${id}`)
  }

  fetchItems = async () => {
    try {
      if (this.props.match.path === "/glasses-women") {
        const items = await getItemsWomen()
        this.setState({ items })
      } else if (this.props.match.path === "/glasses-men") {
        const items = await getItemsMen()
        this.setState({ items })
      }
    } catch (err) {
      console.error(err)
    }
  }

  renderItems = () => {
    if (this.state.items.length) {
      return this.state.items.map(item => {
        return (
          <div className='items-box' onClick={() =>
            this.props.history.push(`items/${item.id}`)}>
            <div className="items-image">
              <img src={`https://ornate-optical.s3.us-east-2.amazonaws.com/${item.image}`} alt=""/>
            </div>
            <div className="desc-cont">
            <div className="items-id" key={item.id}>
                </div>
            <div className="details">MORE DETAILS</div>
                <div className="items-name">
              <h4>{item.name}</h4>
              </div>
              <div className="items-price">
              <h4>${item.price}</h4>
              </div>
              </div>
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
    if (this.state.changed) {
      return <Redirect to={this.props.match.path} />
    }
    if (!user) {
      return (
        <>
          {!items.length ? <h3>No glasses at this time.</h3> : null}
          <div className="items-container"><img src='https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />{this.renderItems()}<img src='https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />{this.renderItems()}
          </div>
        </>
      )
    } else {
      return (
        <div className="landing">
          <div className="main">
            {!this.state.items.length ? <h3>No glasses at this time.</h3> : null}
            <div className="items-container"><img src='https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />{this.renderItems()}<img src='https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />{this.renderItems()}</div>
          </div>
        </div>
      )
    }
  }
}
