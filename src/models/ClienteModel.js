const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    nomePet: {
        type: String
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);