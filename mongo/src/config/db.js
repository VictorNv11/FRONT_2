const mongoose = require('mongoose')

async function connectBD(){
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`conexion exitosa a MongoDB${conn.connection.host}`);

}
module.exports = connectBD