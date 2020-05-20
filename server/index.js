const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/books', ctrl.getAllBooks)
app.post('/api/books', ctrl.createBook)
app.put('/api/books/:book_id', ctrl.editBook)
app.delete('/api/books/:book_id', ctrl.deleteBook)




app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))