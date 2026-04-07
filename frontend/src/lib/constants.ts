export const WHATSAPP_BASE = "https://wa.me/50670700456";

export const WHATSAPP_LINKS = {
  general: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios`,
  coaching: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20me%20interesa%20una%20sesión%20de%20Coaching%201:1`,
  soundHealingIndividual: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20me%20interesa%20una%20sesión%20de%20Sound%20Healing`,
  soundHealingCouple: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20me%20interesa%20Sound%20Healing%20en%20pareja`,
  soundHealingGroup: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20me%20interesa%20una%20sesión%20grupal%20de%20Sound%20Healing`,
  massageSound: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20me%20interesa%20la%20sesión%20de%20Masaje%20y%20Sonido`,
  events: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20quiero%20cotizar%20un%20evento%20privado%20de%20Sound%20Healing`,
  monthlySessions: `${WHATSAPP_BASE}?text=Hola%20Rebeca,%20quiero%20reservar%20espacio%20en%20la%20próxima%20sesión%20grupal%20mensual`,
};

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
  whatsappLink: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "coaching",
    name: "Coaching 1:1 \"Sintonía del Alma\"",
    description: "Identidad, energía y reprogramación subconsciente. Un acompañamiento personalizado para reconectar con tu poder interior.",
    price: "₡33.000",
    icon: "◈",
    whatsappLink: WHATSAPP_LINKS.coaching,
    featured: true,
  },
  {
    id: "sound-healing-individual",
    name: "Sound Healing Individual",
    description: "Sesión 1:1 de sanación sonora con cuencos tibetanos, diapasones y técnicas vibraciones para equilibrar tu energía.",
    price: "₡30.000",
    icon: "♪",
    whatsappLink: WHATSAPP_LINKS.soundHealingIndividual,
    featured: true,
  },
  {
    id: "sound-healing-couple",
    name: "Sound Healing en Pareja",
    description: "Experiencia compartida de sanación sonora para fortalecer la conexión y el bienestar conjunto.",
    price: "₡55.000",
    icon: "♥",
    whatsappLink: WHATSAPP_LINKS.soundHealingCouple,
  },
  {
    id: "sound-healing-group",
    name: "Sound Healing Grupal",
    description: "De 3 a 8 personas. Una experiencia colectiva de vibración y coherencia.",
    price: "Desde ₡63.000",
    icon: "◈",
    whatsappLink: WHATSAPP_LINKS.soundHealingGroup,
  },
  {
    id: "massage-sound",
    name: "Masaje + Sonido",
    description: "Experiencia premium que combina trabajo corporal y vibración sonora para un descanso profundo.",
    price: "$120 / $190",
    icon: "✤",
    whatsappLink: WHATSAPP_LINKS.massageSound,
  },
  {
    id: "events",
    name: "Eventos Privados / Corporativos",
    description: "Hasta 25+ personas. Sesiones personalizadas para celebraciones, retiros, eventos corporativos y más.",
    price: "Desde ₡130.000",
    icon: "✦",
    whatsappLink: WHATSAPP_LINKS.events,
  },
  {
    id: "monthly-sessions",
    name: "Sesiones Mensuales Grupales",
    description: "Sound Healing + Meditación en estudio (hasta 8 personas). Espacios regulares de conexión.",
    price: "₡15.000 /pers",
    icon: "◉",
    whatsappLink: WHATSAPP_LINKS.monthlySessions,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿En qué consisten las sesiones de Sound Healing?",
    answer: "Es una experiencia de sanación a través del sonido donde utilizamos cuencos tibetanos, cuencos de cristal y otros instrumentos ancestrales para favorecer estados de relajación profunda, regulación del sistema nervioso y coherencia interna.",
  },
  {
    question: "¿En qué consisten las sesiones de Coaching?",
    answer: "Es un acompañamiento personalizado llamado 'Sintonía del Alma' enfocado en identidad, energía y reprogramación subconsciente. Te acompaño a reconectar con tu poder interior, tu voz y tu sabiduría, sin decirte qué hacer sino impulsando tu propio proceso.",
  },
  {
    question: "¿Se requiere experiencia previa?",
    answer: "No, no se requiere ninguna experiencia previa. Solo traé ropa cómoda y disposición para la experiencia.",
  },
  {
    question: "¿Pueden ayudarme con estrés, ansiedad o agotamiento emocional?",
    answer: "Sí, totalmente. El sound healing favorece la regulación del sistema nervioso, permitiendo mayor descanso, coherencia y sensación de seguridad interna. No sustituye tratamiento médico, pero es un recurso profundamente complementario.",
  },
  {
    question: "¿Organizás sesiones grupales privadas o para celebraciones?",
    answer: "¡Sí! Organizo sesiones privadas para grupos, celebraciones especiales, despedidas, cumpleaños y eventos corporativos. Escribime para cotización personalizada.",
  },
  {
    question: "¿Dónde estás ubicada?",
    answer: "El estudio se encuentra en Ciudad Colón, 700 mts. este de la Bomba Los Ángeles, calle Achiotal, camino a carretera vieja a Santa Ana.",
  },
];

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Escribime por WhatsApp",
    description: "Contame qué buscás y qué estás sintiendo",
  },
  {
    number: 2,
    title: "Agendamos tu sesión",
    description: "Elegimos el horario ideal para vos",
  },
  {
    number: 3,
    title: "Vivís tu experiencia",
    description: "En el estudio o evento privado",
  },
  {
    number: 4,
    title: "Integrás lo vivido",
    description: "Seguimos tu proceso y evolución",
  },
];

export interface PainPoint {
  text: string;
}

export const PAIN_POINTS: PainPoint[] = [
  { text: "Vivís en alta exigencia y desconectada de tu cuerpo" },
  { text: "Sentís que hay algo más para vos pero no sabés qué" },
  { text: "Querés paz mental sin sacrificar tu éxito" },
  { text: "Buscás conexión espiritual sin dogma ni religión" },
  { text: "Creás desde el esfuerzo y el desgaste, no desde el placer" },
];

export const TESTIMONIALS = [
  {
    name: "Shirley",
    text: "Partícipe del retiro yo soy portal 2025 y me encantó, llenó mis expectativas... me sentí muy emotiva y agradecida durante y después del retiro y me siento con la mayor de las energías para salir a la vida a continuar disfrutando de ella... todo lo vivido fue maravilloso... Gracias Rebe por tu amor y dedicación a esto tan maravilloso que practicas y que se quieres que muchas más personas se sientan como vos te sientes.",
    session: "Retiro Yo Soy Portal 2025",
  },
  {
    name: "Elvira",
    text: "Gracias Rebe por crear y sostener un espacio donde se sintió tanto amor, la forma en que transmites la información hace que sea tan sencillo de entender pero a la vez tan profundo el mensaje. Fue una experiencia que recomendaría no se la pierdan y deseosa de volvernos a encontrar nuevamente.",
    session: "Retiro Yo Soy Portal 2025",
  },
  {
    name: "Haylen",
    text: "Ha sido una experiencia única, de mucho aprendizaje y liberación donde me permitió entrar en lo más profundo de mi ser interior.",
    session: "Retiro Yo Soy Portal 2025",
  },
  {
    name: "María Jesús",
    text: "Soy portal es una experiencia maravillosa y única que todas deberíamos darnos la oportunidad de vivir y sentir. Amé este día",
    session: "Retiro Yo Soy Portal 2025",
  },
  {
    name: "Caro",
    text: "Una experiencia magica, y de regalo con una misma, ame el ambiente de seguridad y sororidad",
    session: "Retiro Yo Soy Portal 2025",
  },
  {
    name: "Yorleny",
    text: "Lo recomiendo mucho porque es de mucha ayuda para guiarnos en la definición de objetivos alineados con nuestra espiritualidad",
    session: "Retiro Yo Soy Portal 2025",
  },
];

export const SITE_INFO = {
  name: "Rebeca - Intuitive Coach & Sound Healing",
  email: "rebecaabarca.coach@gmail.com",
  instagram: "@rebecaintuitivecoach",
  instagramUrl: "https://instagram.com/rebecaintuitivecoach",
  location: "Ciudad Colón, Costa Rica",
  fullAddress: "Ciudad Colón, 700 mts. este de la Bomba Los Ángeles, calle Achiotal, camino a carretera vieja a Santa Ana",
  schedule: "Martes a Domingo, 9am - 6pm",
  year: "2026",
};
