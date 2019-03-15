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
    <>
      <Card style={{ width: "600px", marginTop: "3%" }} className="book-card">
        <div
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <i
            style={{ color: "#3F51B5" }}
            className="fas fa-user-circle fa-2x"
          />
          <div style={{ fontSize: "17px" }}>{localStorage.name}</div>

          <span> {props.rating}/5</span>
        </div>
        <CardHeader />

        <CardContent>
          <p>{props.review}</p>
        </CardContent>
      </Card>
    </>
  );
}
