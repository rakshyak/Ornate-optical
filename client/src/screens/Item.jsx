import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'
import { getItemById } from '../services/item'
import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      displayReview: false
    }
  }

  async componentDidMount() {
    try {
      console.log(this.props)
      const item = await getItemById(this.props.match.params.id)
      // const item = await getItemById(1)
      this.setState({ item })
    } catch (err) {
      console.error(err)
    }
  }
  toggleAddReviewForm = () => {
    this.setState(state => ({
      displayReview: !state.displayReview
    }))
  }
  reviewForm = () => {
    while (this.state.displayReview) {
      const { comment } = this.state
      return (
        <form onSubmit={this.onAddReview}>
          <div className="sup-username">
            <label>Review</label>
            <input
              required
              type="textarea"
              name="comment"
              value={comment}
              placeholder="Enter Comment"
              onChange={this.handleChange}
            />
            <input type="submit" value="ADD REVIEW" />
          </div>
        </form>
      )
    }
  }
  renderReviews = () => {
    const { Reviews } = this.state.item
    return Reviews.map((review, input) => {
      return (
        <div className="ratingList" key={input}>
          <div className="rating" >
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <div className="review">
            <h4>{review.review}</h4>
          </div>
        </div>
      )
    })
  }

  render() {
    const { item } = this.state

    if (!item) {
      return <p>SORRY ITEM IS OUT OF STOCK</p>
    }
    else {
      return (
        <div className="item-details">
          <div className="image-carosel">
            <img src="https://images.unsplash.com/photo-1524255684952-d7185b509571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="item-container">
            <div className="item-description">
              <h4>{item.name}</h4>
              <p><strong>USD</strong>: ${item.price}</p>
              <p>item.description -- need to add to DB</p>
              <p>{item.quantity} left</p>
              <div className="item-colors">
                <p>COLOR</p>
              </div>
              <button className="cartButton" onClick={this.addToCart}>Add To Bag</button>
            </div>

            <div className="add-review">
              <button onClick={() => { this.toggleAddReviewForm() }}>
                ADD REVIEW
            </button>
              {this.reviewForm()}
            </div>
            <div className="reviews">
              {this.renderReviews()}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Item
