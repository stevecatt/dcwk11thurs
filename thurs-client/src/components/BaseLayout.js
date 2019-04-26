import React, {Component} from 'react';
import './BaseLayout.css';
import {BookList} from './BookList'
import {AddBook} from './AddBook'
import {Link, NavLink} from 'react-router-dom'
import {DeleteBook} from './DeleteBook'
import {UpdateBook} from './UpdateBook'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


export class Menu extends Component {

  render() {
    return (
      <ul className="menu">
      <li><NavLink to="/" className="link">Home</NavLink></li>
      <li><NavLink to="/view-all-books">View All Books</NavLink></li>
      <li><NavLink to="/add-book">Add Book</NavLink></li>
      <li><NavLink to="/delete-book">Delete Book</NavLink></li>
      
      </ul>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <div className="footer">Copyright 2019</div>
    )
  }

}

export class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Menu />
          {this.props.children}
        <Footer />
      </div>
    )
  }

}
