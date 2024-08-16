const Prestamo = require('../models/prestamos');

// Obtener todos los préstamos
const obtenerPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.findAll();
        res.json(prestamos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los préstamos.' });
    }
};

// Obtener un préstamo por número
const obtenerPrestamoPorNumero = async (req, res) => {
    const { numero } = req.params;
    try {
        const prestamo = await Prestamo.findByPk(numero);
        if (prestamo) {
            res.json(prestamo);
        } else {
            res.status(404).json({ error: 'Préstamo no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el préstamo.' });
    }
};

// Agregar un nuevo préstamo
const agregarPrestamo = async (req, res) => {
    const { nombre, codigoUsuario, fechaSalida, fechaMaximaPago, fechaDevolucion } = req.body;
    try {
        const nuevoPrestamo = await Prestamo.create({ nombre, codigoUsuario, fechaSalida, fechaMaximaPago, fechaDevolucion });
        res.status(201).json(nuevoPrestamo);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el préstamo.' });
    }
};

// Actualizar un préstamo existente
const actualizarPrestamo = async (req, res) => {
    const { numero } = req.params;
    const { nombre, codigoUsuario, fechaSalida, fechaMaximaPago, fechaDevolucion } = req.body;
    try {
        const prestamo = await Prestamo.findByPk(numero);
        if (prestamo) {
            prestamo.nombre = nombre;
            prestamo.codigoUsuario = codigoUsuario;
            prestamo.fechaSalida = fechaSalida;
            prestamo.fechaMaximaPago = fechaMaximaPago;
            prestamo.fechaDevolucion = fechaDevolucion;
            await prestamo.save();
            res.json(prestamo);
        } else {
            res.status(404).json({ error: 'Préstamo no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el préstamo.' });
    }
};

// Eliminar un préstamo
const eliminarPrestamo = async (req, res) => {
    const { numero } = req.params;
    try {
        const prestamo = await Prestamo.findByPk(numero);
        if (prestamo) {
            await prestamo.destroy();
            res.json({ mensaje: 'Préstamo eliminado correctamente.' });
        } else {
            res.status(404).json({ error: 'Préstamo no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el préstamo.' });
    }
};

module.exports = {
    obtenerPrestamos,
    obtenerPrestamoPorNumero,
    agregarPrestamo,
    actualizarPrestamo,
    eliminarPrestamo
};
