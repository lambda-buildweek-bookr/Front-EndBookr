import React, {Component} from 'react';

import Book from './Book'

class Books extends Component {
  render() {
    return (
      <div className="book-page">
        <h1>List Of Books</h1>
        <ul>
          {this.props.books.map(book => {
            return (
              <Book name={book.name} id={book.id} author={book.author} key={book.id} deleteBook={this.props.deleteBook} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Books;
