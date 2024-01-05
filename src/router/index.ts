import authorRoute from './author.router';
import bookRoute from './book.router'
import { Router } from 'express';
 
const apiRoutes = Router()

apiRoutes.use('/author',authorRoute)
apiRoutes.use('/book',bookRoute)

export default apiRoutes