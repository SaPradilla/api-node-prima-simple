import { PrismaClient } from "@prisma/client";

const  bookClient = new PrismaClient().book

//Create
export const createBook = async(req,res)=>{
    const {title,authorId} = req.body
    try {
        const newBook = await bookClient.create({
            data:{
                title,
                author:{
                    connect:{ id: authorId}
                }
            }
        })
        return res.status(201).json({
            msg:'Book successfully created',
            newBook
        })
    } catch (e) {
        return res.json({msg:'error',error:e.errorName,e})
        
    }
}
//Read
export const getBook = async(req,res)=>{
    const {id} = req.params
    try {
        const Book = await bookClient.findUnique({
            where:{
                id
            }
        })
        return res.status(200).json({
            msg:'Book successfully visualized',
            Book
        })
    } catch (e) {
        return res.json({msg:'error',error:e.errorName,e})
    }
}
// List
export const getAllBooks = async (req,res) => {

    try {
        const Books = await bookClient.findMany({
            include:{
                author:true
            }
        });

        return res.status(200).json({
            msg:'Books successfully list',
            Books
        })
    } catch (e) {
        return res.json({msg:'error',error:e.errorName,e})
        
    }
}
// Update

export const updateBook = async(req,res)=>{
    const {id} = req.params
    const bookData = req.body
    try {
        const findBook = await bookClient.findUnique({
            where:{
                id
            }
        })
        if(!findBook){
            return res.status(404).json({
                msg:'Book no found'
            })
        }
        await bookClient.update({
            where:{
                id
            },
            data:bookData
        })
        return res.status(200).json({
            msg:'Book successfully updated'
        })
    } catch (e) {
        return res.json({msg:'error',error:e.errorName,e})
        
    }
}

//Delete
export const deleteBook = async(req,res)=>{
    const {id} = req.params
    try {
        await bookClient.delete({
            where:{
                id
            }
        })
        return res.status(200).json({
            msg:'Book successfully deleted'
        })
    } catch (e) {
        return res.json({msg:'error',error:e.errorName,e})
        
    }
}