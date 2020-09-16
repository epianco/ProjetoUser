const express = require('express');

const UsuarioController = require('../controllers/usuarioController.js');
const ProdutoController = require('../controllers/produtoController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.post('/produtos', ProdutoController.Insert);

module.exports = router;