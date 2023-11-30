import express from "express"
import cors from "cors"


const principal = express ()
principal.use(express.json())

principal.use (cors({
    origin:"http://localhost:3000/",
    methods:"GET, POST, DELETE, PUT",
    preflightContinue: true,
    optionsSuccessStatus: 204
}))

principal.use((req, res, next)=>{
    res.status(400).json({
        message:"La api funciona, pero la ruta no funciona."
    })
})

export default principal