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

const BookCard = props => {
  return (
    <Card className="card">
      <CardActionArea>
        <CardHeader
          style={{ height: "75px" }}
          title={props.book.author}
          // subheader={props.book.author}
        />

        <img className="card-img" src={props.book.image_url} alt="img" />
      </CardActionArea>
      <CardContent>
        <Typography component="p">"{props.book.title}"</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={ev => props.deleteBook(ev, props.book.id)}
          size="small"
          color="primary"
        >
          Delete
        </Button>
        <Link to={`/books/${props.book.id}`}>
          <Button size="small" color="primary">
            Add Review
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BookCard;
