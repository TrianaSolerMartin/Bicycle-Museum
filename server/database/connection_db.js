import { Sequelize } from "sequelize";
import {DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_TEST_NAME, NODE_ENV} from '../config.js';

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME; //Condición: Elige una bbdd u otra (la de bicicletas o la de test) "? equivale a if" y ": equivale a else"

//La condición anterior equivale a esto:
// if(NODE_ENV === 'test'){
//     return DB_TEST_NAME;
// }
// else{
//     DB_DEV_NAME
// }

// Crear conexión a la base de datos utilizando las variables de entorno
const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql"
});

export default connection_db; 