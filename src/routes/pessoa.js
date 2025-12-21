const express = require('express');
const cotrollerPessoa = require('../controllers/pessoa');
const router = express.Router();

const controller = new cotrollerPessoa();

router.get('/api/v1/nomes', controller.pegarTodos)
router.get('/api/v1/nome/:id', controller.pegarUm)
router.post('/api/v1/nome', controller.adicionar)
router.put('/api/v1/nome/:id', controller.alterar)
router.delete('/api/v1/nome/:id', controller.deletar)

module.exports = router;