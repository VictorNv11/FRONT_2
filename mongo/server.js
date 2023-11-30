const express = require('express')
const dotenv = require('dotenv')
const connectBD = require ('./src/config/db')

const userRoutes = require('./src/routes/userRoutes')
const ticketroutes = require('./src/routes/tikectroutes')

dotenv.config({
    path:'./config/.env'})

const app = express()
app.use(express.json())

connectBD()

app.use('/user', userRoutes)
app.use('/tickets', ticketroutes)

//Prueba

const puerto = process.env.PUERTO

app.listen(puerto, console.log(`servidor ejecutando en ${puerto}`.bgBlue))