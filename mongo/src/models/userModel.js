    const mongoose = require ('mongoose')

const UserSchema=mongoose.Schema({

    numdoc:{
        type:Number,
        required:[true,
        "El numero de documento es requerido"]
    },
    nombre:{
        type:String,
        required:[true,
        "Sus son nombres requeridos"]
    },
    apellido:{
        type:String,
        required:[true,
        "sus apellidos son requeridos"]
    },
    fnacimiento:{
        type: Date
    },
    email:{
        type: Email,
        required:[true, 
        "Su correo es necesario para completar la acción"]
    },
    password:{
        type:Password,
        required:[true,
        "Su contraseña es necesaria"],
        minlength:[6,"como minimo puede tener 6 caracteres"]
    }

})
module.exports=mongoose.model('Users',UserSchema)