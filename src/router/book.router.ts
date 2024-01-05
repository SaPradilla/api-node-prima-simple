import { Router } from "express";
import {createBook,getBook,getAllBooks,deleteBook,updateBook} from '../controllers/book.controller'

const bookRouter = Router()

bookRouter.get('/list',getAllBooks)
bookRouter.post('/create',createBook)
bookRouter.get('/read/:id', getBook)
bookRouter.put('/update/:id', updateBook)
bookRouter.delete('/delete/:id', deleteBook)

export default bookRouter