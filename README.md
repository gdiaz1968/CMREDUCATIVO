# CMREDUCATIVO

Sistema SaaS de gestión educativa híbrida multi-tenant.

---

# Estado actual

Actualmente el proyecto posee un backend legacy construido con:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication

Ese backend continuará funcionando temporalmente mientras se desarrolla la nueva arquitectura profesional.

---

# Objetivo de migración

Migrar progresivamente hacia:

- NestJS
- PostgreSQL
- Prisma ORM
- Arquitectura SaaS multi-tenant
- RBAC
- JWT Authentication avanzada

---

# Stack objetivo

## Backend

- NestJS
- Prisma ORM
- PostgreSQL

## Frontend

- Next.js
- TypeScript

---

# Arquitectura

- Monolito modular
- Multi-tenant
- tenant_id obligatorio
- RBAC
- JWT Authentication
- Repository Pattern

---

# Estructura esperada

```txt
CMREDUCATIVO/
├── backend-legacy/
├── backend-v2/
├── frontend/
├── PROJECT_CONTEXT.md
├── AI_RULES.md
└── README.md
```

---

# Requisitos

- Node.js LTS
- PostgreSQL
- npm
- VSCode
- Continue AI

---

# Objetivos del MVP

- Multi-tenancy
- Auth
- Roles y permisos
- Cursos
- Comisiones
- Alumnos
- Inscripciones
- Asistencia
- Pagos
- Comunicaciones

---

# Reglas técnicas

- TypeScript estricto
- DTOs obligatorios
- Validaciones obligatorias
- tenant_id obligatorio
- Soft delete obligatorio
- Arquitectura modular
- Controllers livianos
- Services responsables de lógica de negocio

---

# Roadmap técnico

## Etapa 1
- Infraestructura NestJS
- PostgreSQL
- Prisma
- Multi-tenancy
- Auth
- RBAC

## Etapa 2
- Cursos
- Comisiones
- Alumnos
- Inscripciones

## Etapa 3
- Asistencia
- Pagos
- Comunicaciones

## Etapa 4
- Reportes
- Portal alumno
- Integraciones

---

# Estado actual

Proyecto en migración arquitectónica hacia plataforma SaaS profesional.