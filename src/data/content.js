/**
 * CONTENIDO CENTRALIZADO DEL SITIO
 * ------------------------------------------------------------------
 * Editá textos, enlaces, equipo y videos desde este archivo.
 * Los componentes de UI solo leen estos datos: no hace falta tocarlos.
 *
 * Los campos marcados con  // TODO  son datos de ejemplo que deben
 * reemplazarse por la información real de la cátedra.
 */

/* ------------------------------------------------------------------ */
/* Datos generales                                                     */
/* ------------------------------------------------------------------ */
export const site = {
  name: "Kinefisiatría Traumatológica y Reumatológica",
  shortName: "KTR · Cadera",
  topic: "Artroplastía de Cadera",
  institution: "Facultad de Ciencias de la Salud — Universidad", // TODO
  description:
    "Recurso educativo de la cátedra de Kinefisiatría Traumatológica y Reumatológica sobre la rehabilitación kinésica en artroplastía de cadera.",
  contactEmail: "catedra.ktr@universidad.edu.ar", // TODO
  location: "Ciudad, Provincia, Argentina", // TODO
  year: 2026,
};

/* ------------------------------------------------------------------ */
/* Marca (logo Morfeo)                                                 */
/* ------------------------------------------------------------------ */
export const brand = {
  name: "Morfeo",
  tagline: "Neurorehabilitación y Cronobiología",
  logo: "/brand/morfeo-logo.jpg", // logo completo
  emblem: "/brand/morfeo-emblema.png", // solo el ícono (luna + rostro)
};

/* ------------------------------------------------------------------ */
/* Navegación                                                          */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Investigación", href: "/investigacion" },
  { label: "Banderas Rojas", href: "/banderas-rojas" },
  { label: "Videos", href: "/videos" },
];

export const navCta = { label: "Signos de alarma", href: "/banderas-rojas" };

/* ------------------------------------------------------------------ */
/* Inicio — Hero                                                       */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Cátedra universitaria",
  title: "Artroplastía de Cadera,",
  highlight: "rehabilitación basada en evidencia",
  subtitle:
    "Bienvenidos al espacio de la cátedra de Kinefisiatría Traumatológica y Reumatológica. Reunimos contenidos teóricos, protocolos, alertas clínicas y demostraciones prácticas para acompañar la formación kinésica en el abordaje del paciente con prótesis de cadera.",
  primaryCta: { label: "Conocé más", href: "#mision" },
  secondaryCta: { label: "Ver demostraciones", href: "/videos" },
  stats: [
    { value: "4", label: "Fases de rehabilitación" },
    { value: "+20", label: "Signos de alarma descriptos" },
    { value: "100%", label: "Contenido académico" },
  ],
};

/* ------------------------------------------------------------------ */
/* Inicio — Pilares (íconos en círculo)                                */
/* ------------------------------------------------------------------ */
export const pillars = {
  title: "Nuestros pilares",
  items: [
    { icon: "brain", label: "Tecnología y ciencia" },
    { icon: "heart", label: "Cuidado humano" },
    { icon: "bed", label: "Descanso y recuperación" },
    { icon: "lotus", label: "Bienestar integral" },
  ],
};

/* ------------------------------------------------------------------ */
/* Inicio — Tarjetas destacadas (una clara y una oscura)               */
/* ------------------------------------------------------------------ */
export const featureCards = {
  light: {
    icon: "alert",
    title: "Banderas Rojas",
    text: "Signos de alarma y contraindicaciones para acompañar con seguridad cada etapa de la rehabilitación.",
    cta: { label: "Ver alertas", href: "/banderas-rojas" },
  },
  dark: {
    title: "Aprendé con",
    highlight: "demostraciones prácticas",
    text: "Combinamos ciencia y práctica clínica en videos explicativos de ejercicios, marcha y transferencias.",
    cta: { label: "Conocé más", href: "/videos" },
  },
};

