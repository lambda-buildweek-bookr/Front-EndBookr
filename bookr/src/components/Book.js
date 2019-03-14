import React from "react";
import BookSummary from "./BookSummary";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert
} from "reactstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      isOpen: false
    };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
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
              <Modal isOpen={this.state.isOpen}>
                <ModalHeader toggle={this.toggleModal}>Add review</ModalHeader>

                <ModalBody>
                  This book is no bueno mainly because it's really late and I
                  need to sleep
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary">Cancel</Button>
                  <Button color="primary">Save</Button>
                </ModalFooter>
              </Modal>

              <Button
                style={{
                  width: "300px",
                  // border: "1px solid #3F51B7",

                  marginLeft: "80%"
                }}
                size="large"
                color="primary"
                onClick={this.toggleModal}
              >
                Add Review
              </Button>
            </Link>
          </CardActions>
        </Card>
      </>
    );
  }
}
