/**
 * CONTENIDO CENTRALIZADO DE LA LANDING PAGE — MORFEO
 * ------------------------------------------------------------------
 * Editá textos, enlaces, servicios, equipo y datos de contacto desde
 * este archivo. Los componentes de UI solo leen estos datos.
 *
 * Los campos marcados con  // TODO  son datos de ejemplo que deben
 * reemplazarse por la información real del centro.
 */

/* ------------------------------------------------------------------ */
/* Datos generales                                                     */
/* ------------------------------------------------------------------ */
export const site = {
  name: "Morfeo",
  fullName: "Morfeo — Centro de Rehabilitación Neuro-Somática",
  description:
    "Centro de kinesiología, fisiatría y rehabilitación del sueño, con un enfoque integral y personalizado.",
  year: 2026,
};

/* ------------------------------------------------------------------ */
/* Marca (logo Morfeo)                                                 */
/* ------------------------------------------------------------------ */
export const brand = {
  name: "Morfeo",
  tagline: "Centro de Rehabilitación Neuro-Somática",
  logo: "/brand/morfeo-logo.jpg", // logo completo
  emblem: "/brand/morfeo-emblema.png", // solo el ícono (luna + rostro)
};

/* ------------------------------------------------------------------ */
/* Menú: cada enlace lleva a una sección de esta misma página          */
/* (el `href` es el `id` de la sección)                                 */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export const navCta = { label: "Agendá tu turno", href: "#turno" };

/* ------------------------------------------------------------------ */
/* Inicio — Hero                                                       */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Centro de Rehabilitación Neuro-Somática",
  title: "Recuperar el descanso,",
  highlight: "también es avanzar",
  subtitle:
    "Centro de kinesiología, fisiatría y rehabilitación del sueño, con un enfoque integral y personalizado.",
  primaryCta: { label: "Conocé nuestros servicios", href: "#servicios" },
  secondaryCta: { label: "Agendá tu turno", href: "#turno" },
};

/* ------------------------------------------------------------------ */
/* Pilares (íconos en círculo, debajo del logo)                        */
/* ------------------------------------------------------------------ */
export const pillars = {
  title: "Nuestros pilares",
  items: [
    { icon: "brain", label: "Tecnología y ciencia" },
    { icon: "heart", label: "Cuidado humano" },
    { icon: "bed", label: "Descanso saludable" },
    { icon: "lotus", label: "Bienestar integral" },
  ],
};

