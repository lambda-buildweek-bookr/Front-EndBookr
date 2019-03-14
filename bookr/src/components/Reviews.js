import React, { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      review: "",
      reviewer: "Davina"
    };
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // handleRatings = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // addReview = event => {
  //   event.preventDefault();

  //   const infoReview = {
  //     review: this.state.review,
  //     rating: this.state.rating,
  //     reviewer: this.state.reviewer
  //   };
  //   this.props.addReview(infoReview);
  //   this.setState({
  //     numberRating: 0,
  //     review: ""
  //   });
  //   this.setTimeout(window.location.reload(), 500);
  // };

  render() {
    return (
      <div className="review">
        <h1>Add A Review</h1>
        <form onSubmit={this.props.addReview}>
          <div>
            <input
              type="text"
              name="review"
              value={this.props.review}
              onChange={this.props.handleChange}
              size="50"
              placeholder="enter a review"
            />
            {/* <input
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.handleRatings}
              min="1"
              max="5"
            /> */}
          </div>
          <button type="submit">Submit A Review</button>
        </form>
      </div>
    );
  }
}

export default Reviews;
