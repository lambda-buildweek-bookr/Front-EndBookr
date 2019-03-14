import React, { Component } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get("https://bookr-buildweek-backend.herokuapp.com/api/books")
      .then(res => {
        console.log(res);
        this.setState({ books: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteBook = (ev, id) => {
    console.log(id);
    ev.preventDefault();
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    console.log(requestOptions);
    axios
      .delete(
        `https://bookr-buildweek-backend.herokuapp.com/api/books/${id}`,
        requestOptions
      )
      .then(res => {
        console.log("testing");
        this.setState({ books: res.data });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        {this.state.books.map(book => (
          <Link style={{ textDecoration: "none" }} to={`/books/${book.id}`}>
            <BookCard key={book.id} book={book} deleteBook={this.deleteBook} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Books;
