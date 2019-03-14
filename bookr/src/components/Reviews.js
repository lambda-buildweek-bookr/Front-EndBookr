import React, {Component} from 'react';
import axios from 'axios';

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      review: '',
      reviewer: 'Davina'
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRatings = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAddReview = event => {
    event.preventDefault()

    const infoReview = {
      review: this.state.review,
      rating: this.state.rating,
      reviewer: this.state.reviewer,
      user_id: 1
    }
    this.addReview(infoReview)
    this.setState({
      numberRating: 0,
      review: '',
    })
    this.setTimeout((window.location.reload()), 500)
  }

  addReview = (event, infoReview) => {
    //event.preventDefault()

    const bookId = this.props.id

    axios
      .post('https://bookr-buildweek-backend.herokuapp.com/api/reviews/bookId', infoReview)
      .then(res => {
        console.log(res.data)
        this.setState({ review: res.data })
      })
      .catch(err => {
        console.log(err)
      })

      axios
        .get('https://bookr-buildweek-backend.herokuapp.com/api/reviews/bookId')
        .then(res => {
          console.log(res.data)
          this.setState({ review: res.data })
        })
        .catch(err => {
          console.log(err)
        })

  }


  render() {
    return (
      <div className="review">
        <h1>Add A Review</h1>
        <form onSubmit={this.handleAddReview}>
          <div>
            <input type="text"
            name="review"
            value={this.state.review}
            onChange={this.handleChange}
            size="50"
            placeholder="enter a review"
            />
            <input type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleRatings}
            min="1"
            max="5"
            />
          </div>
          <button type="submit">Submit A Review</button>
        </form>
        <p>{this.state.review}</p>
      </div>
    )
  }
}

export default Reviews;
