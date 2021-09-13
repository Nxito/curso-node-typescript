import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/connections";



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios:"/api/usuarios"
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";

        //métodos iniciales
        this.dbConecction();
        this.middlewares();
        this.routes();

    }

    //TODO: conectar DB
    async dbConecction(){

        try {
            
            await db.authenticate();
            console.log("DB online");
            

        } catch (error : any) {
            throw new Error( error );
            
        }
    }
    
    middlewares(){
    //cors 
    this.app.use(cors());

    //lectura del body
    this.app.use(express.json());

    //carpeta publica
    this.app.use( express.static("public") );
    }
    
    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor iniciado en puerto " + this.port);

        })
    }

}

export default Server;