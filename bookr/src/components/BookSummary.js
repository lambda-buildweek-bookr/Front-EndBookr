import React from "react";
import axios from "axios";
import BookCard from "./BookCard";
import Book from "./Book";

// import { Link } from "react-router-dom";

// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

export default class BookSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
  }

  componentDidMount() {
    console.log(this.props.match);
    this.getSingleBook(this.props.match.params.id);
  }

  getSingleBook = id => {
    axios
      .get(`https://bookr-buildweek-backend.herokuapp.com/api/books/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          book: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.getSingleBook(newProps.match.params.id);
    }
  }
  render() {
    return (
      <div className="single-page-wrapper">
        <BookCard styles={{ width: "600px" }} book={this.state.book} />
      </div>
    );
  }
  //   render() {
  //     return (
  //       <Card style={{ width: "600px" }} className="card">
  //         {this.state.book.map(book => (
  //           <CardActionArea>
  //             <CardHeader
  //               style={{ height: "75px" }}
  //               title={book.title}
  //               subheader={book.author}
  //             />

  //             <img className="card-img" src={book.image} alt="img" />
  //           </CardActionArea>
  //         ))}

  /* <CardContent>
          <Typography component="p">"{book.description}"</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Delete
          </Button>
          <Link to={`/books/${book.id}`}>
            <Button size="small" color="primary">
              Add Review
            </Button>
          </Link>
        </CardActions> */
}
{
  /* </Card>
    );
  }
} */
}
