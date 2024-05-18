const mongoose = require('mongoose');

const TorneoSchema = new mongoose.Schema({
  nombreTorneo: {
    type: String,
    required: [true, 'Por favor ingrese el nombre del torneo'],
    unique: true,
  },
  fechaInicio: {
    type: Date,
    required: [true, 'Por favor ingrese la fecha de inicio del torneo'],
  },
  fechaFin: {
    type: Date,
    required: [true, 'Por favor ingrese la fecha de fin del torneo'],
    validate: {
      validator: function(value) {
        return value >= this.fechaInicio;
      },
      message: 'La fecha de fin no puede ser anterior a la fecha de inicio',
    },
  },
  lugarTorneo: {
    type: String,
    required: [true, 'Por favor ingrese el lugar del torneo'],
  },
  equiposParticipantes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
  partidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partido',
    },
  ],
}, {
  timestamps: true,
});

const Torneo = mongoose.model('Torneo', TorneoSchema);

module.exports = Torneo;