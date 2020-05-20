const books = []
let id = 0

module.exports= {
    getAllBooks: (req, res) => {
        res.status(200).send(books)
    },
    createBook: (req, res) => {
        const {title, author} = req.body
        const newBook = {id, title, author}
        books.push(newBook)
        id++
        res.status(200).send(books)
    },
    editBook: (req, res) => {
        const {book_id} = req.params
        const {title, author} = req.body
        
        const index = books.findIndex(e => e.id === +book_id)
        if (index === -1){
            return res.status(404).send('Book not found')
        }
        const updatedBook = {id: +book_id, title, author}
        
        books[index] = updatedBook
        res.status(200).send(books)
    },
    deleteBook: (req, res) => {
        const {book_id} = req.params

        const index = books.findIndex(e => e.id === +book_id)
        if (index === -1){
            return res.status(404).send('Book not found')
        }
        books.splice(index, 1)
        res.status(200).send(books)
    },
}