const roleMiddleware = (rolesPermitidos) => {
  return (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({ message: 'No autenticado' });
      }

      if (!rolesPermitidos.includes(user.rol)) {
        return res.status(403).json({ message: 'Acceso denegado' });
      }

      next();
    } catch (error) {
      return res.status(500).json({ message: 'Error en validación de roles' });
    }
  };
};

module.exports = roleMiddleware;