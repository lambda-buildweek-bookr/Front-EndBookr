import React, { Component } from "react";

import { Route } from "react-router-dom";
import BookForm from "./components/BookForm.js";

import Books from "./components/Books.js";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import BookSummary from "./components/BookSummary";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";

import Reviews from "./components/Reviews";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

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
        <Route
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        />
        <Route path="/review" component={Reviews} />
        <Route exact path="/" component={View} />
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
