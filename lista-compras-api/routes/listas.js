const express = require('express');
const listaCtrl = require('../controllers/ListaController');

/**
 * Cria o roteador dos web services
 * relacionados a Lista. Por meio do
 * roteador será possível definir os
 * nossos web services.
 */
const router = express.Router();

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: GET
 */
router.get('/', listaCtrl.recuperarTodas);

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: POST
 */
router.post('/', listaCtrl.salvar);

module.exports = router;