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
  fullName: "Morfeo — Instituto de Neuro-Rehabilitación y Cronobiología",
  description:
    "Restauramos el sistema nervioso y regulamos los trastornos del sueño mediante kinesiología neuro-somática, cronobiología y tecnología de privación sensorial.",
  year: 2026,
};

/* ------------------------------------------------------------------ */
/* Marca (logo Morfeo)                                                 */
/* ------------------------------------------------------------------ */
export const brand = {
  name: "Morfeo",
  tagline: "Instituto de Neuro-Rehabilitación y Cronobiología",
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
  { label: "Merch", href: "#merch" },
  { label: "Contacto", href: "#contacto" },
];

export const navCta = { label: "Agendá tu turno", href: "#turno" };

/* ------------------------------------------------------------------ */
/* Inicio — Hero                                                       */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Instituto de Neuro-Rehabilitación y Cronobiología",
  title: "Recuperar el descanso,",
  highlight: "también es avanzar",
  // Propuesta de valor del documento institucional
  subtitle:
    "Restauramos el sistema nervioso y regulamos los trastornos del sueño mediante kinesiología neuro-somática, cronobiología y tecnología de privación sensorial.",
  primaryCta: { label: "Conocé nuestros servicios", href: "#servicios" },
  secondaryCta: { label: "Agendá tu turno", href: "#turno" },
};

