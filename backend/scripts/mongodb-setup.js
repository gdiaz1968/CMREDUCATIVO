// Script para crear colecciones en MongoDB
// Base de datos: dbCMREDUCATIVA
// Ejecutar con: mongosh "mongodb://localhost:27017/dbCMREDUCATIVA" --file backend/scripts/mongodb-setup.js

const dbName = "dbCMREDUCATIVA";
const db = db.getSiblingDB(dbName);

// ============================================
// COLECCIÓN: users
// ============================================
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "password", "rol"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre del usuario"
        },
        email: {
          bsonType: "string",
          description: "Email único del usuario"
        },
        password: {
          bsonType: "string",
          description: "Password encriptado"
        },
        rol: {
          enum: ["admin", "docente", "alumno"],
          description: "Rol del usuario"
        },
        createdAt: {
          bsonType: "date",
          description: "Fecha de creación"
        },
        updatedAt: {
          bsonType: "date",
          description: "Fecha de actualización"
        }
      }
    }
  }
})

// Crear índice único en email
db.users.createIndex({ email: 1 }, { unique: true })

// ============================================
// COLECCIÓN: leads
// ============================================
db.createCollection("leads", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "cursoInteres", "estado"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre del lead"
        },
        email: {
          bsonType: "string",
          description: "Email del lead"
        },
        cursoInteres: {
          bsonType: "string",
          description: "Curso de interés"
        },
        estado: {
          enum: ["nuevo", "contactado", "convertido"],
          description: "Estado del lead"
        },
        createdAt: {
          bsonType: "date",
          description: "Fecha de creación"
        },
        updatedAt: {
          bsonType: "date",
          description: "Fecha de actualización"
        }
      }
    }
  }
})

// ============================================
// INSERTAR DATOS DE EJEMPLO (OPCIONAL)
// ============================================

// Usuario admin de ejemplo (password: admin123)
db.users.insertOne({
  nombre: "Administrador",
  email: "admin@cmreducativo.com",
  password: "$2b$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // bcrypt hash
  rol: "admin",
  createdAt: new Date(),
  updatedAt: new Date()
})

// Usuario docente de ejemplo
db.users.insertOne({
  nombre: "Juan Pérez",
  email: "juan@cmreducativo.com",
  password: "$2b$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  rol: "docente",
  createdAt: new Date(),
  updatedAt: new Date()
})

// Lead de ejemplo
db.leads.insertOne({
  nombre: "María García",
  email: "maria@email.com",
  cursoInteres: "Programación Web",
  estado: "nuevo",
  createdAt: new Date(),
  updatedAt: new Date()
})

// ============================================
// VERIFICAR COLECCIONES CREADAS
// ============================================
db.getCollectionNames().forEach(c => print("Colección: " + c));

print("✓ Colecciones creadas exitosamente en " + dbName);