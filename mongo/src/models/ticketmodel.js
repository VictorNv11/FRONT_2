const mongoose = require ('mongoose')
const TicketSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,
        "El nombre es requerido"]
    },
    typeTicket:{
        type:String,
        required:[true,
        "El tipo de ticket es requerido"]

    },
    bought:{
        type:String,
        required:[true,
        "Es necesario saber si se compro"]
    },
    amount:{
        type:String,
        required:[true,
        "Es necesario saber la cantidad"]
    }
})

module.exports=mongoose.model('Ticket',TicketSchema)