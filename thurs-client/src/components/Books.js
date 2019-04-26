import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

export class Books extends Component {
    //not using this anymore
    // updateBook =(book) => {
    //     console.log(book)
    //     let updateBookLink = "/update-book/"+book
    //     this.props.history.push(updateBookLink)
        
        
    //  }


     
    //  render(){

    //     let books = this.props.books

    //     let bookListItems = books.map((book, index)=>{
        
    //        //make sure the button calls a function {() => this.props.removeTaskCallback(task) if trying to pass something like "task"}
    //         return <div key={index}>         
    //                          <li>{book.book_name}</li>
    //                          <li>{book.book_genre}</li>
    //                          <li>{book.book_publisher}</li>
    //                          <li>{book.book_year}</li>
    //                          <button onClick={()=>this.updateBook(book.book_name)}>Update Book Info</button>
                        
                           
    //                 </div> 
    //     })
        
    //     return(
            
           
    //         <div>
    //           <h1>Here Be Books</h1>
             
    //          <ul>{bookListItems}</ul>
    //         </div>
        
    //     )
        
    // }
}