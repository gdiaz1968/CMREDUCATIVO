# CMREDUCATIVO

Sistema SaaS de gestión educativa híbrida multi-tenant orientado a instituciones educativas pequeñas y medianas de LATAM.

## Estado actual del proyecto

Actualmente existe un backend legacy funcional construido con:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication

El sistema actual implementa:
- login
- registro de usuarios
- autenticación JWT básica
- middleware de autorización inicial

## Objetivo de migración

El proyecto será migrado progresivamente hacia una arquitectura profesional escalable basada en:

- NestJS
- PostgreSQL
- Prisma ORM
- Arquitectura modular
- Multi-tenancy
- RBAC
- JWT Authentication avanzada

La migración será gradual.

El backend legacy continuará existiendo temporalmente mientras se construye el nuevo núcleo SaaS.

## Objetivo del sistema

CMREDUCATIVO NO es un LMS tradicional.

El foco principal es:
- gestión institucional
- alumnos
- cursos
- inscripciones
- asistencia
- pagos
- cuotas
- comunicación institucional

El sistema soportará:
- cursos presenciales
- cursos virtuales
- cursos híbridos

## Arquitectura objetivo

### Backend

- NestJS
- Prisma ORM
- PostgreSQL

### Frontend

- Next.js
- TypeScript

### Arquitectura general

- Monolito modular
- Arquitectura SaaS multi-tenant
- tenant_id obligatorio
- RBAC
- JWT Authentication
- Repository Pattern
- DTO Pattern
- Services Pattern

## Estrategia multi-tenant

Modelo:
- Base de datos compartida
- tenant_id obligatorio en todas las entidades

Objetivo:
- evitar tenant bleeding
- aislamiento lógico por tenant
- escalabilidad SaaS

## Módulos planificados

- Auth
- Tenants
- Usuarios
- Roles
- Permisos
- Cursos
- Comisiones
- Clases
- Alumnos
- Inscripciones
- Asistencia
- Cuotas
- Pagos
- Comunicaciones
- Reportes

## Reglas técnicas obligatorias

- TypeScript estricto
- Nunca usar any
- DTOs obligatorios
- Validaciones obligatorias
- Controllers livianos
- Lógica de negocio solo en services
- Prisma solo en repositories
- tenant_id obligatorio
- Soft delete obligatorio
- createdAt obligatorio
- updatedAt obligatorio
- Arquitectura modular
- Separación clara de responsabilidades

## Seguridad

- JWT Access Token
- Refresh Token
- bcrypt
- Guards
- Roles y permisos
- Validación de tenant en cada request

## Objetivo técnico principal

Construir primero:
- núcleo SaaS
- multi-tenancy
- seguridad
- arquitectura sólida

NO priorizar inicialmente:
- frontend complejo
- mobile apps
- LMS avanzado
- videoconferencia propia
- microservicios