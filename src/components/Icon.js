/**
 * Íconos SVG en línea (sin dependencias externas).
 * Uso: <Icon name="target" className="h-6 w-6" />
 */
const paths = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  scale: (
    <>
      <path d="M12 3v18M5 21h14M6 7h12" />
      <path d="m6 7-3 6a3 3 0 0 0 6 0L6 7ZM18 7l-3 6a3 3 0 0 0 6 0l-3-6Z" />
    </>
  ),
  dumbbell: (
    <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  cube: (
    <>
      <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" />
      <path d="m3 7 9 5 9-5M12 12v10" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  lungs: (
    <>
      <path d="M12 4v8M12 12l-3-2M12 12l3-2" />
      <path d="M9 8C6 8 3 13 3 18a2 2 0 0 0 3 1.7l3-1.7V8ZM15 8c3 0 6 5 6 10a2 2 0 0 1-3 1.7L15 18V8Z" />
    </>
  ),
  thermo: (
    <>
      <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z" />
      <path d="M12 9v7" />
    </>
  ),
  bone: (
    <path d="M17 10c.7-.7 1.7-.6 2.6-.6a2.5 2.5 0 1 0-2-4 2.5 2.5 0 1 0-4 2c0 .9.1 1.9-.6 2.6l-3.6 3.6c-.7.7-1.7.6-2.6.6a2.5 2.5 0 1 0 2 4 2.5 2.5 0 1 0 4-2c0-.9-.1-1.9.6-2.6L17 10Z" />
  ),
  nerve: <path d="M12 2v6m0 0-4 4m4-4 4 4m-8 0-2 6m2-6 2 10m6-10-2 10m2-10 2 6" />,
  pulse: <path d="M2 12h4l3-8 4 16 3-8h6" />,
  play: <path d="m8 5 11 7-11 7V5Z" />,
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-6-10V3" />
      <path d="M7 15h10" />
    </>
  ),
  ban: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m5.6 5.6 12.8 12.8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  hip: (
    <>
      <circle cx="9" cy="8" r="4" />
      <path d="M12 11l6 10M15 4c3 1 5 4 5 7" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 3A3 3 0 0 0 6.5 6a3 3 0 0 0-2 5.2A3 3 0 0 0 6 16.5 3 3 0 0 0 9.5 21 2.5 2.5 0 0 0 12 18.5v-13A2.5 2.5 0 0 0 9.5 3Z" />
      <path d="M14.5 3A3 3 0 0 1 17.5 6a3 3 0 0 1 2 5.2 3 3 0 0 1-1.5 5.3 3 3 0 0 1-3.5 4.5 2.5 2.5 0 0 1-2.5-2.5" />
      <path d="M8 9.5h1.5M8 14h2M14.5 9.5H16M14 14h2" />
    </>
  ),
  bed: (
    <>
      <path d="M3 5v14M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-8v6" />
      <circle cx="6.5" cy="11" r="1.5" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 20c-3-2-4.5-5-4.5-8.5C7.5 8 9.5 5.5 12 4c2.5 1.5 4.5 4 4.5 7.5S15 18 12 20Z" />
      <path d="M12 20c-4 0-7.5-2-9-6 2-.8 4-.8 5.6 0M12 20c4 0 7.5-2 9-6-2-.8-4-.8-5.6 0" />
    </>
  ),
  sparkle: <path d="M12 2c.6 4.6 2.4 6.9 7 7.5v1c-4.6.6-6.4 2.9-7 7.5h-1c-.6-4.6-2.4-6.9-7-7.5v-1C8.6 8.9 10.4 6.6 11 2h1Z" />,
  check: <path d="m5 12 5 5L20 7" />,
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v9H5v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </>
  ),
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.75 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.target}
    </svg>
  );
}
