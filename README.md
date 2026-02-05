# 🏥 Sistema Veterinario - VetSystem

Sistema web completo de gestión veterinaria desarrollado con Next.js 15, React y TailwindCSS. Permite administrar propietarios, pacientes, citas médicas, expedientes clínicos y actividad del sistema.

## 👤 Autor
**Jimena Arguedas**  
Proyecto académico - 2025

---

## 🚀 Características Principales

### ✅ Autenticación y Sesión
- Login y registro con validación completa
- Manejo de sesiones con localStorage y tokens
- Protección de rutas privadas
- Cierre de sesión seguro

### 👥 Gestión de Propietarios
- CRUD completo (Crear, Leer, Actualizar, Eliminar)
- Búsqueda por nombre, email o teléfono
- Paginación (10 registros por página)
- Validación de duplicados por email/teléfono
- Integridad referencial con pacientes

### 🐾 Gestión de Pacientes
- CRUD completo de pacientes (mascotas)
- Datos: nombre, especie, género, raza, edad, historial médico
- Relación con propietario (clave foránea)
- Búsqueda y paginación
- Prevención de duplicados (nombre + especie + propietario)
- Validación de edad (entero no negativo)

### 📅 Sistema de Citas
- Calendario mensual interactivo
- Creación de citas con fecha/hora y paciente
- Widgets: "Citas de hoy" y "Próximos 7 días"
- Reprogramación de citas (cambio de fecha/hora)
- Marcar citas como atendidas o pendientes
- Eliminación de citas individuales

### 📋 Expedientes Médicos
- Gestión de expedientes por paciente
- Prescripciones médicas: medicamento, dosis, frecuencia, duración, notas
- Estados: pendiente / revisado
- Historial completo de prescripciones con fechas
- Eliminación individual de prescripciones

### 🔔 Sistema de Notificaciones
- Registro de actividad del sistema (log de eventos)
- Notificaciones en tiempo real
- Contador de actividades no leídas
- Tipos de eventos: creación, actualización, eliminación (owners, patients, appointments, records)

### 🎨 Diseño y UX
- Paleta de colores mint/emerald/lime para Login/Register
- Paleta azul/gris para Dashboard
- Modo claro y oscuro (preferencia persistente)
- Sidebar responsive con menú colapsable en móvil
- Iconos animados (mascota rotativa en sidebar)
- Diseño responsive (mobile-first)
- Animaciones suaves y transiciones
- Consejos veterinarios en el dashboard

### 📊 KPIs y Resumen
- Tarjetas resumen: total propietarios, pacientes, citas hoy, citas 7 días
- Actividad reciente visible en dashboard
- Widget de consejos para médicos veterinarios

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15.0.3** (App Router)
- **React 19.0.0-rc** (Hooks, Client Components)
- **TailwindCSS 3.4.1** (Diseño responsivo)
- **React Icons 5.3.0** (Iconografía)

### Backend (API Externa)
- **Node.js + Express** (API REST)
- **PostgreSQL** (Base de datos relacional)
- Puerto backend: `http://localhost:3001`

### Almacenamiento
- **localStorage** (Persistencia local como fallback)
- **Token JWT** (Autenticación)

### Herramientas
- **ESLint** (Linting)
- **PostCSS** (Procesamiento de CSS)

---

## 📁 Estructura del Proyecto

```
leccion_2_login/
├── app/
│   ├── globals.css              # Estilos globales y animaciones
│   ├── layout.js                # Layout raíz de Next.js
│   ├── page.js                  # Login (/)
│   ├── register/
│   │   └── page.js              # Registro (/register)
│   ├── dashboard/
│   │   └── page.js              # Dashboard principal (/dashboard)
│   ├── components/              # Componentes reutilizables (futuro)
│   ├── owners/                  # Módulo propietarios (futuro)
│   └── patients/                # Módulo pacientes (futuro)
├── public/                      # Recursos estáticos
├── jsconfig.json                # Alias de rutas (@/)
├── next.config.mjs              # Configuración de Next.js
├── package.json                 # Dependencias y scripts
├── postcss.config.mjs           # Configuración PostCSS
├── tailwind.config.js           # Configuración Tailwind
└── README.md                    # Este archivo
```

---

## 🔧 Instalación y Configuración

### Prerequisitos
- **Node.js** v18 o superior
- **npm** o **yarn**
- **Backend API** corriendo en `http://localhost:3001`

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/Jimenosky/Proyecto-Login-con-Dashboard---Jimena-Arguedas.git
cd leccion_2_login
```

### Paso 2: Instalar dependencias
```bash
npm install
```

### Paso 3: Configurar variables de entorno (opcional)
Si el backend usa otro puerto, ajusta las URLs en el código:
- `app/page.js` (login)
- `app/register/page.js` (registro)
- `app/dashboard/page.js` (dashboard)

Por defecto usa: `http://localhost:3001`

### Paso 4: Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

### Paso 5: Build para producción
```bash
npm run build
npm start
```

---

## 📖 Uso del Sistema

### 1. Registro de Usuario
1. Accede a `/register`
2. Completa los campos:
   - Nombre completo (solo letras)
   - Teléfono (7-20 caracteres numéricos)
   - Email (formato válido)
   - Contraseña (mín. 6 caracteres, con mayúscula, minúscula, número y símbolo)
