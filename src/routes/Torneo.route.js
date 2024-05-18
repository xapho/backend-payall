const express = require('express');
const { crearTorneo, verTodosLosTorneos, buscarTorneo, borrarTorneo, editarTorneo } = require('../controllers/Torneo.controller');

const router = express.Router();

router.post('/', crearTorneo);
router.get('/', verTodosLosTorneos);
router.get('/:id', buscarTorneo);
router.put('/:id', editarTorneo);
router.delete('/:id', borrarTorneo);

module.exports = router;