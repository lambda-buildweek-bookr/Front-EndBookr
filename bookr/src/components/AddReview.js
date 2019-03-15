import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      review: "",
      reviewer: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRatings = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addReview = event => {
    var infoReview = {
      review: this.state.review,
      rating: this.state.rating
    };
    this.props.addReview(event, infoReview);
  };

  render() {
    return (
      <div style={{ margin: "8% 0" }} className="review">
        <Typography style={{ fontSize: "24px", marginBottom: "3%" }}>
          Add review and rating
        </Typography>
        <form onSubmit={this.addReview}>
          {/* <div> */}
          <TextField
            type="text"
            name="review"
            value={this.state.review}
            onChange={this.handleChange}
            style={{ width: "575px", marginRight: "3%" }} // size="50"
            placeholder="Add review here..."
          />
          <TextField
            style={{ width: "50px", marginRight: "1%" }}
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleRatings}
            min="1"
            max="5"
          />
          {/* </div> */}
          <Button
            style={{
              backgroundColor: "#3F51B5",
              color: "white",
              marginLeft: "3%"
              //   width: "300px",
              //   border: "1px solid "
            }}
            // size="large"

            type="submit"
          >
            Submit
          </Button>
        </form>
        {/* <p>{this.state.review}</p> */}
      </div>
    );
  }
}

export default AddReview;
