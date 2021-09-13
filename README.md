#Anotaciones base para typecript
no se ejecuta app.ts . este archivo sol ocompilará el app.js en la crpeta dist, se ejecuta app.js

el comando tsc compilará el js

tsc --watch obresvará cambios en el .ts y ejecutará el comando automaticamente
# Consejos varios typescript

powershell puede dar error por tema de habilitacion de scripts.
 ejecutar en CMD  con administrador

# INICIANDO EL PROYECTO

`<npm install>` crea nuestro proyecto con npm y inlcuira la instalacion de los paquetes que se usen

`<tsc --init>`  será el comando que cree el tsconfig.json, que tendrá la configuracion de Typescript para este proyecto
se creará un app.ts con el siguiente codigo:

****************************************
> export const nombre ="Fernando";
> console.log(nombre);
****************************************

se puede configurar para que sea compatible con distintas versiones de JS, como ecmaScript 5 o 6 ..
el target, señala la version de ecmascript
se activará, sourceMap outDir ( ./dist ) moduleResolution esModuleInterop

`<tsc> `ahora aplicará cambios al ejecutar. en este caso crea la carpeta dist con app.js y app.map.js e incluirá ej JS aplicado en el app.ts

se instalará una dependencia para desarrolladores: 

`<npm i tslint --save-dev>`

se ejecutará con "./node_modules/.bin/tslint" --init en la consola para iniciar la configuracion para desarrolladores
me permitirá poner reglas.
añadimos a rules la regla:  `<"no-console":false>`

# Creando un servidor express con TS
 `<npm i express cors dotenv`> instalaremos con este comando librerias necesarias y utiles para esto

 creamos la carpeta models
 dentro de models, creamos un archivo server.ts
 en el, ponemos el siguiente codigo, y vemos que express da error
****************************************

> import modulename from "express";
> class Server{
>     constructor(){
>    }
> }
****************************************

entonces realizamos 
`<npm i --save-dev @types/express>` esto nos permitira usar express como dessarrolladores

server.ts se cambia   ahora con  el siguiente codigo
****************************************
import express, { Application } from "express";
class Server {

    private app: Application; /* Se inician las variables aqui, por ser tipado*/
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";/*si indico solo la variable, dara error al poder ser tambien undefined y indicar en el tipado solo strings*/
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor iniciado en puerto" + this.port);

        })
    }

}

export default Server; /* exportamos la clase del server*/
****************************************
cambiamos el  app.js con esto
****************************************
import dotenv from "dotenv";
import Server from "./models/server";

//configurar dot.env
dotenv.config()

const server =new Server();


server.listen();
****************************************

......


Se ha de crear una DB con usuarios
En el curso se hace uso de la aplicacion "xampp" para crear una base de datos MariaDB o MySQL
Para conetarse y probar se usó "tablePlus"

Se realiza la conexion a la tabla Usuarios con la estructura de columnas siguiente: id,nombre,email,estado,createdAt y updatedAt



