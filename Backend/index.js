// console.log('Texto de prueba para nodemon');

const express = require('express');
const conectar_DB = require('./config/db');
const cors = require('cors');

const app = express();
conectar_DB();
app.use(cors());

app.use(express.json());

app.use('/api/Pets', require('./routes/Pets'));

app.listen(4000, () => {
    console.log("el servidor se esta ejecutando en el puerto 4000");
})
