import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function SingleReview(props) {
  return (
    <Card style={{ width: "800px" }} className="book-card">
      {/* <CardActionArea> */}
      <i className="fas fa-user-circle fa-2x" />
      <div>{localStorage.name}</div>

      <span>{props.rating}/5</span>
      <CardHeader
        style={{ height: "75px" }}
        // title={props.review}
        // subheader={props.review}
      />
      {/* <img className="card-img" src={this.props.book.image_url} alt="img" /> */}
      {/* </CardActionArea> */}
      <CardContent>
        {/* <Typography component="p">"{props.review}"</Typography> */}

        <p>{props.review}</p>
      </CardContent>
    </Card>
  );
}
