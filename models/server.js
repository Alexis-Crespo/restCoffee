const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor () {
         this.app = express();
         this.port = process.env.PORT;
         this.usuariosEndPoint = '/api/users'

         // Conexion DB
         this.connectDB()


        //Middlewares
        this.middlewares()

        //Rutas
         this.routes();

    }


    async connectDB(){
        await dbConnection();
    }





    // Middlewares

    middlewares(){
        //CORS
        this.app.use(cors())

        this.app.use(express.static('public'))

        // Lectura y parseo del body

        this.app.use( express.json())
    }

    routes(){
        this.app.use(this.usuariosEndPoint, require('../routes/users'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('ejecutando desde clase: ', this.port)
        })
    }

}

module.exports = Server;