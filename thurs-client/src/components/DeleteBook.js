import React, {Component} from 'react';


export class DeleteBook extends Component{
    constructor(){
        super()
        this.state= {
            books:[],
            name:"",
            year:"",
            genre:"",
            publisher:""
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
    
    removeBook = (book) =>  {
        console.log("sending shit to the server")
        console.log(book)
        fetch('http://localhost:5000/api/delete-book', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
             },
        body: JSON.stringify({
        name: book,
        
    })
  })
  
  }
     
    


    render(){
        let books = this.state.books

        let bookListItems = books.map((book, index)=>{
        
           //make sure the button calls a function {() => this.props.removeTaskCallback(task) if trying to pass something like "task"}
            return <div key={index}>         
                             <li>{book.book_name}</li>
                             <button onClick={()=>this.removeBook(book.book_name)}>Delete</button>
                        
                            
                    </div>
        })
        
        return(
            
           
            <div>
              <h1>Here Be Less Books</h1>
              <ul>{bookListItems}</ul>
            </div>
        
        )
        
    }
}

