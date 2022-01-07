const express = require('express');
const routes = express.Router();
const ClienteController = require('./controllers/ClienteController');

routes.get('/clientes', ClienteController.listaClientes);
routes.get('/clientes/:cpf', ClienteController.consultaCliente);
routes.post('/clientes/:nome/:cpf/:nomePet', ClienteController.criaCliente);

module.exports = routes;
