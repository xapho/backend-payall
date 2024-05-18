const express = require('express');
const app = express();
const connectDB = require('./src/config/db.config');
const teamRoute = require('./src/routes/Team.route.js')
const torneoRoute = require('./src/routes/Torneo.route.js')
const partidoRoute = require('./src/routes/Partido.route')
const cors = require('cors');

// Configurar CORS para permitir solicitudes solo desde http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

//esto va en el middleware recordar
app.use(express.json());

//rutas del programa
app.use('/api/teams', teamRoute);
app.use('/api/torneos', torneoRoute);
app.use('/api/partidos', partidoRoute)

app.listen(3000, () => {
  console.log('el server se encuentra en el local 3000');
});

//conexion con la base de datos de index.js
connectDB();


