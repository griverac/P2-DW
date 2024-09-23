const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Prestamo = sequelize.define('Prestamo', {
    numero: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    codigoUsuario: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    fechaSalida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaMaximaPago: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaDevolucion: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = Prestamo;
/*par2*/