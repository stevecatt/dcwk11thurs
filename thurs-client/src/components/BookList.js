import React, {Component} from 'react';
import {Books} from './Books'
import {Link, NavLink} from 'react-router-dom'

export class BookList extends Component {
  constructor(){
    super()
    this.state= {
      books:[]

    }

  

    
  }


  getAllBooks = ()=>{
    let url = 'http://localhost:5000/api/books'

    fetch(url)
    .then(response => response.json())
    .then(json => {
       this.setState({
        books: json
        
      })
      //callback(json)
    })
  }

  componentDidMount() {

    this.getAllBooks()

  }

  render() {
    return (
      <div>
       <Books books={this.state.books}></Books>
      </div>
    )
  }

}
