const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

// SOLO ADMIN
router.get(
  '/admin',
  authMiddleware,
  roleMiddleware(['admin']),
  (req, res) => {
    res.json({ message: 'Panel admin' });
  }
);

// ADMIN Y DOCENTE
router.get(
  '/docente',
  authMiddleware,
  roleMiddleware(['admin', 'docente']),
  (req, res) => {
    res.json({ message: 'Panel docente' });
  }
);

// SOLO ALUMNO
router.get(
  '/alumno',
  authMiddleware,
  roleMiddleware(['alumno']),
  (req, res) => {
    res.json({ message: 'Panel alumno' });
  }
);

module.exports = router;