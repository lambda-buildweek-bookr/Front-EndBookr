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

const Book = props => {
  // export default class Book extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     book: null
  //   };
  // }
  // componentDidMount() {
  //   console.log(this.props.match);
  //   this.getSingleBook(this.props.match.params.id);
  // }

  // getSingleBook = id => {
  //   axios
  //     .get(`https://bookr-buildweek-backend.herokuapp.com/api/books/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         book: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.getSingleBook(newProps.match.params.id);
  //   }
  // }

  // render() {
  return (
    // <BookSummary
    //   title={this.props.title}
    //   id={this.props.id}
    //   author={this.props.author}
    //   description={this.props.brief_desc}
    //   image={this.props.image_url}
    //   book={this.props.book}
    // />
    <Card className="card">
      <CardActionArea>
        <CardHeader
          style={{ height: "75px" }}
          title={props.title}
          subheader={props.author}
        />

        <img className="card-img" src={props.image} alt="img" />
      </CardActionArea>
      <CardContent>
        <Typography component="p">"{props.description}"</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Link to={`/books/${props.id}`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
// }
export default Book;
