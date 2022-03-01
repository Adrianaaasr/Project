const Pets = require('../models/pets');
const petsSchema = require('../models/pets');

exports.agregarmascota = async(req, res) => {
    // console.log('Creando el producto desde el controlador');
    // console.log(req.body);

    try {
        let data_mascota;
        data_mascota = new Pets(req.body);
        await data_mascota.save();
        res.send(data_mascota)

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }

}

exports.vermascotas = async(req, res) => {
    try {
        const data_mascota = await Pets.find();
        res.json(data_mascota);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.vermascota = async(req, res) => {
    try {
        const data_mascota = await Pets.findById(req.params.id);

        if (!data_mascota) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' })
        }
        res.json(data_mascota);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.actualizarmascota = async(req, res) => {
    try {
        const { nombre, raza, edad, vacunas } = req.body
        let data_mascota = await Pets.findById(req.params.id);

        if (!data_mascota) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        data_mascota.nombre = nombre;
        data_mascota.raza = raza;
        data_mascota.edad = edad;
        data_mascota.vacunas = vacunas;

        data_mascota = await Pets.findOneAndUpdate({ _id: req.params.id }, data_mascota, { new: true })
        res.json(data_mascota);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}


exports.eliminarmascota = async(req, res) => {
    try {
        const data_mascota = await Pets.findById(req.params.id);
        if (!data_mascota) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar productos' })
        }
        await Pets.findByIdAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'Mascota eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}
