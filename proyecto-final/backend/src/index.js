/**importar */
const express = require('express');
const connDB = require('../config/db');
const cors = require('cors');

/**creamos servidor */
const app = express();

/**enlazamos la conexion a la DB funcion connDB*/
connDB();

/**llamado a la dependendia cors */
app.use(cors());
app.use(express.json());

/**rutas web */
app.use('/api/clientes', require('../routers/rutas'));


/**definir ruta principal */
app.get('/', (req, res)=>{
    res.json({mensaje:"hola ingresaste a la pagina principal"});
})

/**puerto por donde el servidor va a escuchar */
app.listen(5000, ()=>{
    console.log('server connect http://localhost:5000');
})



