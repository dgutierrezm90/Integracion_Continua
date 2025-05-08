const express = require('express');
const router = express.Router();
const imcController = require('../controllers/imcController');

router.post('/imc', imcController.calcularYGuardarIMC);
router.get('/imc/:nombre', imcController.obtenerHistorialPorNombre);
router.delete('/imc/:id', imcController.eliminarRegistroPorId);
router.put('/imc/:id', imcController.actualizarRegistroPorId);

module.exports = router;