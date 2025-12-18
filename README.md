This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Arquitectura del Proyecto

> **Nota:** Para una documentación detallada de la arquitectura, diagramas de flujo, modelo de datos y trazabilidad de requerimientos, consulta el archivo [ARCHITECTURE.md](./ARCHITECTURE.md).

Este proyecto esta construido sobre Next.js utilizando el App Router y TypeScript. A continuacion se detalla la estructura y las tecnologias principales.

### Tecnologias Principales

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos y Autenticacion**: Supabase
- **Estado Global**: Zustand
- **Pagos**: Stripe
- **Fuentes**: next/font (Rethink Sans, Yeseva One)

### Variables de Entorno

Para ejecutar localmente y desplegar en Vercel (especialmente para que el `middleware` no falle), define estas variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Estructura de Directorios

El codigo fuente se encuentra en el directorio `src/` y sigue una arquitectura modular organizada por responsabilidades:

- **app/**: Contiene las rutas de la aplicacion y layouts. Se utilizan grupos de rutas para separar contextos logicos:
    - `(public)`: Paginas accesibles al publico general (Tienda, Inicio, Ubicacion).
    - `(admin)`: Panel de administracion y gestion de productos.
    - `(auth)`: Rutas de autenticacion (Login, Registro).
    - `api/`: Endpoints de API del servidor (ej. Webhooks de Stripe).

- **components/**: Componentes de React divididos por su nivel de abstraccion:
    - `ui/`: Componentes base reutilizables y genericos sin logica de negocio especifica (Botones, Cards).
    - `features/`: Componentes acoplados a la logica de negocio (Carrito de compras, Mapa de finca, Galeria).
    - `layout/`: Componentes estructurales globales (Navbar, Footer).

- **lib/**: Configuraciones de librerias externas y utilidades transversales:
    - Configuracion de clientes de Supabase (Cliente y Servidor).
    - Configuracion del SDK de Stripe.
    - Funciones de utilidad generales (`utils.ts`).

- **services/**: Capa de servicios para la logica de acceso a datos. Esta capa abstrae las llamadas a la base de datos o APIs externas, separando la logica de datos de la interfaz de usuario (ej. `products.service.ts`, `auth.service.ts`).

- **store/**: Manejo del estado global del lado del cliente (ej. logica del carrito de compras) utilizando Zustand.

- **types/**: Definiciones de tipos TypeScript manuales e interfaces generadas automaticamente por Supabase.

### Decisiones de Diseño

1. **Separacion de Responsabilidades**: La logica de negocio compleja se delega a la carpeta `services/` o `store/`, manteniendo los componentes de UI enfocados en la presentacion.
2. **Server vs Client Components**: Se prioriza el uso de Server Components para el renderizado inicial y SEO, utilizando Client Components (`use client`) solo cuando se requiere interactividad o estado del navegador.
3. **Estilos Globales**: Se utiliza Tailwind CSS configurado en `globals.css` para mantener un sistema de diseño consistente y evitar conflictos entre estilos locales de componentes.
