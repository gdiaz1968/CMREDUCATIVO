require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// rutas
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(3000, () => console.log('Servidor corriendo'));