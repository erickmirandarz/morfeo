/** Elementos decorativos de la identidad Morfeo: estrellas y ondas. */

const STAR = "M12 0c.7 5.6 2.7 8.1 8 9v2c-5.3.9-7.3 3.4-8 9h-.4c-.7-5.6-2.7-8.1-8-9V9c5.3-.9 7.3-3.4 8-9h.4Z";

export function Star({ className = "", delay = "0s" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`pointer-events-none absolute fill-plata ${className}`}
      style={{ animation: `twinkle 4s ease-in-out ${delay} infinite` }}
      aria-hidden="true"
    >
      <path d={STAR} />
    </svg>
  );
}

/** Grupo de estrellas. `stars`: [{ className, delay }] con posición y tamaño. */
export function Stars({ stars }) {
  return stars.map((s, i) => <Star key={i} className={s.className} delay={s.delay} />);
}

/** Ondas suaves en la parte inferior de un bloque (como el banner del manual de marca). */
export function Waves({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-0 w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveA" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#536B9A" stopOpacity="0.15" />
          <stop offset="0.6" stopColor="#899BCB" stopOpacity="0.45" />
          <stop offset="1" stopColor="#C5D2EE" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="waveB" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#899BCB" stopOpacity="0.1" />
          <stop offset="1" stopColor="#C5D2EE" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d="M0 150C220 90 420 200 720 150S1200 60 1440 110V220H0Z"
        fill="url(#waveA)"
      />
      <path
        d="M0 190C260 150 520 220 820 180S1260 130 1440 160V220H0Z"
        fill="url(#waveB)"
      />
      <path
        d="M0 150C220 90 420 200 720 150S1200 60 1440 110"
        fill="none"
        stroke="#C5D2EE"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
    </svg>
  );
}
