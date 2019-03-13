import React, { Component } from "react";
import axios from "axios";
import Book from "./Book";
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
  // deleteBook = (ev, id) => {
  //   ev.preventDefault();
  //   axios
  //     .delete(`https://bookr-buildweek-backend.herokuapp.com/api/books/${id}`)
  //     .then(res => {
  //       this.setState({ books: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };
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
        `https://bookr-buildweek-backend.herokuapp.com/api/books/4`,
        requestOptions
      )
      .then(res => {
        console.log("testing");
        this.setState({ books: res.data }); // This may be able to be replaced
        this.props.history.push("/"); // by this where /BookList is wherever you want to send the user, perhaps the main page of books
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.books.map(book => (
          <Link to={`/books/${book.id}`}>
            <BookCard key={book.id} book={book} deleteBook={this.deleteBook} />
          </Link>
        ))}
      </div>
    );
  }
  // render() {
  //   return (
  //     <div className="container">
  //       {/* <h1>List Of Books</h1> */}
  //       {/* <ul> */}
  //       {this.props.books.map(book => {
  //         return (
  //           <Book
  //             // book={book}
  //             title={book.title}
  //             id={book.id}
  //             author={book.author}
  //             description={book.brief_desc}
  //             image={book.image_url}
  //             key={book.id}
  //             deleteBook={this.props.deleteBook}
  //           />
  //         );
  //       })}
  //       {/* </ul> */}
  //     </div>
  //   );
  // }
}

export default Books;
