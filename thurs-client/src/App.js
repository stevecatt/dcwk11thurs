import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { BookList } from './components/BookList';
//import { DisplayName } from './DisplayName';
//import {Books} from './components/Books'



class App extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      genre:"",
      publisher:"",
      year:"",
      books: []
    }

  }

  // getAllBooks = ()=>{
  //   let url = 'http://localhost:5000/api/books'

  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => {
  //      this.setState({
  //       books: json
        
  //     })
  //     //callback(json)
  //   })
  // }

  // componentDidMount() {

  //   //this.getAllBooks()

  // }

// inputName= (name)=>{
//   this.setState({
//     name:name
//   })
// }
// handleTextBoxChange = (e) => {

//   this.setState({
//     [e.target.name]: e.target.value
//   })

// }

// handleSaveBookClick = () => {

  

//   fetch('http://localhost:5000/api/books', {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json'
// },
//   body: JSON.stringify({
//     name: this.state.name,
//     year: this.state.year,
//     genre: this.state.genre,
//     publisher: this.state.publisher
//   })
// })
// .then(this.getAllBooks())
// }


render() {

  


  return (
    <div>
      
      <h1>HOME PAGE</h1>
      
    </div>
  )
}
}

export default App;
