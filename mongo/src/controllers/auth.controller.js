import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) =>{
    const { numdoc, nombre, apellido, fnacimiento, email, password} = req.body
    try{
        const newUser = new User({
            numdoc,
            nombre,
            apellido,
            fnacimiento,
            email,
            password,
        })
        const saveUser = await newUser.save()
        const token = await createAccesToken({id: saveUser._id})
        res.cookie('token', token)
        res.json({
        id: saveUser._id,
        numdoc: saveUser.numdoc,
        nombre: saveUser.nombre,
        apellido: saveUser.apellido,
        fnacimiento: saveUser.fnacimiento,
        email: saveUser.email,
        ticket: saveUser.ticket
        })

    } catch(error){
        res.status(500).json({
            msg:`El correo ya esta regisrado`
        })
    }
}

export const login = async (req, res) =>{
    const { email,password } = req.body
    try{
        const userFound = await User.findOne ({email})
        if (!userFound) return res.status(400).json(["Usuario no encontrado"])
        
        const token = await createAccesToken({id: userFound._id})
        res.cookie('token', token)
        res.json({
            id: saveUser._id,
            numdoc: saveUser.numdoc,
            nombre: saveUser.nombre,
            apellido: saveUser.apellido,
            fnacimiento: saveUser.fnacimiento,
            email: saveUser.email,
            ticket: saveUser.ticket
        })
 
    }catch (error){
        res.status(500).json({
            msg:`El correo ya esta regisrado`
        })
    }
}

export const verifyToken = async (req, res) =>{
    const {token} = req.cookies
    if(error) return res.status(401).json({
        msg: "No se autentico"
    })
    jwt.verify(token, TOKEN_SECRET, async(error, user)=>{
        if (error) return res.status(401).json({
            msg: "No se autentico"
        })
        const userFound = await User.findById(user.id)
        if(!userFound) return res.status
    })
}