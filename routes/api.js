const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota para listar todos os clientes
router.get('/clientes', clientesController.listarClientes);

module.exports = router;
