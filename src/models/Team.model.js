const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
  nombreEquipo: {
    type: String,
    required: [true, 'Por favor ingrese el nombre del equipo'],
  },
  rif: {
    type: String,
    required: [true, 'Por favor ingrese el RIF del equipo'],
  },
  directorTecnico: {
    nombre: {
      type: String,
      required: [true, 'Por favor ingrese el nombre del director técnico'],
    },
    cedula: {
      type: String,
      required: [true, 'Por favor ingrese la cédula del director técnico'],
    },
    fechaNacimiento: {
      type: Date,
      required: [true, 'Por favor ingrese la fecha de nacimiento del director técnico'],
    },
  },
  jugadores: [
    {
      nombre: {
        type: String,
        required: [true, 'Por favor ingrese el nombre del jugador'],
      },
      cedula: {
        type: String,
        required: [true, 'Por favor ingrese la cédula del jugador'],
      },
      fechaNacimiento: {
        type: Date,
        required: [true, 'Por favor ingrese la fecha de nacimiento del jugador'],
      },
    },
  ],
},
{
  timestamps: true,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;