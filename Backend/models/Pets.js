const mongoose = require('mongoose');

const petsSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    raza: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    vacunas: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('pet', petsSchema)
