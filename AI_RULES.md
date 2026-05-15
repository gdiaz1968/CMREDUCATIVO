# AI RULES

## Reglas generales

- Nunca usar any
- Siempre usar TypeScript estricto
- Siempre usar DTOs
- Siempre validar inputs
- Siempre usar services
- Nunca acceder directamente a Prisma desde controllers
- Todos los módulos deben ser multi-tenant
- tenant_id obligatorio
- Soft delete obligatorio
- createdAt y updatedAt obligatorios
- Arquitectura modular NestJS
- Seguir principios SOLID
- No generar código duplicado
- No inventar entidades fuera del dominio

## Backend

- Usar NestJS modular
- Separar controllers, services, repositories y DTOs
- Controllers livianos
- Lógica de negocio solo en services
- Prisma solo en repositories
- Validaciones con class-validator
- Manejo centralizado de errores
- Guards para autenticación y permisos
- Configuración centralizada con ConfigModule
- Versionado de API obligatorio (/api/v1)

## Base de datos

- PostgreSQL obligatorio
- Prisma ORM obligatorio
- Todas las entidades deben tener:
  - id
  - tenant_id
  - createdAt
  - updatedAt
  - deletedAt opcional

- Relaciones explícitas
- Índices en foreign keys
- Migraciones controladas con Prisma

## Multi-tenancy

- tenant_id obligatorio
- Nunca permitir queries sin tenant_id
- Nunca tomar tenant_id desde body
- tenant_id solo desde JWT/contexto autenticado
- Validar tenant en cada operación
- Evitar tenant bleeding

## Seguridad

- JWT Authentication
- Refresh Token
- Password hashing con bcrypt
- Nunca guardar passwords planas
- Validar permisos antes de acceder a recursos
- Guards obligatorios
- RBAC obligatorio

## Frontend

- Next.js con TypeScript
- Componentes reutilizables
- Arquitectura limpia
- Evitar lógica compleja en componentes
- Manejo centralizado de API
- Formularios tipados

## Código

- Código limpio y mantenible
- Evitar funciones gigantes
- Evitar duplicación
- Nombres descriptivos
- Comentarios solo cuando agreguen valor
- Priorizar mantenibilidad antes que complejidad
- Evitar sobreingeniería

## Arquitectura

- Monolito modular
- Módulos desacoplados
- Interfaces claras entre módulos
- Preparado para SaaS real
- Preparado para crecimiento futuro
- No implementar microservicios prematuramente

## Testing

- Unit testing preparado
- Validar aislamiento multi-tenant
- Validar permisos
- Validar autenticación
- Validar reglas de negocio críticas

## Objetivo principal

Priorizar:
- estabilidad
- mantenibilidad
- seguridad
- escalabilidad
- claridad arquitectónica

Evitar:
- complejidad innecesaria
- hacks rápidos
- dependencias innecesarias
- lógica duplicada