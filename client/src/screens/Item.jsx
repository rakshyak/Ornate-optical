import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'
import { getItemById, setReview, deleteReview} from '../services/item'
import { Redirect } from 'react-router-dom'
import '../styles/item.css'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      displayReview: false,
      userReview: '',
      deleted: false

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
  onAddReview = (event) => {
    event.preventDefault();
    const { id } = this.state.item
    console.log(this.state)
    console.log(event.target.rating.value)
    const review = {
      rating: event.target.rating.value,
      review: this.state.userReview,
      itemId: id,
      userId: null
    }
    const { history, setItem } = this.props
    setReview(id, review)
      .then(res => setItem(res.review))
      .then()
      .catch(console.error)
  }
  reviewForm = () => {
    while (this.state.displayReview) {
      const { comment } = this.state
      return (
        <form onSubmit={(e) => { this.onAddReview(e) }}>
          <div className="review-form">
            <div className="star-rating">
              <legend>Please rate:</legend>
              <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
              <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
              <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
              <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
              <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
            </div>
            <label>HAVE IT? WRITE A REVIEW.</label>
            <input
              required
              type="textarea"
              name="userReview"
              value={comment}
              placeholder="Enter Comment"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      )
    }
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })
  }

  renderReviews = () => {
    const { Reviews } = this.state.item
    return Reviews.map((review, index) => {
      return (
        <div className="ratingList" key={index}>
          <div className="review">
          <button className="del-wrap" onClick={this.destroy}>
                x
            </button>
            {this.showStar(review.rating)}
            <p>{review.review}</p>
          </div>
        </div>
      )
    })
  }
  destroy = () => {

    let reviewId = this.state.userReview.id
    deleteReview(reviewId)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }
  render() {
    const { review, deleted } = this.state

    if (!review) {
      return <p>Loading...</p>
    }
  

  if (deleted) {
    return (
      <Redirect
        to={{
          pathname: '/item',
          state: { msg: 'Review succesfully deleted!' }
        }}
      />
    )
  }
} 

  showStar = (n) => {
    let stars = []
    let i = 0;
    for (i; i < n; i++) {
      stars.push(<span style={{ color: 'orange', background: 'ornage' }}>★</span>)
    }
    for (i = i; stars.length < 5; i++) {
      stars.push(<span>☆</span>)
    }
    return stars
  }

  render() {
    const { item } = this.state
    console.log('state here', this.state)
    if (!item) {
      return <p>SORRY ITEM IS OUT OF STOCK</p>
    }
    else {
      return (
        <div className="item-details">
          <div className="item-top">
            <div className="image-carosel">
              <img src="https://images.unsplash.com/photo-1524255684952-d7185b509571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div className="item-container">
              <div className="item-description">
                <h4>{item.name}</h4>
                <p><strong>USD</strong>: ${item.price}</p>
                {/* <p>item.description -- need to add to DB</p> */}
                <p>{item.quantity} left</p>
                <img src={item.image} alt="" />
                <div className="item-colors">
                  <p>COLOR</p>
                </div>
                <button className="cartButton" onClick={this.addToCart}>Add To Bag</button>
              </div>

              <div className="add-review">
                <button onClick={() => { this.toggleAddReviewForm() }}>
                  ADD REVIEW
            </button>
              </div>
              <div className="reviews">
                {this.reviewForm()}
                {this.renderReviews()}
              </div>
            </div>
          </div>
          <div className="bottom-hero">
            <h2>GIFT-WRAPPING AVAILABLE FOR ALL OF YOUR HOLIDAY NEEDS</h2>
            <img src="https://images.unsplash.com/photo-1482173074468-5b323335debe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
      )
    }
  }
}

export default Item
