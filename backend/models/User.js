const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
  rol: {
    type: String,
    enum: ['admin', 'docente', 'alumno'],
    default: 'alumno'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);