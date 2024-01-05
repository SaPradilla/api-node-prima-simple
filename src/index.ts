import express from 'express';
import dotenv from 'dotenv'
import Routes from './router/index'
dotenv.config()

const app = express()

const Port = process.env.PORT || 3001

app.use(express.json())

app.use('/api',Routes)

app.listen(Port,()=>{
    console.log(`Corriendo en http://localhost:${Port}`)
})