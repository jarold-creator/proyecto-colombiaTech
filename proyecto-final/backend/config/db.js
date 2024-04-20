/**importar modulo mongoose */
const mongoose = require('mongoose');

/**variable de entorno */
require('dotenv').config();

/**conectar a la DB */
const connDB = () =>{    
    mongoose
    .connect(process.env.DB_MONGO)
    .then(()=>{
        console.log('Connetion MongoDB')
    })
    .catch((err)=>{
        console.log(err);
    })  
}

module.exports = connDB;