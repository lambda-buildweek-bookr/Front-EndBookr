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

  render() {
    return (
      <div>
        {this.state.books.map(book => (
          <Link to={`/books/${book.id}`}>
            <BookCard key={book.id} book={book} />
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