3. Clic en **Registrar**

### 2. Login
1. Accede a `/` (raíz)
2. Ingresa email y contraseña
3. Clic en **Ingresar**

### 3. Dashboard
Tras iniciar sesión, accedes al dashboard con módulos:

#### 📂 Propietarios
- Clic en **Propietarios** (sidebar o tarjeta)
- **Nuevo Propietario**: completa nombre, email, teléfono, dirección
- **Editar**: selecciona un propietario existente
- **Eliminar**: solo si no tiene pacientes asociados
- **Buscar**: filtra por cualquier campo

#### 🐾 Pacientes
- Clic en **Pacientes**
- **Nuevo Paciente**: nombre, especie, género, raza, edad (años), historial, propietario
- **Editar/Eliminar**: acciones disponibles
- **Buscar**: filtra por cualquier campo

#### 📅 Calendario
- Clic en **Calendario**
- Vista mensual con citas por día
- **Nueva Cita**: título (opcional), fecha/hora, propietario (opcional), paciente (obligatorio)
- **Widgets**: Citas de hoy / Próximos 7 días
  - Marcar como atendida/pendiente
  - Reprogramar (cambiar fecha/hora)
  - Eliminar

#### 📋 Expedientes
- Clic en **Expedientes**
- Selecciona un paciente
- **Agregar Prescripción**: medicamento, dosis, frecuencia, duración, notas
- **Cambiar Estado**: pendiente ↔ revisado
- **Eliminar Prescripción**: eliminación individual

#### ⚙️ Ajustes
- Cambiar tema: Claro / Oscuro
- La preferencia se guarda automáticamente

#### 👤 Perfil
- Edita tu nombre, teléfono y email
- Los cambios se sincronizan con el backend

---

## 🔒 Seguridad

- **Validación de formularios** en cliente y servidor
- **Tokens JWT** para autenticación
- **Protección de rutas**: redirección automática si no hay sesión
- **Prevención de duplicados**: validaciones de integridad
- **Sanitización de datos**: expresiones regulares para formato

---

## 🧩 Decisiones Técnicas

### ¿Por qué Next.js?
- SSR (Server-Side Rendering) opcional
- App Router moderno con rutas basadas en archivos
- Optimización automática de código
- Compatibilidad con React 19

### ¿Por qué TailwindCSS?
- Diseño rápido con clases utilitarias
- Responsive por defecto
- Fácil personalización de paletas
- Menor CSS final (PurgeCSS automático)

### ¿Por qué localStorage?
- Fallback robusto si el backend falla
- Persistencia de preferencias (tema, citas)
- Datos temporales sin necesidad de backend

### ¿Por qué no Context API / Zustand?
- Proyecto académico con alcance limitado
- Todas las operaciones se manejan en componentes locales
- Mejora futura sugerida: migrar a Context o Redux para estado global

---

## 🐛 Solución de Problemas

### El backend no responde
- Verifica que el servidor API esté corriendo en `http://localhost:3001`
- Revisa los logs del backend
- El sistema usa fallback local (localStorage) automáticamente

### Error de hidratación (Next.js)
- Los campos de formulario usan `mounted` para evitar mismatch
- Si persiste, limpia caché: `npm run build` de nuevo

### Duplicados en propietarios/pacientes
- La última corrección implementa validación por email/teléfono
- Si el backend devuelve duplicados, el frontend los filtra

### Citas no se guardan
- Las citas se guardan solo en localStorage
- No requieren backend (funcionalidad local)

---

## 🚀 Mejoras Futuras

### Funcionalidades
- [ ] Exportar expedientes a PDF
- [ ] Enviar recordatorios por email/SMS
- [ ] Dashboard con gráficos (Chart.js)
- [ ] Búsqueda global en todo el sistema
- [ ] Filtros avanzados (rango de fechas, especie, etc.)
- [ ] Impresión de prescripciones
- [ ] Modo offline completo (PWA)

### Arquitectura
- [ ] Migrar a Context API o Zustand para estado global
- [ ] Separar en componentes reutilizables
- [ ] Tests unitarios (Jest, React Testing Library)
- [ ] Tests E2E (Playwright, Cypress)
- [ ] CI/CD con GitHub Actions
- [ ] Deploy en Vercel o Netlify

### UX/UI
- [ ] Temas personalizables (selector de paleta)
- [ ] Accesibilidad (ARIA, navegación por teclado)
- [ ] Animaciones de carga (skeletons)
- [ ] Tour guiado para nuevos usuarios
- [ ] Tooltips y ayudas contextuales

---

## 📄 Licencia

Este proyecto es de uso académico y personal. No está bajo licencia pública.

---

## 📧 Contacto

**Jimena Arguedas**  
- GitHub: [@Jimenosky](https://github.com/Jimenosky)
- Repositorio: [Proyecto-Login-con-Dashboard---Jimena-Arguedas](https://github.com/Jimenosky/Proyecto-Login-con-Dashboard---Jimena-Arguedas)

---

## 🙏 Agradecimientos

- Profesor y curso de desarrollo web
- Comunidad de Next.js y React
- Iconos: React Icons
- Inspiración: sistemas reales de gestión veterinaria

---

**¡Gracias por revisar este proyecto! 🐾**
#   S i s t e m a - w e b - v e t e r i n a r i a - j i m e  
 