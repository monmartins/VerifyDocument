var mongoose = require('mongoose');

var schema = mongoose.Schema({

    name: {
        type: String, 
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    estate: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
},{collection: 'Usuario'});

mongoose.model('Usuario', schema);