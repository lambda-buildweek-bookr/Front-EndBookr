import React from 'react';

const Book = props => {
  return (
    <div className="book">
      <h2>{props.name}</h2>
      <p>{props.author}</p>
      <button id={props.id} onClick={props.deleteBook}>Delete</button>
    </div>
  )
}

export default Book;
