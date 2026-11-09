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
      <path d="M12 19c-2.6-1.7-3.8-4.4-3.8-7.3 0-2.4 1.4-4.6 3.8-6.2 2.4 1.6 3.8 3.8 3.8 6.2 0 2.9-1.2 5.6-3.8 7.3Z" />
      <path d="M12 19c-3.6.2-6.7-1.4-8-4.6 1-.9 2.4-1.3 4.2-1.1M12 19c3.6.2 6.7-1.4 8-4.6-1-.9-2.4-1.3-4.2-1.1" />
      <path d="M8.3 10.2C6.4 9.5 4.6 9.6 3 10.3c.3 3.9 3.5 7.6 9 8.7M15.7 10.2c1.9-.7 3.7-.6 5.3.1-.3 3.9-3.5 7.6-9 8.7" />
    </>
  ),
  sparkle: <path d="M12 2c.6 4.6 2.4 6.9 7 7.5v1c-4.6.6-6.4 2.9-7 7.5h-1c-.6-4.6-2.4-6.9-7-7.5v-1C8.6 8.9 10.4 6.6 11 2h1Z" />,
  check: <path d="m5 12 5 5L20 7" />,
  bottle: (
    <>
      <path d="M10 2h4v3l1.5 2.2V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V7.2L10 5V2Z" />
      <path d="M8.5 11h7M8.5 16h7" />
    </>
  ),
  sleepmask: (
    <>
      <path d="M2.5 10c0-2 1.6-3.5 3.5-3.5h12c1.9 0 3.5 1.5 3.5 3.5v.5c0 2.5-2 4.5-4.5 4.5-1.5 0-2.6-.7-3.3-1.7-.4-.6-1-.9-1.7-.9s-1.3.3-1.7.9C9.6 14.3 8.5 15 7 15c-2.5 0-4.5-2-4.5-4.5V10Z" />
      <path d="M6 10.5q1.5 1.3 3 0M15 10.5q1.5 1.3 3 0M2.5 9.5 1 8.5M21.5 9.5 23 8.5" />
    </>
  ),
  cup: (
    <>
      <path d="M6.5 8h11l-1.4 12.2a2 2 0 0 1-2 1.8H9.9a2 2 0 0 1-2-1.8L6.5 8Z" />
      <path d="M5.5 5h13v3h-13zM9 3h6M7.4 13h9.2" />
    </>
  ),
  spray: (
    <>
      <rect x="6.5" y="10" width="8" height="12" rx="2" />
      <path d="M8.5 10V7h4v3M12.5 7.5H15M17.5 5.5h.01M19.5 8h.01M17.5 10.5h.01M21 5h.01" />
      <path d="M8.5 15h4" />
    </>
  ),
  users: (
    <>
      <circle cx="8" cy="9" r="3.2" />
      <circle cx="16.5" cy="10" r="2.7" />
      <path d="M2.5 20a5.5 5.5 0 0 1 11 0M13 20a4 4 0 0 1 8 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  facebook: <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15Z" />,
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
