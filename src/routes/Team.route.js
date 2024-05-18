const express = require('express');
const router = express.Router();
const {buscarTeam, buscarTodosTeam,agregarTeam,editarTeam,borrarTeam} = require('../controllers/Team.controller.js')

//rutas para los equipos (Team)
router.get('/', buscarTodosTeam)
router.get('/:id', buscarTeam)
router.post('/', agregarTeam)
router.put('/:id', editarTeam)
router.delete('/:id', borrarTeam)

//modulo para que se puedan usar las rutas en todo el programa
module.exports = router;