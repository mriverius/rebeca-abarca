# Rebeca - Intuitive Coach & Sound Healing ✨

Sitio web premium con experiencia inmersiva "5D" para Rebeca, coach intuitiva y facilitadora de Sound Healing en Ciudad Colón, Costa Rica.

## 🎨 Stack Tecnológico

- **Framework:** Next.js 14+ (App Router)
- **Estilos:** Tailwind CSS 3.4+ con configuración custom
- **Animaciones:** Framer Motion
- **Partículas:** tsparticles
- **Iconos:** Lucide React
- **Fuentes:** Playfair Display + DM Sans
- **Optimizado para:** Vercel

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes y metadata
│   ├── page.tsx            # Página principal con todas las secciones
│   └── globals.css         # Estilos globales y animaciones custom
├── components/
│   ├── ui/                 # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── ShimmerText.tsx
│   │   └── Accordion.tsx
│   ├── layout/             # Componentes de layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── sections/           # Secciones del sitio
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   └── decorative/         # Elementos decorativos
│       ├── GoldParticles.tsx
│       ├── FlowerOfLife.tsx
│       └── GoldDivider.tsx
└── lib/
    ├── constants.ts        # Datos, URLs, WhatsApp links
    └── animations.ts       # Variantes de Framer Motion
```

## 🎯 Características

### Experiencia "5D" Inmersiva
- ✨ Partículas doradas flotantes (tsparticles)
- 💫 Efecto shimmer en textos principales
- 🌊 Scroll animations suaves con Framer Motion
- 🔮 Glassmorphism en cards de servicios
- ⚡ Hover effects luminosos
- 🌸 Geometría sagrada animada (Flor de la Vida)
- 🎨 Gradientes dorados animados
- 📱 Mobile-first responsive design

### Conversión Optimizada
- 💬 Botón flotante de WhatsApp siempre visible
- 🎯 Todos los CTAs llevan a WhatsApp con mensajes prellenados
- 📊 Funnel de conversión claro
- 🔗 Enlaces específicos por servicio

### SEO & Performance
- ⚡ Next.js con optimización automática
- 🖼️ next/image para imágenes optimizadas
- 📝 Metadata completa (Open Graph, Twitter Cards)
- 🎨 Fuentes optimizadas con next/font
- 🚀 Ready para deploy en Vercel

## 📝 Personalización

### Cambiar Imágenes
1. Agregar foto de Rebeca en `/public/images/rebeca.jpg`
2. Actualizar el componente `About.tsx` para usar la imagen real

### Modificar Contenido
- **Servicios:** Editar `src/lib/constants.ts` → `SERVICES`
- **FAQ:** Editar `src/lib/constants.ts` → `FAQ_ITEMS`
- **Testimonios:** Editar `src/lib/constants.ts` → `TESTIMONIALS`
- **WhatsApp:** Editar `src/lib/constants.ts` → `WHATSAPP_LINKS`

### Colores
Modificar `tailwind.config.ts` en la sección `colors.gold`

## 📱 Contacto

- **WhatsApp:** +506 7070-0456
- **Email:** rebecaabarca.coach@gmail.com
- **Instagram:** @rebecaintuitivecoach
- **Ubicación:** Ciudad Colón, Costa Rica

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conectar el repositorio directamente en [vercel.com](https://vercel.com)

## 📄 Licencia

© 2026 Rebeca - Intuitive Coach & Sound Healing
