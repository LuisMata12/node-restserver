const express = require('express');
const cors =  require('cors');
const { dbConection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.conectarBaseDeDatos();

        // midlewares
        this.middleware();
        // rutas de mi aplicación

        this.routes();
    }
    async conectarBaseDeDatos(){
        await dbConection()
    }

    middleware(){
        // Directorio punblico
        this.app.use(express.static('public'));

        // lectura y parseo del body
        this.app.use(express.json());

        // cors
        this.app.use(cors());
    }

    routes(){

        this.app.use(this.usuariosPath,require("../routes/usuarios"))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Es cuchandoe desde el puerto ${this.port}`)
        });
    }
    
}


module.exports=Server;