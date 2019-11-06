const express           = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const routes            = express.Router()

routes.post('/usuarios' , UsuarioController.salvar)
routes.get('/usuarios'  , UsuarioController.recuperaPorParteDoNomeOuEmail)

 module.exports = routes