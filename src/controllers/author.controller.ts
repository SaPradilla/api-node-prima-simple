import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;

// Crear

export const createAuthor = async(req,res)=>{
    
    const {name,lastname} = req.body
    try {
        const newAuthor = await authorClient.create({
            data:{
                name,
                lastname
            }
        })
        return res.status(201).json({
           msg:'Author successfully created',
           newAuthor
        })
    } catch (e) {
        res.json({msg:'error',error:e.errorName,e})
        
    }
}

// Ver

export const getAuthors = async(req,res)=>{
    const {id} = req.params
    try {
        const author = await authorClient.findUnique({
            where:{
                id
            },
            include:{
                books:true
            },
        })

        return res.status(200).json({
            msg:'Authors successfully visualized',
            author
        })

    } catch (e) {
        res.json({msg:'error',error:e.errorName,e})
        
    }
}

// Modificar 

export const updateAuthor = async(req,res)=>{
    const {id} = req.params
    const authorData = req.body
    try {
        const findAuthor = await authorClient.findUnique({
            where:{
                id
            }
        })       
        if(!findAuthor){
            return res.status(404).json({msg:'Author no found '})
        }
        await authorClient.update({
            where:{
                id
            },
            data: authorData
        })
        return res.status(201).json({msg:'Author successfully uptaded'})
    } catch (e) {
        res.json({msg:'error',error:e.errorName,e})
        
    }
}
// Listar
export const getAllAuthors = async(req,res)=>{
    try {

        const allAuthors = await authorClient.findMany({
            include:{
                books:true
            }
        })

        return res.status(200).json({
            msg:'Authors successfully list',
            Authors: allAuthors
        })

    } catch (e) {
        console.log(e)
        res.json({msg:'error',error:e.errorName,e})
    }
}

// Eliminar

export const deleteAuthor = async(req,res)=>{
    const {id} = req.params
    try {
        await authorClient.delete({
            where:{
                id
            }
        })
        return res.status(201).json({
            msg:'Author successfully deleted'
        })
    } catch (e) {
        res.json({msg:'error',error:e.errorName,e})
        
    }
}