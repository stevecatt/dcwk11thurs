import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'

export class UpdateBook extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      genre:"",
      publisher:"",
      year:"",
      path: "",
      id:""
    }
  }

  
  

  
  handleTextBoxChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  
  }
  
  handleUpdateBookClick = () => {
  
    
  
    fetch('http://localhost:5000/api/update-book', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: this.state.name,
      year: this.state.year,
      genre: this.state.genre,
      publisher: this.state.publisher,
      id:this.state.id
    })
  })
  
  }
  componentDidMount(){
    console.log(this.props.match.params.book)
    this.setState({
      id: this.props.match.params.book
    })
    
  }

  
  render() {
    return (
      <div>
        <h1>Update</h1>
        
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter name" name="name" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter genre" name="genre" />
       <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter publisher" name="publisher" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter year" name="year" />
        <button onClick={this.handleSaveBookClick}>Save</button>
      </div>
    )
  }

}
