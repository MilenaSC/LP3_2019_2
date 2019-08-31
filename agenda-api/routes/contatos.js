const express = require('express');
const contatoCtrl = require('../controllers/ContatoController');

const router = express.Router();

/**
 * Rota para o serviço: /contatos
 * Verbo HTTP: GET
 */
router.get('/', contatoCtrl.recuperarTodos);

/**
 * Rota para o serviço: /contatos
 * Verbo HTTP: POST
 */
router.post('/', contatoCtrl.salvar);

module.exports = router;