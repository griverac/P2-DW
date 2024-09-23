const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamosController');

// Crear un préstamo
router.post('/', prestamosController.agregarPrestamo);

// Obtener todos los préstamos
router.get('/', prestamosController.obtenerPrestamos);

// Obtener un préstamo por número
router.get('/:numero', prestamosController.obtenerPrestamoPorNumero);

// Actualizar un préstamo
router.put('/:numero', prestamosController.actualizarPrestamo);

// Eliminar un préstamo
router.delete('/:numero', prestamosController.eliminarPrestamo);

module.exports = router;
/*par2*/