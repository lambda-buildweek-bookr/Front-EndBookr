import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, NavLink } from "react-router-dom";
import BookForm from "./components/BookForm.js";
import Book from "./components/Book.js";
import Books from "./components/Books.js";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import BookSummary from "./components/BookSummary";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import axios from "axios";
import Reviews from "./components/Reviews";
import "./App.css";

const View = ConditionalRender(Books)(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />

        <Route path="/login" component={Login} />
        <Route path="/review" component={Reviews} />
        <Route exact path="/" component={Books} />
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
