const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  cursoInteres: String,
  estado: {
    type: String,
    enum: ['nuevo','contactado','convertido'],
    default: 'nuevo'
  }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);