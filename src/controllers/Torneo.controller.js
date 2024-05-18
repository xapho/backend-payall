const Torneo = require('../models/Torneo.model');
const Equipo = require('../models/Team.model');
const Partido = require('../models/Partido.model');

// Función para crear un torneo con datos específicos

const crearTorneo = async (req, res) => {
  try {
    const torneo = await Torneo.create(req.body);
    await torneo.populate({
      path: 'equiposParticipantes',
      select: ['nombreEquipo','rif','directorTecnico','jugadores']
    });
    res.status(200).json(torneo);
    console.log(torneo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en crear el torneo' });
  }
};


async function verTodosLosTorneos(req, res) {
  try {
    const torneos = await Torneo.find().populate({
      path: 'equiposParticipantes',
      select: ['nombreEquipo', 'rif', 'directorTecnico', 'jugadores'],
    });

    if (torneos.length === 0) {
      res.status(404).json({ message: 'No se encontraron torneos' });
      return;
    }

    res.status(200).json({
      message: 'Torneos encontrados',
      torneos: torneos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los torneos', error: error.message });
  }
}

//funcion para buscar un torneoen especifico mediante la id en la base de datos
const buscarTorneo = async (req, res) => {
  try {
    const { id } = req.params;
    const torneo = await Torneo.findById(id).populate({
      path: 'equiposParticipantes',
      select: ['nombreEquipo', 'rif', 'directorTecnico', 'jugadores'],
    });

    if (!torneo) {
      res.status(404).json({ message: 'Torneo no encontrado' });
      return;
    }

    res.status(200).json(torneo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al cargar el torneo' });
  }
};

//funcion para actualizar equipo especifico en base a la id del equipo en la base de datos
const editarTorneo = async (req, res) => {
  try {
    const { id } = req.params;
    const torneo = await Torneo.findByIdAndUpdate(id, req.body);
    if (!torneo) {
      return res.status(404).json({
        error:
          'El torneo que solicito no existe o no se encuentra en la base de datos',
      });
    }
    const updateTorneo = await Team.findById(id);
    res.status(200).json(updateTorneo);
    console.log(updateTorneo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en actualizar el torneo' });
  }
};

//funcion para borrar un torneoen la base de datos buscandolo por id
const borrarTorneo = async (req, res) => {
  try {
    const { id } = req.params;
    const torneo = await Torneo.findByIdAndDelete(id);
    if (!torneo) {
      return res.status(404).json({
        error:
          'El equipo que solicito no existe o no se encuentra en la base de datos',
      });
    }
    const deleteTorneo = await Team.findById(id);
    res.status(200).json({ message: 'el torneo fue eliminado correctamente' });
    console.log(deleteTorneo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'hubo un problema en borrar el torneo' });
  }
};


module.exports = {
  crearTorneo,
  verTodosLosTorneos,
  buscarTorneo,
  borrarTorneo,
  editarTorneo
};