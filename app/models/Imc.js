const mongoose = require('mongoose');

const ImcSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  imc: { type: Number, required: true }
});

module.exports = mongoose.model('Imc', ImcSchema);