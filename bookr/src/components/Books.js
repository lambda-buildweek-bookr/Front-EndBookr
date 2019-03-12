import React, { Component } from "react";

import Book from "./Book";

class Books extends Component {
  render() {
    return (
      <div className="container">
        {/* <h1>List Of Books</h1> */}
        {/* <ul> */}
        {this.props.books.map(book => {
          return (
            <Book
              title={book.title}
              id={book.id}
              author={book.author}
              description={book.brief_desc}
              image={book.image_url}
              key={book.id}
              deleteBook={this.props.deleteBook}
            />
          );
        })}
        {/* </ul> */}
      </div>
    );
  }
}

export default Books;
