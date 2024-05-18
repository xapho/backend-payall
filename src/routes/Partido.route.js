const express = require('express');
const router = express.Router();
const {agregarPartido, buscarTodosPartido, borrarPartido, buscarPartido, editarPartido} = require('../controllers/Partido.controller.js')

//rutas para los equipos (Team)
router.get('/', buscarTodosPartido)
router.get('/:id', buscarPartido)
router.post('/', agregarPartido)
router.put('/:id', editarPartido)
router.delete('/:id', borrarPartido)

//modulo para que se puedan usar las rutas en todo el programa
module.exports = router;