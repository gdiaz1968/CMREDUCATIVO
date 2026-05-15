# CMREDUCATIVO

Plataforma de gestión educativa con autenticación JWT.

## Tech Stack

- **Backend:** Node.js + Express
- **Base de datos:** MongoDB + Mongoose
- **Auth:** JWT + bcrypt
- **Gabriel - version Auth correcto

## Estructura

```
backend/
├── app.js                 # Servidor Express
├── config/db.js           # Conexión MongoDB
├── models/                # Modelos Mongoose
│   ├── User.js
│   └── Lead.js
├── services/              # Lógica de negocio
│   └── auth.service.js
├── controllers/           # Controladores
│   └── auth.controller.js
├── middleware/            # Middlewares
│   ├── auth.middleware.js
│   └── role.middleware.js
└── routes/                # Rutas API
    ├── auth.routes.js
    └── ejemplo.routes.js
```

## Instalación

```bash
cd backend
npm install
```

## Configuración

Crear archivo `.env` en `backend/`:

```env
JWT_SECRET=tu_secreto_aqui
MONGO_URI=mongodb://localhost:27017/cmreducativo
PORT=3000
```

## Ejecutar

```bash
npm start
```

## Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | /api/auth/register | Crear usuario |
| POST | /api/auth/login | Iniciar sesión |
| GET | /api/ejemplo/admin | Ruta protegida (admin) |

## Rutas protegidas

Usar header: `Authorization: Bearer <TOKEN>`