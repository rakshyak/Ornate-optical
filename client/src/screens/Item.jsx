import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getItemById } from '../services/items'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: null
    }
  }

  async componentDidMount() {
    try {
      const item = await getItemById(this.props.match.params.id)
      this.setState({ item })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { item } = this.state

    if (!item) {
      return <p>sorry Item of stock</p>
    }

    return (
      <Layout>
        <div className="item">
          <Link to="/items">
            <span> Back to all glasses</span>
          </Link>
          <h4>{item.title}</h4>
          <p>Link: {item.link}</p>
          <div className="buttons">
            <button>
                add review
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Item
