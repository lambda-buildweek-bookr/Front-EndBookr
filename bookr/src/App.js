import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, NavLink } from "react-router-dom";
import BookForm from "./components/BookForm.js";
import Book from "./components/Book.js";
import Reviews from "./components/Reviews.js";
import Books from "./components/Books.js";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import BookSummary from "./components/BookSummary";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import axios from "axios";
import "./App.css";

const View = ConditionalRender(Books)(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://bookr-buildweek-backend.herokuapp.com/api/books")
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ books: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // deleteBook = event => {
  //   axios
  //     .delete(`http://localhost:3000/books/${event.target.id}`)
  //     .then(res => {
  //       this.setState({ books: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="book-form">Add Book</NavLink>
        </nav> */}
        <Route path="/login" component={Login} />

        <Route exact path="/" component={Books} />
      

        <Route path="/review" component={Reviews} />
        <Route

          exact
          path="/"
          render={props => (
            <Books
              {...props}
              books={this.state.books}
              deleteBook={this.deleteBook}
            />
          )}
        /> */}
        <Route path="/book-form" component={BookForm} />
        <Route
          path="/books/:id"
          render={props => {
            return <BookSummary {...props} />;
          }}
        />
      </div>
    );
  }
}

export default App;
