# Informe Técnico de Arquitectura de Software
## Sistema de Gestión y Venta de Café Orgánico - Finca Miraflores

**Presentado por:** Juan Carlos Lopez Moreno  
**Fecha:** 03 de Diciembre de 2025  
**Versión del Documento:** 1.0  

---

## 1. Introducción

El presente informe técnico detalla la arquitectura y diseño del sistema de información desarrollado para **Finca Miraflores**, una productora de café orgánico ubicada en Guadalupe, Santander. 

El proyecto responde a la necesidad de modernizar la presencia digital de la finca, pasando de procesos manuales a una plataforma web integrada que centralice la identidad de marca, la comercialización de productos y la gestión administrativa. La solución tecnológica se basa en un stack moderno compuesto por **Next.js** y **Supabase**, seleccionado por su robustez, escalabilidad y capacidad de despliegue en la nube.

## 2. Alcance

El sistema abarca tres módulos funcionales principales diseñados para diferentes tipos de usuarios:

1.  **Módulo Institucional (Público):**
    *   Escaparate digital para la presentación de la finca, su historia y ubicación.
    *   Visualización detallada del proceso de producción del café (beneficio, secado, tostión).
    
2.  **Módulo de Comercio Electrónico (Cliente):**
    *   Catálogo de productos con gestión de inventario en tiempo real.
    *   Carrito de compras persistente.
    *   Pasarela de pagos segura integrada.

3.  **Módulo Administrativo (Privado):**
    *   Dashboard de gestión para el administrador de la finca.
    *   Control de inventario, creación de productos y visualización de pedidos.

El alcance técnico se limita al desarrollo de la aplicación web progresiva (PWA) y su infraestructura en la nube, excluyendo el desarrollo de aplicaciones nativas móviles en esta fase.

## 3. Lista de Requerimientos

A continuación se relacionan los requerimientos funcionales y no funcionales que la arquitectura del sistema satisface, garantizando la trazabilidad con las necesidades del negocio.

### 3.1 Requerimientos Funcionales (RF)

| ID | Descripción | Componente Arquitectónico |
|----|-------------|---------------------------|
| **RF01** | El sistema debe mostrar información histórica y "About Us". | Rutas estáticas Next.js (`app/(public)/about`). |
| **RF02** | El sistema debe ilustrar los pasos de preparación del café. | Base de datos relacional (Tabla `preparation_steps`). |
| **RF03** | El sistema debe mostrar la ubicación geográfica de la finca. | Integración de Mapas (`Leaflet`) en componentes de UI. |
| **RF04** | El sistema debe permitir la gestión y visualización del catálogo. | Servicios de API (`products.service.ts`) y Supabase DB. |
| **RF05** | El sistema debe procesar ventas y pagos en línea. | Integración con Stripe y Webhooks (`api/webhooks`). |
| **RF06** | El sistema debe gestionar usuarios y roles (Admin/Cliente). | Supabase Auth y Row Level Security (RLS). |

### 3.2 Requerimientos No Funcionales (RNF)

| ID | Descripción | Estrategia de Implementación |
|----|-------------|------------------------------|
| **RNF-01** | **Disponibilidad**: El sistema debe estar operativo 99.9%. | Despliegue Serverless en Vercel y BD gestionada. |
| **RNF-02** | **Rendimiento**: Tiempo de carga inferior a 3 segundos. | Server-Side Rendering (SSR) y optimización de imágenes. |
| **RNF-03** | **Seguridad**: Protección de datos y rutas administrativas. | Middleware de autenticación y validación de esquemas (Zod). |
| **RNF-04** | **Escalabilidad**: Capacidad de crecimiento modular. | Arquitectura de Monolito Modular. |

---

## 4. Implementación de Características de Redundancia

La redundancia en el sistema se implementa a través de la duplicación de componentes críticos y datos para asegurar que una falla en un punto único no detenga la operación del sistema.

### 4.1 Redundancia de Datos (Database Replication)
La arquitectura utiliza **Supabase (PostgreSQL)** como capa de persistencia. Esta plataforma gestionada implementa redundancia de datos mediante:
*   **WAL (Write-Ahead Logging):** Cada transacción se registra en un log antes de aplicarse, permitiendo la recuperación del estado ante fallos.
*   **Copias de Seguridad (Backups):** El sistema realiza copias de seguridad automáticas diarias, almacenadas en ubicaciones geográficas distintas al servidor principal, garantizando la integridad de la información histórica de ventas y productos.

### 4.2 Redundancia de Contenido Estático (CDN)
Los activos estáticos (imágenes de productos, estilos, scripts) no se sirven desde un único servidor.
*   **Implementación:** Se utiliza la **Edge Network de Vercel**.
*   **Evidencia:** Al desplegar la aplicación, los activos se replican automáticamente en múltiples nodos alrededor del mundo (CDN). Si el nodo de acceso más cercano al usuario falla, la petición es enrutada automáticamente al siguiente nodo disponible, garantizando que la interfaz de usuario siempre cargue.

---

## 5. Implementación de Estrategias de Alta Disponibilidad (HA)

La Alta Disponibilidad se logra mediante una arquitectura que minimiza el tiempo de inactividad y escala automáticamente ante la demanda.

### 5.1 Arquitectura Serverless (Computación sin Servidor)
El backend del sistema no reside en un servidor físico único o una máquina virtual tradicional (VPS) que podría saturarse o fallar.
*   **Estrategia:** Uso de **Next.js App Router** desplegado en funciones Serverless.
*   **Funcionamiento:** Cada vez que un usuario accede a una ruta dinámica (ej. `/shop`), se instancia una función efímera para atender esa solicitud específica.
*   **Beneficio HA:** Si el tráfico aumenta repentinamente (pico de ventas), la infraestructura crea instancias paralelas ilimitadas automáticamente. No existe un "servidor caído" por sobrecarga de CPU.

### 5.2 Desacoplamiento de Servicios
La arquitectura separa estrictamente el Frontend, el Backend (lógica) y la Base de Datos.
*   **Estrategia:** Conexión mediante APIs y Cliente de Supabase (`src/lib/supabase/client.ts`).
*   **Beneficio HA:** 
    *   Si el servicio de almacenamiento de imágenes presenta latencia, la navegación por el sitio web (Frontend) sigue funcionando.
    *   Si la pasarela de pagos (Stripe) entra en mantenimiento, el catálogo de productos sigue siendo visible.
    *   El fallo de un componente no provoca una caída en cascada de todo el sistema.

### 5.3 Gestión de Conexiones a Base de Datos
Para evitar el agotamiento de conexiones en situaciones de alto tráfico (un problema común en arquitecturas serverless):
*   **Estrategia:** Uso de **Supabase Connection Pooling** (PgBouncer).
*   **Implementación:** El sistema no conecta directamente a la base de datos por cada petición de usuario de forma descontrolada. Utiliza un pool de conexiones que mantiene enlaces activos y los reutiliza, permitiendo manejar miles de usuarios concurrentes sin saturar el servidor de base de datos PostgreSQL.