/* ------------------------------------------------------------------ */
/* Inicio — Recorrido de la cápsula 3D (aparece al hacer scroll)       */
/* La primera etapa es el `hero` de arriba; estas son las siguientes.  */
/* `word`: palabra gigante que se ve detrás de la cápsula.             */
/* ------------------------------------------------------------------ */
export const capsuleStory = {
  heroWord: "MORFEO",
  scrollHint: "Deslizá para descubrir",
  steps: [
    {
      word: "DESCONECTÁ",
      eyebrow: "Privación sensorial",
      title: "Un espacio con",
      highlight: "muy pocos estímulos",
      text: "Sin luz, sin ruido y sin apuro: un ambiente pensado para que el sistema nervioso pueda regularse.",
    },
    {
      word: "FLOTÁ",
      eyebrow: "Cámaras de flotación",
      title: "Agua y sales de Epsom",
      highlight: "que te sostienen",
      text: "Flotás sin esfuerzo, el cuerpo se suelta y la mente descansa.",
    },
    {
      word: "DESCANSÁ",
      eyebrow: "Cronobiología",
      title: "El descanso como",
      highlight: "parte del tratamiento",
      text: "Combinamos kinesiología neuro-somática y cronobiología para tu recuperación física, cognitiva y laboral.",
      primaryCta: { label: "Agendá tu turno", href: "#turno" },
      secondaryCta: { label: "Ver la tecnología", href: "#tecnologia" },
    },
  ],
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
  subtitle: "Una alternativa científica donde el descanso es el pilar central de la recuperación.",
  items: [
    {
      icon: "brain",
      title: "Kinesiología Neuro-Somática",
      text: "Tratamientos de regulación sensorial y biofeedback para restaurar el sistema nervioso y aliviar el dolor crónico.",
    },
    {
      icon: "bed",
      title: "Laboratorio del Sueño",
      text: "Cápsulas de privación sensorial y polisomnografía para evaluar y regular los trastornos del sueño.",
    },
    {
      icon: "users",
      title: "Wellness Corporativo",
      text: "Convenios con empresas para prevenir el burnout y mejorar la calidad del descanso de sus colaboradores.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nosotros — Somos Morfeo                                             */
/* ------------------------------------------------------------------ */
export const about = {
  eyebrow: "Sobre nosotros",
  title: "Somos Morfeo",
  text: "Un equipo interdisciplinario de kinesiólogos neuro-somáticos, técnicos en polisomnografía, médicos e ingenieros biomédicos. No ofrecemos sesiones tradicionales de kinesiología: trabajamos para restaurar tu sistema nervioso y reconectarte con el descanso reparador.",
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
  // `summary`: texto visible siempre · `details`: texto que aparece al pasar el mouse
  // `values`: lista de valores (se muestran como etiquetas)
  items: [
    {
      id: "mision",
      icon: "target",
      title: "Misión",
      summary:
        "Somos un centro clínico especializado en kinesiología neuro-somática y cronobiología, dedicado al tratamiento integral de personas con trastornos del sueño y dolor crónico.",
      details: [
        "Utilizamos tecnologías de privación sensorial y descanso asistido para regular el sistema nervioso y lograr la recuperación funcional del paciente.",
      ],
    },
    {
      id: "vision",
      icon: "eye",
      title: "Visión",
      summary:
        "Aspiramos a ser el centro referente en cronobiología y neuro-rehabilitación del sueño en el NOA, transformando el abordaje terapéutico al posicionar al descanso regulado como la herramienta central para la recuperación física, cognitiva y laboral.",
      details: [],
    },
    {
      id: "valores",
      icon: "heart",
      title: "Nuestros Valores",
      values: ["Compromiso", "Excelencia Científica", "Empatía", "Trabajo Interdisciplinario"],
      details: [],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nuestra Tecnología (mazo de tarjetas)                               */
/* ------------------------------------------------------------------ */
export const technology = {
  title: "Nuestra Tecnología",
  subtitle: "Tecnología de privación sensorial, aislamiento acústico y biofeedback para regular el sistema nervioso.",
  // `image`: ruta de la foto dentro de /public · `imagePosition`: qué parte de la foto
  // se prioriza al recortarla (CSS object-position, ej. "center 70%").
  // Para sumar otro equipo, copiá un bloque { … } y cambiá sus datos.
  items: [
    {
      icon: "lotus",
      title: "Cámaras de flotación",
      subtitle: "Float tanks",
      description:
        "Son cápsulas o tanques con agua y sales de Epsom, donde la persona flota en un ambiente con muy pocos estímulos externos.",
      tag: "Privación sensorial",
      image: "/tecnologia/camara-flotacion.jpg",
      imagePosition: "center 72%",
    },
    {
      icon: "bed",
      title: "Cámaras o cabinas de descanso",
      description:
        "Son espacios acondicionados para favorecer el descanso, aunque no necesariamente producen privación sensorial.",
      tag: "Descanso asistido",
      image: "/tecnologia/cabina-descanso.jpg",
      imagePosition: "center",
    },
    {
      icon: "pulse",
      title: "Biofeedback",
      description:
        "Sensores que muestran en tiempo real las respuestas de tu cuerpo, para aprender a regular el sistema nervioso durante la terapia.",
      tag: "Regulación sensorial",
      image: null, // TODO: agregar foto
    },
    {
      icon: "chart",
      title: "Polisomnografía",
      description:
        "Estudio del sueño realizado por técnicos especializados en nuestro Laboratorio del Sueño.",
      tag: "Laboratorio del Sueño",
      image: null, // TODO: agregar foto
    },
    {
      icon: "phone",
      title: "App de monitoreo circadiano",
      description:
        "Registra tu descanso y tu variabilidad de la frecuencia cardíaca (VFC), integrada con tu Historia Clínica Electrónica.",
      tag: "Salud digital",
      image: null, // TODO: agregar foto
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nuestros Especialistas                                              */
/* ------------------------------------------------------------------ */
export const specialists = {
  title: "Nuestros Especialistas",
  subtitle: "Un equipo interdisciplinario que te acompaña en cada etapa.",
  // Organigrama (estructura Lineal-Staff) que se muestra debajo del equipo
  orgChart: {
    title: "Organigrama",
    text: "Estructura Lineal-Staff: tres direcciones de área bajo la Dirección General, con asesoramiento del Comité Científico, Ingeniería Biomédica y Asesoría Legal.",
    image: "/equipo/organigrama-morfeo.jpg",
    imageAlt:
      "Organigrama de Morfeo: Dirección General; staff de Comité Científico, Ingeniería Biomédica y Asesoría Legal; Direcciones Clínica, Comercial y Administrativa con sus áreas",
  },
  // `role` y `specialty` son opcionales: si están vacíos no se muestran.
  // TODO: completar el rol de cada profesional. `photo` es opcional (ruta en /public).
  members: [
    { name: "Julian Jeckeln", role: "", specialty: "", photo: null },
    { name: "Juliana Rubiño", role: "", specialty: "", photo: null },
    { name: "Nicolas Sanabria", role: "", specialty: "", photo: null },
    { name: "Martina Toscano", role: "", specialty: "", photo: null },
    { name: "Florencia Tapia", role: "", specialty: "", photo: null },
  ],
};

/* ------------------------------------------------------------------ */
/* Nuestras instalaciones (plano del centro)                           */
/* ------------------------------------------------------------------ */
export const facilities = {
  eyebrow: "Instalaciones",
  title: "Conocé nuestro centro",
  subtitle: "Un espacio de aproximadamente 225 m² pensado para el descanso y la recuperación.",
  image: "/instalaciones/plano-morfeo.jpg",
  imageAlt:
    "Plano del centro Morfeo: cámaras de flotación, cámaras de descanso, sala de masajes, recepción, cafetería, vestidores, administración y sala de reuniones",
  highlights: [
    { value: "4", label: "Habitaciones con cámaras de flotación" },
    { value: "6", label: "Cámaras de descanso" },
    { value: "4", label: "Camillas en la sala de masajes" },
    { value: "~225 m²", label: "De superficie" },
  ],
  spaces: [
    "Recepción y atención",
    "Lounge de transición (espera y descanso)",
    "Cafetería “El Descanso”",
    "Vestidores para mujeres y hombres",
    "Baños públicos",
    "Administración",
    "Sala de reuniones",
    "Salidas de emergencia",
  ],
};

/* ------------------------------------------------------------------ */
/* ¿Cómo funciona?                                                     */
/* ------------------------------------------------------------------ */
export const howItWorks = {
  title: "¿Cómo funciona?",
  subtitle: "Tu recorrido en Morfeo, paso a paso.",
  steps: [
    { icon: "calendar", title: "Agendá tu turno", text: "Elegí un día y contanos qué te pasa. Te recibimos en nuestro lounge de transición." },
    { icon: "user", title: "Evaluación", text: "Analizamos los desencadenantes de tu insomnio, incluso en nuestro Simulador de Entorno Cotidiano." },
    { icon: "lotus", title: "Tratamiento", text: "Sesiones en cápsulas de privación sensorial con kinesiología neuro-somática y biofeedback." },
    { icon: "chart", title: "Seguimiento", text: "Medimos tu evolución con la Historia Clínica Electrónica y la App de monitoreo circadiano." },
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
    "Trastornos del sueño / insomnio",
    "Fatiga o burnout",
    "Dolor crónico",
    "Rehabilitación neurológica",
    "Convenio para empresas",
    "Otro",
  ],
  successMessage:
    "¡Gracias! Recibimos tu solicitud. Nos vamos a comunicar para confirmar el turno.",
};

/* ------------------------------------------------------------------ */
/* Merch Solidario — "Morfeo en tu Rutina"                             */
/* ------------------------------------------------------------------ */
export const merch = {
  eyebrow: "Merch Solidario",
  title: "Morfeo en tu Rutina",
  slogan: "Llevá el descanso con vos, regalá una oportunidad de recuperarse",
  intro:
    "Nuestra línea oficial de merchandising: productos lindos y útiles que tienen que ver con la experiencia de descanso que ofrecemos.",
  // Foto de toda la línea (cabecera de la sección)
  heroImage: "/merch/linea-morfeo.jpg",
  heroImageAlt:
    "Línea solidaria Morfeo en tu Rutina: botella térmica, antifaz, ecovaso y bruma relajante con el logo de Morfeo",
  // `image`: foto de cada producto (dentro de /public/merch). Si es null se muestra el ícono.
  products: [
    { icon: "bottle", image: "/merch/botella.jpg", name: "Botellas térmicas", text: "Para acompañar tu hidratación durante todo el día." },
    { icon: "sleepmask", image: "/merch/antifaz.jpg", name: "Antifaces de relajación", text: "Oscuridad total para descansar mejor, donde estés." },
    { icon: "cup", image: "/merch/ecovaso.jpg", name: "Ecovasos", text: "Reutilizables, para tus infusiones de cada día." },
    { icon: "spray", image: "/merch/bruma.jpg", name: "Kits de brumas aromáticas", text: "Aromas suaves para preparar el ambiente antes de dormir." },
  ],
  availability: "Disponibles en la recepción de MORFEO y a través de la App del centro.",
  scholarship: {
    eyebrow: "Beca / suscripción solidaria",
    title: "¿Cómo funciona?",
    percent: "20%",
    percentText: "de lo recaudado por las ventas del merch se destina a un fondo especial de becas del instituto.",
    steps: [
      "Comprás un producto del merch oficial de Morfeo.",
      "El 20% de la venta va directamente al fondo de becas.",
      "Con ese fondo armamos las “Suscripciones Morfeo”: cubren el tratamiento completo (acceso a las cápsulas de privación sensorial y las terapias de neuro-rehabilitación del sueño) a pacientes neurológicos de Jujuy que realmente lo necesiten y no puedan pagarlo.",
    ],
    // Fondo: ilustración de niños felices (se puede reemplazar por una foto).
    backgroundImage: "/donaciones/ninos-felices.svg",
  },
  foundations: [
    {
      icon: "users",
      title: "Cultura y comunidad",
      text: "Los pacientes se llevan algo lindo del centro a su casa y ayudan a mantener presente el concepto del descanso en su día a día.",
    },
    {
      icon: "heart",
      title: "Impacto real",
      text: "Una forma transparente y alcanzable de hacer Responsabilidad Social Empresaria desde un centro privado, sin depender de donaciones: generamos recursos propios para becar a quienes lo necesitan.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contacto (pie de página)                                            */
/* ------------------------------------------------------------------ */
// TODO: reemplazar por los datos reales (estos son los del diseño de ejemplo).
export const contact = {
  address: "Av. Siempre Sana 123, Jujuy",
  phone: "388 123 4567",
  email: "contacto@morfeosalud.com", // TODO: confirmar (el documento usa el dominio morfeosalud.com)
  social: [
    { icon: "instagram", label: "Instagram", href: "#" }, // TODO
    { icon: "facebook", label: "Facebook", href: "#" }, // TODO
  ],
  slogan: "Dormir bien, también es salud",
};
