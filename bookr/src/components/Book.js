import React from "react";
import BookSummary from "./BookSummary";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import "bootstrap/dist/css/bootstrap.min.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  componentDidMount() {
    console.log(this.props.match);
    this.getReviews(this.props.match.params.id);
  }

  getReviews = id => {
    axios
      .get(`https://bookr-buildweek-backend.herokuapp.com/api/reviews/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          reviews: res.data.reviews
        });
      })
      .catch(err => {
        console.log(err);
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

            {/* <img className="card-img" src={this.props.book.image_url} alt="img" /> */}
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
            {/* <Button
          onClick={ev => this.props.deleteBook(ev, this.props.book.id)}
          size="small"
          color="primary"
        >
          Delete
        </Button> */}
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
        <Card>
          {this.state.reviews.map(book => (
            <Typography key={book.id}>{book.review}</Typography>
          ))}
        </Card>
      </>
    );
  }
}
