import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const BicycleModel = connection_db.define('Bicycle', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    model: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    speeds: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    frame: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    electric: {
        type: DataTypes.BOOLEAN,
    },
    image: {
        type: DataTypes.STRING, // Debería ser suficientemente grande para almacenar la URL de la imagen
        allowNull: false
    } 
}, {
    tableName: 'bicycles',
    timestamps: false
});

export default BicycleModel;
