const mongoose = require('mongoose');

const PartidoSchema = new mongoose.Schema({
  equiposParticipantes: [{
    equipo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    goles: {
      type: Number,
      default: 0,
      min: [0, 'El número de goles no puede ser negativo']
    },
    faltas: {
      type: Number,
      default: 0,
      min: [0, 'El número de faltas no puede ser negativo']
    }
  }],
  fecha: {
    type: Date,
    // required: [true, 'Por favor ingrese la fecha del partido'],
  },
  lugar: {
    type: String,
    // required: [true, 'Por favor ingrese el lugar del partido'],
  }
}, {
  timestamps: true
});

const Partido = mongoose.model('Partido', PartidoSchema);

module.exports = Partido;