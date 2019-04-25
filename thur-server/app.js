const express= require('express')
const bodyParser= require('body-parser')
const app = express()
const cors = require('cors')


const pgp = require('pg-promise')()
app.use(cors())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



 connectionString = {
    "host": "isilo.db.elephantsql.com",
    "port": 5432,
    "database": "wqvacxnt",
    "user": "wqvacxnt",
    "password":"bM2NzSbufCMxdKbPApBC81ccllnzndGm"
  
  }

db = pgp(connectionString)


let books = [
{name: 'Book 1'},
{name: 'Book 2'}
]

app.get('/', (req, res) => {
    res.send('hello')
})


app.post('/api/books',(req,res) => {

    let name = req.body.name
    let genre = req.body.genre
    let publisher= req.body.publisher
    let year = req.body.year
    let image = req.body.image
  
    console.log(name)
    console.log(genre)
    console.log (publisher)
    console.log (year)
    console.log(image)
  
    books.push({name:name, genre:genre, publisher:publisher, year:year, image:image})
    db.none('INSERT INTO reactbooks (book_name,book_genre,book_publisher,book_year) VALUES($1,$2,$3,$4)',[name, genre, publisher,year,])
    .then (
    res.json(books))
    
  })
  
  app.get('/api/books',(req,res) => {
    
    db.any('SELECT * FROM reactbooks')
    .then((books)=>{res.json(books)})
    
  })

  app.post('/api/delete-book',(req,res) => {

    let name = req.body.name
    
  
    console.log(name)
    
  
    db.none('DELETE FROM reactbooks WHERE book_name = $1',[name])
    .then (
    res.json(books))
    
  })




app.listen(5000,()=>{
console.log("At your service")
})