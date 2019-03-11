import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, NavLink } from 'react-router-dom';
import BookForm from './components/BookForm.js';
import Book from '/.components/Book.js';
import Books from './components/Books.js';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/books')
      .then(res => {
        console.log(res)
        this.setState({ books: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteBook = event => {
    axios
      .delete(`http://localhost:3000/books/${event.target.id}`)
      .then(res => {
        this.setState({ books: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="book-form">Add Book</NavLink>
        </nav>
        <Route exact path="/" render={props => (
          <Books books={this.state.books} deleteBook={this.deleteBook} />
        )}/>
        <Route path="/book-form" component={BookForm} />
      </div>
    );
  }
}

export default App;
