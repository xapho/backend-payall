const mongoose = require('mongoose');
const express = require('express');
const app = express();

module.exports = async () => {
  try {
mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://admin:admin@goatcluster.squvdug.mongodb.net/?retryWrites=true&w=majority&appName=GoatCluster'
  )
  .then(() => {
    console.log("conexion exitosa con MongoDB");
  })
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    app.listen
  }
};