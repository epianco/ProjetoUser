const express = require('express');

const UsuarioController = require('../controllers/usuarioController.js');
const ProdutoController = require('../controllers/produtoController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.post('/produtos', ProdutoController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

module.exports = router;