const User = require('../models/User');
const { hashPassword, comparePassword, generateToken } = require('../services/auth.service');

exports.register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  const hashed = await hashPassword(password);

  const user = await User.create({
    nombre,
    email,
    password: hashed,
    rol
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).send("No existe");

  const valid = await comparePassword(password, user.password);

  if (!valid) return res.status(401).send("Incorrecto");

  const token = generateToken(user);

  res.json({ token });
};