import React from "react";
import axios from "axios";
import BookCard from "./BookCard";
import Book from "./Book";

export default class BookSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
  }

  componentDidMount() {
    console.log(this.props.match);
    this.getSingleBook(this.props.match.params.id);
  }

  getSingleBook = id => {
    axios
      .get(`https://bookr-buildweek-backend.herokuapp.com/api/books/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          book: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.getSingleBook(newProps.match.params.id);
    }
  }
  render() {
    return (
      <div className="single-page-wrapper">
        <BookCard book={this.state.book} />
      </div>
    );
  }
}
