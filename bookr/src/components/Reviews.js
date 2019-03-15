import React, {Component} from 'react';
import axios from 'axios';
import './Reviews.css';

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

  addReview = (event) => {
    event.preventDefault()

    const infoReview = {
      review: this.state.review,
      rating: this.state.rating,
      user_id: 7,
      book_id: 12
    }
    const token = localStorage.getItem("jwt");
     const requestOptions = {
       headers: {
         authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRhdmluYSIsImlhdCI6MTU1MjU5MDgyOSwiZXhwIjoxNTUyNjc3MjI5fQ.Dx3DBpdG8750ERZ0trXndXsdb47EBuxk7RzOLsspFrM'
       }
     };
     console.log(infoReview)
    axios
      .post('https://bookr-buildweek-backend.herokuapp.com/api/reviews/add/12', infoReview, requestOptions)
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
        <form onSubmit={this.addReview}>
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

      </div>
    )
  }
}

export default Reviews;
