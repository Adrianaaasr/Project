
const express = require('express');
const router = express.Router();
const pet = require('../controllers/petsController');

router.post('/mascota', pet.agregarmascota);
router.get('/mascota', pet.vermascotas);
router.get('/mascota/:id', pet.vermascota);
router.put('/mascota/:id', pet.actualizarmascota);
router.delete('/mascota/:id', pet.eliminarmascota);

module.exports = router;
