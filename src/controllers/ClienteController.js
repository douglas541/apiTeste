const express = require('express');
const routes = express.Router();
const Cliente = require('../models/ClienteModel');

routes.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();

        return res.json(clientes);
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao buscar clientes' });
    }
});

routes.get('/clientes/:cpf', async (req, res) => {
    try {
        const cliente = await Cliente.findOne({ cpf: req.params.cpf });

        return res.json(cliente);
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao buscar cliente' });
    }
});

routes.post('/clientes', async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);

        return res.json(cliente);
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao buscar cliente' });
    }
});

module.exports = app => app.use('/', routes);