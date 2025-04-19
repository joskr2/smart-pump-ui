# SMART Pump UI

Interfaz web para la gestión de usuarios y balances de SMART Pump, construida con **React**, **TypeScript**, **Vite** y **TailwindCSS**.

## Capturas de pantalla

<img width="479" alt="Screenshot 2025-04-18 at 19 23 56" src="https://github.com/user-attachments/assets/c024558b-7e05-4830-949b-3931f5bbcc1a" />
<img width="1378" alt="Screenshot 2025-04-18 at 19 23 45" src="https://github.com/user-attachments/assets/d0b275d0-5958-4a0d-9e0a-73edd2c8b3fe" />
<img width="1366" alt="Screenshot 2025-04-18 at 19 23 34" src="https://github.com/user-attachments/assets/68bec574-f15a-4f4a-89b4-40016f65254c" />
<img width="812" alt="Screenshot 2025-04-18 at 19 23 14" src="https://github.com/user-attachments/assets/cfe9eb72-2def-4b8d-9cea-33dde84a31c6" />


## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Configuración ESLint](#configuración-eslint)
- [Personalización](#personalización)
- [Licencia](#licencia)

## Características

- Autenticación de usuarios
- Dashboard con balance y datos personales
- Edición de perfil de usuario
- Manejo de estado global con React Context
- Llamadas a API REST usando Axios y React Query
- Componentes reutilizables y estilizados con TailwindCSS

## Tecnologías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/) (validación de formularios)
- [Radix UI](https://www.radix-ui.com/) (accesibilidad de componentes)

## Estructura del Proyecto

```
├── src/
│   ├── api/           # Llamadas a la API y configuración de Axios
│   ├── assets/        # Imágenes y recursos estáticos
│   ├── components/    # Componentes reutilizables y de layout
│   ├── contexts/      # Contextos globales (Auth)
│   ├── features/      # Features agrupadas (auth, profile, etc)
│   ├── hooks/         # Custom hooks (useLogin, useUserProfile, etc)
│   ├── lib/           # Utilidades y helpers
│   ├── pages/         # Páginas principales (Login, Dashboard, Profile)
│   ├── router/        # Configuración de rutas
│   ├── types/         # Tipos y modelos TypeScript
│   └── main.tsx       # Punto de entrada principal
├── public/            # Archivos públicos y favicon
├── index.html         # HTML principal
├── package.json       # Dependencias y scripts
├── tailwind.config.js # Configuración de TailwindCSS
├── tsconfig*.json     # Configuración de TypeScript
└── vite.config.ts     # Configuración de Vite
```

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/smart-pump-ui.git
   cd smart-pump-ui
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura las variables de entorno si es necesario.**
   - Por defecto, la API apunta a `http://localhost:3001` ([src/api/client.ts](src/api/client.ts)).

4. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

5. **Abre** [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts Disponibles

- `npm run dev` — Inicia el servidor de desarrollo con Vite.
- `npm run build` — Compila la aplicación para producción.
- `npm run preview` — Sirve la build de producción localmente.
- `npm run lint` — Ejecuta ESLint sobre el código fuente.

## Ejemplo de Prueba: Login

Puedes probar el login usando el siguiente usuario de ejemplo (si tu backend está configurado para aceptar usuarios de prueba):

- **Usuario:** `henderson.briggs@geeknet.net`
- **Contraseña:** `23derd*334`

1. Inicia la aplicación localmente.
2. Accede a la ruta `/login`.
3. Ingresa las credenciales anteriores y haz clic en "Iniciar sesión".

Si el login es exitoso, serás redirigido al dashboard donde podrás ver el balance y los datos personales del usuario demo.
## Personalización

- **Estilos:** Modifica [`src/index.css`](src/index.css) y la configuración de Tailwind para personalizar la apariencia.
- **Componentes:** Los componentes UI reutilizables están en [`src/components/ui`](src/components/ui).
- **API:** Cambia la URL base de la API en [`src/api/client.ts`](src/api/client.ts) si tu backend está en otra dirección.

## Licencia

MIT

---

Desarrollado por Josue
