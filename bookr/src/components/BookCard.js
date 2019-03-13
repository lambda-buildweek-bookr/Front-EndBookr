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
          title={props.book.title}
          subheader={props.author}
        />

        <img className="card-img" src={props.book.image_url} alt="img" />
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

export default BookCard;