/* ------------------------------------------------------------------ */
/* Servicios                                                           */
/* ------------------------------------------------------------------ */
export const services = {
  title: "Nuestros servicios",
  subtitle: "Tratamientos personalizados para acompañar cada etapa de tu proceso.",
  items: [
    {
      icon: "brain",
      title: "Rehabilitación Neurológica",
      text: "Abordaje de secuelas de ACV, lesiones neurológicas y trastornos del movimiento.",
    },
    {
      icon: "lungs",
      title: "Kinesiología Respiratoria",
      text: "Mejora de la función pulmonar, el patrón respiratorio y la tolerancia al esfuerzo.",
    },
    {
      icon: "bed",
      title: "Rehabilitación del Sueño",
      text: "Evaluación y tratamiento de alteraciones del sueño y del ritmo circadiano.",
    },
    {
      icon: "user",
      title: "Fisiatría y Acompañamiento Integral",
      text: "Planes de tratamiento interdisciplinarios centrados en la persona.",
    },
    {
      icon: "users",
      title: "Atención Pediátrica y Adultos Mayores",
      text: "Cuidado adaptado a cada edad, desde la infancia hasta la vejez.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nosotros — Somos Morfeo                                             */
/* ------------------------------------------------------------------ */
export const about = {
  eyebrow: "Sobre nosotros",
  title: "Somos Morfeo",
  text: "Un equipo de profesionales comprometidos con tu salud y calidad de vida, especializados en rehabilitación neurológica y del sueño, para acompañarte en cada etapa de tu proceso.",
  quote: "Tu bienestar, nuestra prioridad",
  // TODO: foto del centro (ej. "/nosotros/centro.jpg" dentro de /public). Si es null se muestra el emblema.
  image: null,
  cta: { label: "Conocé más sobre nuestro centro", href: "#mision" },
};

/* ------------------------------------------------------------------ */
/* Nosotros — Misión, Visión y Valores                                 */
/* ------------------------------------------------------------------ */
export const missionVisionValues = {
  title: "Misión, Visión y Valores",
  subtitle: "Los principios que guían nuestro trabajo todos los días.",
  items: [
    {
      id: "mision",
      icon: "target",
      title: "Misión",
      summary:
        "Acompañar a cada persona en su recuperación neurológica, física y del descanso, con tratamientos integrales y personalizados.",
      details: [
        "Unir la evidencia científica con un trato cercano y humano.",
        "Diseñar planes a medida de cada paciente y su familia.",
        "Promover el descanso como parte esencial de la salud.",
      ],
    },
    {
      id: "vision",
      icon: "eye",
      title: "Visión",
      summary:
        "Ser un centro de referencia en rehabilitación neuro-somática y del sueño en la región.",
      details: [
        "Incorporar tecnología e innovación de forma constante.",
        "Formar un equipo interdisciplinario en permanente actualización.",
        "Hacer la rehabilitación accesible para más personas.",
      ],
    },
    {
      id: "valores",
      icon: "heart",
      title: "Valores",
      summary: "Empatía, compromiso, ética profesional y respeto por cada historia.",
      details: [
        "Cuidado humano y trato personalizado.",
        "Trabajo en equipo y responsabilidad social.",
        "Mejora continua y excelencia profesional.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nuestra Tecnología (mazo de tarjetas)                               */
/* ------------------------------------------------------------------ */
// TODO: reemplazar por el equipamiento real del centro.
export const technology = {
  title: "Nuestra Tecnología",
  subtitle: "Equipamiento moderno para evaluar y acompañar tu recuperación.",
  // `image`: ruta de la foto dentro de /public (ej. "/tecnologia/camara.jpg").
  // Si es null se muestra un recuadro con el ícono hasta que tengamos la foto.
  items: [
    {
      icon: "bed",
      title: "Monitoreo del sueño",
      description:
        "Registro de la calidad y las etapas del sueño para diseñar un tratamiento a medida.",
      tag: "Sueño",
      image: null, // TODO: agregar foto
    },
    {
      icon: "bolt",
      title: "Electroestimulación neuromuscular",
      description:
        "Activación muscular guiada para recuperar fuerza y control del movimiento.",
      tag: "Neurorehabilitación",
      image: null, // TODO: agregar foto
    },
    {
      icon: "scale",
      title: "Plataforma de equilibrio",
      description:
        "Evaluación y entrenamiento del balance y la postura para prevenir caídas.",
      tag: "Evaluación",
      image: null, // TODO: agregar foto
    },
    {
      icon: "lungs",
      title: "Equipos de kinesiología respiratoria",
      description:
        "Entrenamiento de la musculatura respiratoria y mejora de la capacidad pulmonar.",
      tag: "Respiratoria",
      image: null, // TODO: agregar foto
    },
    {
      icon: "dumbbell",
      title: "Gimnasio terapéutico",
      description:
        "Espacio equipado para ejercicios de fuerza, coordinación y reeducación de la marcha.",
      tag: "Movimiento",
      image: null, // TODO: agregar foto
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nuestros Especialistas                                              */
/* ------------------------------------------------------------------ */
export const specialists = {
  title: "Nuestros Especialistas",
  subtitle: "Profesionales que te acompañan en cada etapa.",
  // TODO: reemplazar por el equipo real. `photo` es opcional (ruta en /public).
  members: [
    { name: "Lic. Nombre Apellido", role: "Kinesiólogo/a", specialty: "Rehabilitación neurológica", photo: null },
    { name: "Dr/a. Nombre Apellido", role: "Médico/a", specialty: "Medicina del sueño", photo: null },
    { name: "Lic. Nombre Apellido", role: "Kinesiólogo/a", specialty: "Kinesiología respiratoria", photo: null },
    { name: "Dr/a. Nombre Apellido", role: "Médico/a fisiatra", specialty: "Fisiatría", photo: null },
  ],
};

/* ------------------------------------------------------------------ */
/* ¿Cómo funciona?                                                     */
/* ------------------------------------------------------------------ */
// TODO: reemplazar por el texto definitivo.
export const howItWorks = {
  title: "¿Cómo funciona?",
  subtitle: "Un recorrido simple, acompañado en cada etapa.",
  steps: [
    { icon: "calendar", title: "Agendá tu turno", text: "Elegí un día en el calendario y contanos brevemente qué te pasa." },
    { icon: "user", title: "Evaluación inicial", text: "Un especialista analiza tu caso y define los objetivos del tratamiento." },
    { icon: "dumbbell", title: "Plan personalizado", text: "Diseñamos sesiones a tu medida con la tecnología del centro." },
    { icon: "chart", title: "Seguimiento", text: "Medimos tu progreso y ajustamos el plan hasta el alta." },
  ],
};

/* ------------------------------------------------------------------ */
/* Agendá tu turno                                                     */
/* ------------------------------------------------------------------ */
export const booking = {
  title: "Agendá tu turno",
  subtitle: "Elegí el día y el horario, completá tus datos y nos comunicamos con vos.",
  // Días de atención: 0 = domingo, 1 = lunes … 6 = sábado
  workingDays: [1, 2, 3, 4, 5],
  timeSlots: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
  genderOptions: ["Mujer", "Hombre", "Otro / Prefiero no decirlo"],
  lookingForOptions: [
    "Rehabilitación neurológica",
    "Kinesiología respiratoria",
    "Rehabilitación del sueño",
    "Fisiatría",
    "Otro",
  ],
  successMessage:
    "¡Gracias! Recibimos tu solicitud. Nos vamos a comunicar para confirmar el turno.",
};

/* ------------------------------------------------------------------ */
/* Beneficios — Hacete socio                                           */
/* ------------------------------------------------------------------ */
// TODO: definir precios y beneficios reales.
export const membership = {
  title: "Hacete socio",
  subtitle: "Accedé a nuestro centro con una suscripción mensual o anual.",
  plans: [
    {
      id: "mensual",
      name: "Plan Mensual",
      price: "$ 00.000",
      period: "/ mes",
      description: "Ideal para empezar o para tratamientos cortos.",
      features: [
        "Acceso a sesiones durante el mes",
        "Evaluación inicial incluida",
        "Seguimiento de tu progreso",
      ],
      cta: { label: "Quiero el plan mensual", href: "#turno" },
      highlighted: false,
    },
    {
      id: "anual",
      name: "Plan Anual",
      price: "$ 000.000",
      period: "/ año",
      badge: "Más conveniente",
      description: "Asistí todo el año y ahorrá frente al plan mensual.",
      features: [
        "Acceso a sesiones todo el año",
        "Evaluaciones periódicas",
        "Prioridad en la agenda de turnos",
        "Seguimiento personalizado",
      ],
      cta: { label: "Quiero el plan anual", href: "#turno" },
      highlighted: true,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Becas Solidarias — Un sueño, una oportunidad                        */
/* ------------------------------------------------------------------ */
export const donation = {
  eyebrow: "Becas Solidarias",
  title: "Un sueño,",
  highlight: "una oportunidad",
  text: [
    "Trabajamos para que más personas puedan acceder a sus tratamientos.",
    "Con tu aporte, ayudás a cubrir el tratamiento completo de quienes más lo necesitan.",
  ],
  // Fondo: ilustración de niños felices. Se puede reemplazar por una foto (ej. "/donaciones/fondo.jpg").
  backgroundImage: "/donaciones/ninos-felices.svg",
  cta: { label: "Donar", href: null }, // TODO: enlace de pago (ej. Mercado Pago) o página con datos bancarios
};

/* ------------------------------------------------------------------ */
/* Contacto (pie de página)                                            */
/* ------------------------------------------------------------------ */
// TODO: reemplazar por los datos reales (estos son los del diseño de ejemplo).
export const contact = {
  address: "Av. Siempre Sana 123, Jujuy",
  phone: "388 123 4567",
  email: "hola@morfeo.com.ar",
  social: [
    { icon: "instagram", label: "Instagram", href: "#" }, // TODO
    { icon: "facebook", label: "Facebook", href: "#" }, // TODO
  ],
  slogan: "Dormir bien, también es salud",
};
