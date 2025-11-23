# Finca Miraflores Web

Plataforma de comercio electrónico y presentación para Finca Miraflores, especializada en café de especialidad.

## 🏗 Arquitectura del Proyecto

El proyecto sigue una arquitectura modular basada en **Next.js 15 (App Router)**, diseñada para escalabilidad y separación de responsabilidades.

### Estructura de Directorios

```bash
/finca-miraflores-web
├── src/
│   ├── app/                # Rutas y Vistas (App Router)
│   ├── components/         # UI y Lógica de Presentación
│   ├── lib/                # Configuración de Terceros (Supabase, Stripe)
│   ├── services/           # Capa de Datos (Business Logic)
│   ├── store/              # Estado Global (Zustand)
│   └── types/              # Definiciones TypeScript
```

## 🧠 Lógica de la Aplicación

### 1. Enrutamiento y Navegación (`src/app/`)
Utilizamos **Route Groups** para organizar lógicamente las vistas sin afectar la URL final:

*   **(public)**: Rutas accesibles para todos los visitantes.
    *   `about/`: Historia y filosofía (RF01).
    *   `coffee-process/`: Guía interactiva del proceso del café (RF02).
    *   `location/`: Mapa de la finca y galería (RF03).
    *   `shop/`: E-commerce completo con catálogo, detalles y carrito (RF04).
*   **(auth)**: Flujos de autenticación (Login/Register) (RF06).
*   **(admin)**: Panel de administración protegido.
    *   Requiere autenticación y rol de administrador.
    *   Gestión de productos (CRUD) y dashboard.

### 2. Componentes (`src/components/`)
Separación clara entre componentes visuales puros y componentes con lógica de negocio:

*   **ui/**: Componentes atómicos reutilizables (Botones, Inputs, Cards) sin lógica de negocio.
*   **layout/**: Estructura global (Navbar, Footer).
*   **features/**: Componentes complejos acoplados a una funcionalidad específica:
    *   `shop/`: Lógica de compra (ProductCard, CartSummary).
    *   `map/`: Integración con mapas interactivos.
    *   `process/`: Visualización de pasos del proceso del café.

### 3. Gestión de Estado (`src/store/`)
*   **Zustand**: Se utiliza para manejar el estado global del carrito de compras (`useCartStore`).
    *   Persistencia local.
    *   Acciones: `addItem`, `removeItem`, `clearCart`.

### 4. Capa de Servicios (`src/services/`)
Abstracción de la lógica de acceso a datos para desacoplar los componentes de la base de datos (Supabase):

*   `products.service.ts`: Obtención y filtrado de productos.
*   `orders.service.ts`: Gestión de pedidos.
*   `auth.service.ts`: Lógica de autenticación.

### 5. Integraciones (`src/lib/`)
Configuraciones centralizadas para servicios externos:
*   **Supabase**: Cliente de base de datos y autenticación.
*   **Stripe**: Procesamiento de pagos y webhooks.

### 6. Seguridad
*   **Middleware (`middleware.ts`)**: Protección de rutas `(admin)` verificando sesión y roles antes de renderizar la página.
*   **RLS (Row Level Security)**: Políticas de seguridad a nivel de base de datos en Supabase.

## 🚀 Stack Tecnológico
*   **Framework**: Next.js 15
*   **Lenguaje**: TypeScript
*   **Estilos**: Tailwind CSS
*   **Base de Datos**: Supabase (PostgreSQL)
*   **Estado**: Zustand
*   **Pagos**: Stripe
*   **Mapas**: Leaflet / Google Maps

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

