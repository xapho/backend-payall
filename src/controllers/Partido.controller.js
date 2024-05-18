const Torneo = require('../models/Torneo.model');
const Equipo = require('../models/Team.model');
const Partido = require('../models/Partido.model');



const buscarTodosPartido = async (req, res) => {
  try {
    const partido = await Partido.find({});
    res.status(200).json(partido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en cargar el equipo' });
  }
};


const buscarPartido = async (req, res) => {
  try {
    const { id } = req.params;
    const partido = await Partido.findById(id);
    res.status(200).json(partido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en cargar el partido' });
  }
};


const agregarPartido = async (req, res) => {
  try {
    const partido = await Partido.create(req.body);
    res.status(200).json(partido);
    console.log(partido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en crear el partido',error });
  }
};


const editarPartido = async (req, res) => {
  try {
    const { id } = req.params;
    const partido = await Partido.findByIdAndUpdate(id, req.body);
    if (!partido) {
      return res.status(404).json({
        error:
          'El partido que solicito no existe o no se encuentra en la base de datos',
      });
    }
    const updatePartido = await Partido.findById(id);
    res.status(200).json(updatePartido);
    console.log(updatePartido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en actualizar el equipo' });
  }
};


const borrarPartido = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Partido.findByIdAndDelete(id);
    if (!team) {
      return res.status(404).json({
        error:
          'El partido que solicito no existe o no se encuentra en la base de datos',
      });
    }
    const deletePartido = await Partido.findById(id);
    res.status(200).json({ message: 'el partido fue eliminado correctamente' });
    console.log(deletePartido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en borrar el partido' });
  }
};

//aqui se exportan los modulos para que se peuda usar en todo el programa
module.exports = {
  buscarTodosPartido,
  buscarPartido,
  agregarPartido,
  editarPartido,
  borrarPartido,
};
