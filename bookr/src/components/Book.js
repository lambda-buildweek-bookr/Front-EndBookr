import React from "react";
import SingleReview from "./SingleReview";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddReview from "./AddReview";
// import "bootstrap/dist/css/bootstrap.min.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      review: "",
      rating: "",
      reviewer: ""
    };
  }
  componentDidMount() {
    this.getReviews(this.props.match.params.id);
  }

  getReviews = id => {
    axios
      .get(`https://bookr-buildweek-backend.herokuapp.com/api/reviews/${id}`)
      .then(res => {
        this.setState({
          reviews: res.data.reviews
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  addReview = (event, infoReview) => {
    event.preventDefault();
    infoReview.user_id = localStorage.getItem("id");
    infoReview.book_id = this.props.book.id;

    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    console.log(infoReview);
    axios
      .post(
        `https://bookr-buildweek-backend.herokuapp.com/api/reviews/add/${
          this.props.book.id
        }`,
        infoReview,
        requestOptions
      )
      .then(res => {
        console.log(res.data);
        var currentReviews = this.state.reviews;

        this.setState({
          reviews: [...currentReviews, res.data],
          reviews: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
        <Card style={{ width: "800px" }} className="book-card">
          <CardActionArea>
            <CardHeader
              style={{ height: "75px" }}
              title={this.props.book.title}
              subheader={this.props.book.author}
            />
          </CardActionArea>
          <CardContent>
            <Typography component="p">
              "{this.props.book.detailed_desc}"
            </Typography>

            <p>
              <strong>Published by:</strong> {this.props.book.publisher}
            </p>
          </CardContent>
          <CardActions>
            <Link
              style={{ textDecoration: "none" }}
              to={`/books/${this.props.book.id}`}
            >
              <Link style={{ textDecoration: "none" }} to="/review">
                <Button
                  style={{
                    width: "300px",
                    border: "1px solid #3F51B5",
                    marginLeft: "80%"
                  }}
                  size="large"
                  color="primary"
                >
                  Add Review
                </Button>
              </Link>
            </Link>
          </CardActions>
        </Card>
        <AddReview addReview={this.addReview} bookId={this.props.book.id} />
        <div>
          {this.state.reviews.map(book => (
            <SingleReview
              key={book.id}
              rating={book.rating}
              review={book.review}
              user={this.user}
            />
          ))}
        </div>
      </>
    );
  }
}
