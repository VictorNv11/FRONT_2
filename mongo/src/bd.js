import {conexion} from "./variables.js"
import mongoose from "mongoose"
//PARA QUE ESTE SIRVA NECESITA QUE OTRO LO USE EN ESTE CASO EN INDEX
export const conexionMongo = async ()=>{

    try {
        await mongoose.connect(conexion, {
            autoIndex: true,
            family: 4
        })
        console.log("Conexion Exitosa.")
    } catch (error) {
        console.log(Error)
    }
}

