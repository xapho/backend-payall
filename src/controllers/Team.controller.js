const Team = require('../models/Team.model.js');

//Funcion para buscar equipos em la base de datos
const buscarTodosTeam = async (req, res) => {
  try {
    const team = await Team.find({});
    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en cargar el equipo' });
  }
};

//funcion para buscar un equipo en especifico mediante la id en la base de datos
const buscarTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en cargar el equipo' });
  }
};

//funcion para agregar equipos a la bae de datos
const agregarTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(200).json(team);
    console.log(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en crear el equipo' });
  }
};

//funcion para actualizar equipo especifico en base a la id del equipo en la base de datos
const editarTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body);
    if (!team) {
      return res.status(404).json({
        error:
          'El equipo que solicito no existe o no se encuentra en la base de datos',
      });
    }
    const updateTeam = await Team.findById(id);
    res.status(200).json(updateTeam);
    console.log(updateTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en actualizar el equipo' });
  }
};

//funcion para borrar un equipo en la base de datos buscandolo por id
const borrarTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndDelete(id);
    if (!team) {
      return res.status(404).json({
        error:
          'El equipo que solicito no existe o no se encuentra en la base de datos',
      });
    }
    const deleteTeam = await Team.findById(id);
    res.status(200).json({ message: 'el equipo fue eliminado correctamente' });
    console.log(deleteTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en borrar el equipo' });
  }
};

//aqui se exportan los modulos para que se peuda usar en todo el programa
module.exports = {
  buscarTodosTeam,
  buscarTeam,
  agregarTeam,
  editarTeam,
  borrarTeam,
};
