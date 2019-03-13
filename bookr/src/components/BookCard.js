import React from "react";

const BookCard = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <div>
        Author: <em>{props.book.author}</em>
      </div>
      <div>
        Description: <strong>{props.book.brief_desc}</strong>
      </div>
    </div>
  );
};

export default BookCard;
