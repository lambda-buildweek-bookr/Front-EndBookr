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
  return (
    <Card style={{ width: "800px" }} className="book-card">
      <CardActionArea>
        <CardHeader
          style={{ height: "75px" }}
          title={props.book.title}
          subheader={props.book.author}
        />

        {/* <img className="card-img" src={props.book.image_url} alt="img" /> */}
      </CardActionArea>
      <CardContent>
        <Typography component="p">"{props.book.detailed_desc}"</Typography>

        <p>
          <strong>Published by:</strong> {props.book.publisher}
        </p>
      </CardContent>
      <CardActions>
        {/* <Button
          onClick={ev => props.deleteBook(ev, props.book.id)}
          size="small"
          color="primary"
        >
          Delete
        </Button> */}
        <Link style={{ textDecoration: "none" }} to={`/books/${props.book.id}`}>
          <Button
            style={{
              width: "300px",
              border: "1px solid #3F51B7",

              marginLeft: "80%"
            }}
            size="large"
            color="primary"
          >
            Add Review
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Book;