/* ------------------------------------------------------------------ */
/* Inicio — Misión, Visión y Valores                                   */
/* ------------------------------------------------------------------ */
export const missionVisionValues = {
  title: "Misión, Visión y Valores",
  subtitle: "Los principios que orientan nuestra tarea docente y clínica.",
  items: [
    {
      id: "mision",
      icon: "target",
      title: "Misión",
      summary:
        "Formar kinesiólogos capaces de conducir la rehabilitación integral del paciente con artroplastía de cadera.",
      details: [
        "Integrar el razonamiento clínico con la evidencia científica actual.",
        "Promover la seguridad del paciente en cada fase del tratamiento.",
        "Vincular la teoría con la práctica hospitalaria y ambulatoria.",
      ],
    },
    {
      id: "vision",
      icon: "eye",
      title: "Visión",
      summary:
        "Ser una cátedra de referencia regional en la enseñanza de la kinefisiatría traumatológica y reumatológica.",
      details: [
        "Innovar en recursos digitales y simulación para el aprendizaje.",
        "Impulsar la investigación clínica aplicada.",
        "Articular con equipos interdisciplinarios de traumatología.",
      ],
    },
    {
      id: "valores",
      icon: "heart",
      title: "Valores",
      summary:
        "Ética profesional, compromiso con el paciente y excelencia académica.",
      details: [
        "Respeto y trato humanizado.",
        "Pensamiento crítico y actualización permanente.",
        "Trabajo colaborativo y responsabilidad social.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Inicio — Nuestra Tecnología                                         */
/* ------------------------------------------------------------------ */
export const technology = {
  title: "Nuestra Tecnología",
  subtitle:
    "Equipamiento y recursos que utilizamos en la enseñanza y en la práctica clínica.",
  // `image`: ruta de la foto dentro de /public (ej. "/tecnologia/camara.jpg").
  // Si es null se muestra un recuadro con el ícono hasta que tengamos la foto.
  items: [
    {
      icon: "bolt",
      title: "Electroestimulación neuromuscular (NMES)",
      description:
        "Activación del cuádriceps y glúteo medio en fases tempranas para reducir la inhibición muscular artrogénica.",
      tag: "Electroterapia",
      image: null, // TODO: agregar foto
    },
    {
      icon: "scale",
      title: "Plataforma de presiones y balance",
      description:
        "Evaluación de la distribución de carga y del control postural durante la progresión de la descarga de peso.",
      tag: "Evaluación",
      image: null, // TODO: agregar foto
    },
    {
      icon: "dumbbell",
      title: "Cinta de marcha y paralelas",
      description:
        "Reeducación de la marcha con progresión de ayudas técnicas: andador, bastones y marcha independiente.",
      tag: "Marcha",
      image: null, // TODO: agregar foto
    },
    {
      icon: "chart",
      title: "Dinamometría manual",
      description:
        "Cuantificación objetiva de la fuerza de abductores, extensores y flexores de cadera para guiar la progresión.",
      tag: "Evaluación",
      image: null, // TODO: agregar foto
    },
    {
      icon: "cube",
      title: "Modelos anatómicos y protésicos",
      description:
        "Modelos de cadera con componentes acetabulares y femorales para comprender abordajes y precauciones.",
      tag: "Docencia",
      image: null, // TODO: agregar foto
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Inicio — Nuestros Especialistas                                     */
/* ------------------------------------------------------------------ */
export const specialists = {
  title: "Nuestros Especialistas",
  subtitle: "Equipo docente y profesionales que integran la cátedra.",
  // TODO: reemplazar por el equipo real. `photo` es opcional (ruta en /public).
  members: [
    {
      name: "Lic. Nombre Apellido",
      role: "Profesor/a Titular",
      specialty: "Kinesiología traumatológica",
      photo: null,
    },
    {
      name: "Lic. Nombre Apellido",
      role: "Profesor/a Adjunto/a",
      specialty: "Rehabilitación post-quirúrgica",
      photo: null,
    },
    {
      name: "Lic. Nombre Apellido",
      role: "Jefe/a de Trabajos Prácticos",
      specialty: "Reumatología y terapia manual",
      photo: null,
    },
    {
      name: "Lic. Nombre Apellido",
      role: "Ayudante de Cátedra",
      specialty: "Fisioterapia y agentes físicos",
      photo: null,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Investigación                                                       */
/* ------------------------------------------------------------------ */
export const research = {
  title: "Investigación",
  subtitle:
    "Autores, creadores de este sitio, publicaciones y líneas de investigación de la cátedra.",
  // TODO: completar con los autores reales del sitio.
  authors: [
    {
      name: "Nombre Apellido",
      role: "Autora / Diseño de contenidos",
      bio: "Estudiante de Kinesiología y Fisioterapia. Responsable de la redacción y organización de los contenidos.",
    },
    {
      name: "Nombre Apellido",
      role: "Autor / Desarrollo web",
      bio: "Responsable del diseño visual y del desarrollo del sitio.",
    },
    {
      name: "Lic. Nombre Apellido",
      role: "Supervisión académica",
      bio: "Docente de la cátedra. Revisión científica de los contenidos.",
    },
  ],
  researchLines: [
    {
      title: "Rehabilitación acelerada (fast-track)",
      description:
        "Movilización precoz y carga temprana tras artroplastía total de cadera y su impacto en la funcionalidad.",
    },
    {
      title: "Fortalecimiento de abductores",
      description:
        "Relación entre la fuerza del glúteo medio, el signo de Trendelenburg y la calidad de la marcha.",
    },
    {
      title: "Educación prequirúrgica",
      description:
        "Efecto de la prehabilitación y la educación del paciente sobre la recuperación postoperatoria.",
    },
  ],
  // TODO: reemplazar por las publicaciones reales de la cátedra.
  publications: [
    {
      title: "Protocolo de rehabilitación kinésica en artroplastía total de cadera",
      authors: "Equipo de cátedra",
      year: 2026,
      type: "Material de cátedra",
      link: null,
    },
    {
      title: "Guía de precauciones según abordaje quirúrgico",
      authors: "Equipo de cátedra",
      year: 2026,
      type: "Guía práctica",
      link: null,
    },
    {
      title: "Banderas rojas en el postoperatorio de cadera: revisión para estudiantes",
      authors: "Equipo de cátedra",
      year: 2026,
      type: "Revisión narrativa",
      link: null,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Banderas Rojas                                                      */
/* ------------------------------------------------------------------ */
export const redFlags = {
  title: "Banderas Rojas",
  subtitle:
    "Alertas clínicas, contraindicaciones y signos de alarma que requieren suspender la intervención kinésica y derivar al equipo médico.",
  disclaimer:
    "Contenido con fines educativos. No reemplaza la evaluación médica ni el criterio clínico profesional. Ante un signo de alarma, suspender la sesión y derivar de inmediato.",
  alerts: [
    {
      severity: "urgente",
      icon: "alert",
      title: "Luxación protésica",
      signs: [
        "Dolor súbito e intenso en la cadera, a veces con chasquido o resalto.",
        "Acortamiento del miembro inferior.",
        "Actitud en rotación (interna en abordaje posterior, externa en anterior).",
        "Imposibilidad de cargar peso o de movilizar la cadera.",
      ],
      action: "Inmovilizar, no intentar reducir y derivar a guardia traumatológica.",
    },
    {
      severity: "urgente",
      icon: "lungs",
      title: "Trombosis venosa profunda / Tromboembolismo pulmonar",
      signs: [
        "Dolor, edema, calor y enrojecimiento unilateral en pantorrilla o muslo.",
        "Disnea de aparición brusca y dolor torácico.",
        "Taquicardia, taquipnea o desaturación.",
        "Tos con expectoración hemoptoica.",
      ],
      action: "Suspender la actividad y activar el sistema de emergencias ante síntomas respiratorios.",
    },
    {
      severity: "alta",
      icon: "thermo",
      title: "Infección periprotésica",
      signs: [
        "Fiebre o escalofríos persistentes.",
        "Herida con eritema, calor, secreción o mal olor.",
        "Dolor creciente en reposo o nocturno.",
        "Dehiscencia de la herida quirúrgica.",
      ],
      action: "Derivar al cirujano tratante para evaluación clínica y de laboratorio.",
    },
    {
      severity: "alta",
      icon: "bone",
      title: "Fractura periprotésica",
      signs: [
        "Dolor brusco tras caída o traumatismo.",
        "Deformidad o crepitación en el muslo.",
        "Pérdida repentina de la capacidad de marcha.",
      ],
      action: "Inmovilizar y derivar para estudio por imágenes.",
    },
    {
      severity: "alta",
      icon: "nerve",
      title: "Lesión neurológica",
      signs: [
        "Pie caído o debilidad de la dorsiflexión (nervio ciático / peroneo).",
        "Parestesias o anestesia en el miembro operado.",
        "Debilidad del cuádriceps (nervio femoral).",
      ],
      action: "Registrar los hallazgos y comunicar al equipo médico.",
    },
    {
      severity: "moderada",
      icon: "pulse",
      title: "Inestabilidad hemodinámica",
      signs: [
        "Hipotensión ortostática, mareo o síncope al sentarse o bipedestar.",
        "Palidez, sudoración fría.",
        "Valores de hemoglobina bajos en el postoperatorio inmediato.",
      ],
      action: "Volver a decúbito, controlar signos vitales y reprogramar la verticalización.",
    },
  ],
  precautions: {
    title: "Precauciones según abordaje quirúrgico",
    subtitle:
      "Movimientos a evitar en las primeras semanas (según indicación del cirujano).",
    approaches: [
      {
        name: "Abordaje posterior / posterolateral",
        avoid: [
          "Flexión de cadera mayor a 90°.",
          "Aducción más allá de la línea media (cruzar las piernas).",
          "Rotación interna.",
        ],
      },
      {
        name: "Abordaje anterior / anterolateral",
        avoid: [
          "Extensión de cadera más allá de la neutra.",
          "Rotación externa.",
          "Combinación de extensión + rotación externa + aducción.",
        ],
      },
    ],
  },
  contraindications: {
    title: "Contraindicaciones en agentes físicos",
    items: [
      "Diatermia de onda corta y microondas sobre la zona del implante metálico.",
      "Agentes térmicos sobre la herida quirúrgica sin cicatrizar.",
      "Electroterapia sobre zonas con trombosis venosa activa.",
      "Masoterapia profunda en miembro con sospecha de TVP.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Videos / Demostraciones                                             */
/* ------------------------------------------------------------------ */
export const videos = {
  title: "Videos y Demostraciones",
  subtitle:
    "Galería de videos explicativos sobre evaluación, ejercicios y reeducación funcional.",
  categories: ["Todos", "Teoría", "Ejercicios", "Marcha", "Educación"],
  // `youtubeId` es el código que aparece en la URL: youtube.com/watch?v=XXXXXXXXXXX
  // TODO: completar cada youtubeId. Si está vacío se muestra "Próximamente".
  items: [
    {
      youtubeId: "",
      title: "Anatomía y biomecánica de la cadera protésica",
      description: "Componentes de la prótesis, tipos de fijación y abordajes quirúrgicos.",
      category: "Teoría",
      duration: "",
    },
    {
      youtubeId: "",
      title: "Ejercicios isométricos en el postoperatorio inmediato",
      description: "Activación de cuádriceps, glúteos y bombeo de tobillo.",
      category: "Ejercicios",
      duration: "",
    },
    {
      youtubeId: "",
      title: "Transferencias seguras: cama, silla y baño",
      description: "Cómo enseñar transferencias respetando las precauciones de cadera.",
      category: "Educación",
      duration: "",
    },
    {
      youtubeId: "",
      title: "Reeducación de la marcha con andador y bastones",
      description: "Progresión de ayudas técnicas y patrón de marcha en tres tiempos.",
      category: "Marcha",
      duration: "",
    },
    {
      youtubeId: "",
      title: "Fortalecimiento de abductores de cadera",
      description: "Progresión de ejercicios para el glúteo medio.",
      category: "Ejercicios",
      duration: "",
    },
    {
      youtubeId: "",
      title: "Subir y bajar escaleras",
      description: "Regla práctica: sube el sano, baja el operado.",
      category: "Marcha",
      duration: "",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export const footer = {
  about:
    "Sitio educativo de la cátedra de Kinefisiatría Traumatológica y Reumatológica dedicado a la artroplastía de cadera.",
  institutionalLinks: [
    { label: "Universidad", href: "#" }, // TODO
    { label: "Facultad", href: "#" }, // TODO
    { label: "Campus virtual", href: "#" }, // TODO
  ],
  credits: "Diseño y desarrollo: equipo de la cátedra.",
};
