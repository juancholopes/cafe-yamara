# Sistema de Gestión y Venta de Café Orgánico - Finca Miraflores

**Versión:** 1.0  
**Fecha:** Noviembre 2025  
**Desarrollador:** Juan Carlos Lopez Moreno  
**Arquitectura:** Next.js 14+ (App Router) + Supabase + TypeScript

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Arquitectura del Sistema](#2-arquitectura-del-sistema)
3. [Stack Tecnológico Detallado](#3-stack-tecnológico-detallado)
4. [Estructura de Directorios Completa](#4-estructura-de-directorios-completa)
5. [Modelo de Datos](#5-modelo-de-datos)
6. [Contratos TypeScript](#6-contratos-typescript)
7. [Capa de Servicios](#7-capa-de-servicios)
8. [Gestión de Estado](#8-gestión-de-estado)
9. [Autenticación y Autorización](#9-autenticación-y-autorización)
10. [Integración de Pagos](#10-integración-de-pagos)
11. [Optimización y Performance](#11-optimización-y-performance)
12. [Seguridad](#12-seguridad)
13. [Testing](#13-testing)
14. [Deployment](#14-deployment)
15. [Escalabilidad y Mantenimiento](#15-escalabilidad-y-mantenimiento)
16. [Guía de Desarrollo](#16-guía-de-desarrollo)
17. [Troubleshooting](#17-troubleshooting)
18. [Trazabilidad de Requerimientos](#18-trazabilidad-de-requerimientos)

---

## 1. Resumen Ejecutivo

### 1.1 Contexto del Proyecto

Finca Miraflores es una productora de café orgánico ubicada en Guadalupe, Santander, Colombia. Este proyecto consiste en desarrollar una plataforma web que funcione como:

- **Escaparate digital** de la finca (historia, proceso, ubicación)
- **Tienda en línea** para venta directa de productos
- **Sistema de gestión** para administradores

### 1.2 Decisiones Arquitectónicas Clave

**¿Por qué Next.js?**
- SEO nativo con Server-Side Rendering (SSR)
- App Router para estructura modular clara
- API Routes integradas para webhooks
- Optimización automática de imágenes

**¿Por qué Supabase?**
- PostgreSQL gestionado (ACID compliance)
- Autenticación lista para usar (JWT, OAuth)
- Storage integrado para imágenes
- Row Level Security (RLS) para permisos granulares
- Realtime subscriptions si se necesitan en el futuro

**¿Por qué monolito modular?**
- Un solo desarrollador (Solopreneur)
- Deploy simplificado
- Facilita debugging
- Escalable mediante separación lógica (no física)

---

## 2. Arquitectura del Sistema

### 2.1 Diagrama de Alto Nivel

Esta arquitectura sigue un patrón de **Monolito Modular** optimizado para la nube (Vercel).

```ascii
+-----------------------------------------------------------------------+
|                           CLIENTE (Browser)                           |
|                                                                       |
|  +----------------+    +-------------------+    +------------------+  |
|  |  Public Pages  |    |   Admin Dashboard |    |   Shopping Cart  |  |
|  | (SSR/Static)   |    |   (Client Comp)   |    |   (Zustand)      |  |
|  +-------+--------+    +---------+---------+    +---------+--------+  |
|          |                       |                        |           |
+----------|-----------------------|------------------------|-----------+
           | HTTPS                 | HTTPS                  | HTTPS
           v                       v                        v
+-----------------------------------------------------------------------+
|                    SERVIDOR (Next.js App Router)                      |
|                                                                       |
|  +----------------+    +-------------------+    +------------------+  |
|  | Server Actions |    |    API Routes     |    |    Middleware    |  |
|  | (Mutations)    |    | (Webhooks/REST)   |    | (Auth/Routing)   |  |
|  +-------+--------+    +---------+---------+    +---------+--------+  |
|          |                       |                        |           |
|          v                       v                        v           |
|  +-----------------------------------------------------------------+  |
|  |                        SERVICE LAYER                            |  |
|  |        (ProductsService, OrdersService, AuthService)            |  |
|  +-------------------------------+---------------------------------+  |
|                                  |                                    |
+----------------------------------|------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                     INFRAESTRUCTURA (Supabase)                        |
|                                                                       |
|  +----------------+    +-------------------+    +------------------+  |
|  |   PostgreSQL   |    |       Auth        |    |     Storage      |  |
|  |      (DB)      |    |      (JWT)        |    |    (Images)      |  |
|  +----------------+    +-------------------+    +------------------+  |
+-----------------------------------------------------------------------+
```

### 2.2 Flujo de Datos

**Flujo de Lectura (Ejemplo: Listar Productos)**
```ascii
[Usuario] 
    |
    v
[Page Component (Server)] 
    | llama a
    v
[products.service.ts] 
    | consulta
    v
[Supabase Client] 
    | request
    v
[PostgreSQL] 
    | retorna datos
    v
[UI Renderizada]
```

**Flujo de Escritura (Ejemplo: Crear Producto)**
```ascii
[Admin] 
    | submit form
    v
[Server Action] 
    | valida datos (Zod)
    v
[products.service.ts] 
    |
    +---> [Supabase Storage] (Sube imagen)
    |
    +---> [PostgreSQL] (Inserta registro con URL de imagen)
    |
    v
[Revalidate Path] (Actualiza caché de Next.js)
    |
    v
[UI Actualizada]
```

### 2.3 Patrones de Diseño Aplicados

1. **Repository Pattern**: Los servicios (`services/`) abstraen la lógica de acceso a datos, desacoplando los componentes de la base de datos.
2. **Singleton**: El cliente de Supabase se instancia una sola vez para reutilizar la conexión.
3. **Strategy Pattern**: La integración de pagos está diseñada para permitir múltiples pasarelas, aunque actualmente se usa Stripe.
4. **Factory Pattern**: Utilizado internamente por Supabase para la creación de sesiones y tokens JWT.
5. **Decorator Pattern**: Implementado a través del `middleware.ts` para interceptar peticiones y validar autenticación antes de llegar a la ruta.

---

## 3. Stack Tecnológico Detallado

### 3.1 Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 14.2+ | Framework React con SSR/SSG |
| **React** | 18+ | Biblioteca de UI |
| **TypeScript** | 5.3+ | Tipado estático |
| **Tailwind CSS** | 3.4+ | Estilos utility-first |
| **Lucide React** | Latest | Iconos |
| **React Hook Form** | 7.x | Manejo de formularios |
| **Zod** | 3.x | Validación de esquemas |

### 3.2 Backend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Supabase** | Latest | BaaS (Auth, DB, Storage) |
| **PostgreSQL** | 15+ | Base de datos relacional |
| **Stripe** | Latest | Procesamiento de pagos |
| **Resend** | Latest | Envío de emails transaccionales |

### 3.3 Estado y Caché

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Zustand** | 4.x | Estado global cliente (Carrito) |
| **React Query** | 5.x | Caché de datos del servidor (opcional) |

### 3.4 Mapas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Leaflet** | 1.9+ | Mapa interactivo open-source |
| **React Leaflet** | 4.x | Wrapper de Leaflet para React |

### 3.5 DevOps

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Vercel** | - | Hosting y CI/CD |
| **GitHub** | - | Control de versiones |
| **ESLint** | 8.x | Linting |
| **Prettier** | 3.x | Formateo de código |
| **Husky** | 8.x | Git hooks |

---

## 4. Estructura de Directorios Completa

```
src/
├── app/                        # Rutas de la aplicación (App Router)
│   ├── (admin)/                # Grupo de rutas protegidas para administradores
│   │   ├── dashboard/          # Panel principal
│   │   └── products/           # Gestión de productos (CRUD)
│   ├── (auth)/                 # Grupo de rutas de autenticación
│   │   ├── login/              # Inicio de sesión
│   │   └── register/           # Registro de usuarios
│   ├── (public)/               # Grupo de rutas públicas
│   │   ├── about/              # Historia de la finca
│   │   ├── coffee-process/     # Explicación del proceso del café
│   │   ├── location/           # Mapa y ubicación
│   │   └── shop/               # Tienda y carrito
│   ├── api/                    # Endpoints de API (Server-side)
│   │   └── webhooks/           # Webhooks (ej. Stripe)
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout raíz
│   └── not-found.tsx           # Página 404
├── components/                 # Componentes de React
│   ├── features/               # Componentes con lógica de negocio específica
│   │   ├── gallery/            # Galería de imágenes
│   │   ├── map/                # Mapa de la finca
│   │   └── shop/               # Componentes de la tienda (Carrito, Producto)
│   ├── layout/                 # Componentes estructurales (Navbar, Footer)
│   └── ui/                     # Componentes base reutilizables (Button, Card)
├── lib/                        # Utilidades y configuraciones de librerías
│   ├── stripe.ts               # Configuración de Stripe
│   ├── utils.ts                # Funciones helper generales
│   └── supabase/               # Configuración de Supabase
│       ├── client.ts           # Cliente para componentes del lado del cliente
│       └── server.ts           # Cliente para componentes del lado del servidor
├── services/                   # Capa de lógica de negocio
│   ├── auth.service.ts         # Lógica de autenticación
│   ├── orders.service.ts       # Gestión de pedidos
│   └── products.service.ts     # Gestión de productos
├── store/                      # Gestión de estado global
│   └── useCartStore.ts         # Store de Zustand para el carrito
└── types/                      # Definiciones de tipos TypeScript
    ├── database.types.ts       # Tipos generados por Supabase
    └── index.ts                # Tipos manuales de la aplicación
```

---

## 5. Modelo de Datos

El modelo de datos relacional en PostgreSQL (Supabase) está diseñado para soportar las operaciones de comercio electrónico y gestión de contenido.

### Tablas Principales

*   **`profiles`**: Extensión de la tabla `auth.users`. Almacena información adicional del usuario (nombre, rol, dirección).
*   **`products`**: Catálogo de productos (café). Incluye precio, stock, descripción, imágenes.
*   **`orders`**: Cabecera de los pedidos realizados. Vincula al usuario y el estado del pago.
*   **`order_items`**: Detalle de los pedidos. Relaciona `orders` con `products` y guarda el precio en el momento de la compra.
*   **`preparation_steps`**: Pasos del proceso del café para la página "Coffee Process".

---

## 6. Contratos TypeScript

Se utiliza TypeScript en modo estricto para garantizar la integridad de los datos a través de toda la aplicación.

*   **Database Types**: Generados automáticamente desde Supabase CLI para reflejar el esquema de la base de datos.
*   **Domain Interfaces**: Interfaces manuales que extienden o simplifican los tipos de base de datos para su uso en el frontend (ej. `Product`, `CartItem`).

---

## 7. Capa de Servicios

La lógica de negocio está centralizada en la carpeta `services/`. Esto permite:

1.  **Reutilización**: La misma lógica puede ser llamada desde Server Components, Client Components o API Routes.
2.  **Testabilidad**: Facilita la creación de mocks para pruebas unitarias.
3.  **Mantenibilidad**: Si cambia la base de datos, solo se actualiza el servicio, no los componentes UI.

---

## 8. Gestión de Estado

### Estado del Servidor (Server State)
Manejado principalmente por **Next.js App Router**. Los Server Components obtienen datos directamente, eliminando la necesidad de un store global para datos que no cambian frecuentemente en la sesión del usuario.

### Estado del Cliente (Client State)
Manejado por **Zustand**. Se utiliza principalmente para el **Carrito de Compras**, ya que requiere persistencia local (localStorage) y acceso instantáneo desde múltiples componentes (Navbar, ProductCard, CartPage).

---

## 9. Autenticación y Autorización

*   **Autenticación**: Supabase Auth maneja el registro, login y gestión de sesiones.
*   **Autorización**:
    *   **RLS (Row Level Security)**: Reglas en la base de datos que impiden que usuarios no autorizados lean o escriban datos sensibles.
    *   **Middleware**: Protege las rutas `/admin` verificando que el usuario tenga el rol de administrador en su metadata o perfil.

---

## 10. Integración de Pagos

Se utiliza **Stripe** para procesar pagos de manera segura.

**Flujo de Pago:**
1.  Usuario confirma carrito.
2.  Se crea una sesión de Checkout en Stripe.
3.  Usuario es redirigido a la página segura de Stripe.
4.  Al completar el pago, Stripe envía un **Webhook** a `/api/webhooks/stripe`.
5.  El servidor verifica la firma del webhook y actualiza el estado de la orden en la base de datos.

---

## 11. Optimización y Performance

*   **Imágenes**: Uso del componente `<Image />` de Next.js para lazy loading y redimensionamiento automático.
*   **Fuentes**: `next/font` para cargar fuentes sin layout shift.
*   **SSR/SSG**: Las páginas públicas se renderizan en el servidor para un FCP (First Contentful Paint) rápido.
*   **Code Splitting**: Automático por ruta gracias a Next.js.

---

## 12. Seguridad

*   **Validación de Entradas**: Zod se usa para validar todos los formularios y datos que entran al servidor.
*   **Protección CSRF/XSS**: React escapa el contenido por defecto. Next.js añade cabeceras de seguridad.
*   **Variables de Entorno**: Las claves secretas (Stripe Secret Key, Supabase Service Role) nunca se exponen al cliente.

---

## 13. Testing

*   **Unit Testing**: Jest + React Testing Library para componentes aislados y funciones de utilidad.
*   **E2E Testing**: Playwright o Cypress para probar flujos completos (Login -> Compra).

---

## 14. Deployment

El despliegue se realiza en **Vercel** conectado al repositorio de GitHub.
*   **CI/CD**: Cada push a `main` dispara un build y despliegue automático.
*   **Preview Deployments**: Cada Pull Request genera una URL única para probar cambios antes de fusionar.

---

## 15. Escalabilidad y Mantenimiento

### Estrategia de Escalado
Gracias a la arquitectura modular, el sistema puede escalar de las siguientes formas:

1.  **Escalado Vertical (Base de Datos)**: Supabase permite aumentar recursos de la BD sin cambios de código.
2.  **Escalado Horizontal (Frontend)**: Vercel escala automáticamente las instancias serverless según el tráfico.
3.  **Desacoplamiento**: Si el módulo de "Tienda" crece mucho, puede extraerse a un microservicio o sub-aplicación sin afectar el módulo "Institucional".

---

## 16. Guía de Desarrollo

1.  Clonar el repositorio.
2.  Copiar `.env.example` a `.env.local` y configurar credenciales.
3.  Ejecutar `npm install`.
4.  Ejecutar `npm run dev`.

---

## 17. Troubleshooting

*   **Error de conexión a Supabase**: Verificar variables de entorno y conexión a internet.
*   **Webhook de Stripe fallando**: Usar Stripe CLI para reenviar eventos localmente (`stripe listen`).
*   **Estilos no cargan**: Verificar configuración de `tailwind.config.ts` y `globals.css`.

---

## 18. Trazabilidad de Requerimientos

Esta sección asigna los componentes de la arquitectura a los requisitos específicos del Informe Técnico SENA.

### A. Requerimientos Funcionales (RF)

| ID | Requerimiento (PDF) | Solución Arquitectónica |
|----|---------------------|-------------------------|
| **RF01** | Mostrar información "About" | `app/(public)/about/page.tsx` (Static Rendering para velocidad). |
| **RF02** | Pasos preparación café | `app/(public)/coffee-process` + Base de Datos (Tabla `preparation_steps`). |
| **RF03** | Ubicación y Mapa | Componente `src/components/features/map/FarmMap.tsx` (Integración API Externa). |
| **RF04** | Catálogo Productos | `src/services/products.service.ts` conectando a Tabla `products` en Supabase. |
| **RF05** | Gestión Ventas/Pagos | Integración Stripe en `api/webhooks` + Estado global en `store/useCartStore.ts`. |
| **RF06** | Gestión Usuarios/Roles | Supabase Auth (Manejo de sesión) + Tabla `profiles` (Roles: admin/cliente). |

### B. Requerimientos No Funcionales (RNF)

| ID | Requerimiento (PDF) | Solución Arquitectónica |
|----|---------------------|-------------------------|
| **RNF-02** | Rendimiento (<3s carga) | Uso de Next.js Server Components (Renderizado en servidor) y optimización automática de imágenes con `next/image`. |
| **RNF-03** | Seguridad (Rutas protegidas) | Archivo `middleware.ts` intercepta peticiones a `/admin` y verifica JWT de Supabase. |
| **RNF-05** | Escalabilidad (Nuevos módulos) | Estructura de carpetas modular (`features/`). Agregar un módulo no rompe lo existente. |
| **RNF-06** | Usabilidad (Intuitiva) | Uso de Tailwind CSS para diseño responsivo móvil-first y componentes UI consistentes. |
| **RNF-07** | Mantenibilidad (Código limpio) | Uso de TypeScript (Interfaces estrictas) y separación de lógica (`services/`) vs vista (`components/`). |
| **RNF-08** | Portabilidad | Arquitectura agnóstica al hosting (se puede desplegar en Vercel, AWS, o Netlify con Docker). |
