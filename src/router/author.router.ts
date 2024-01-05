import { Router } from "express";
import {getAllAuthors,createAuthor,getAuthors,updateAuthor,deleteAuthor} from '../controllers/author.controller'

const authorRouter = Router()

authorRouter.get('/list', getAllAuthors)
authorRouter.post('/create', createAuthor)
authorRouter.get('/read/:id', getAuthors)
authorRouter.put('/update/:id', updateAuthor)
authorRouter.delete('/delete/:id', deleteAuthor)

export default authorRouter