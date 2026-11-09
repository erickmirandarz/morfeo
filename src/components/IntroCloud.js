"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "morfeo-intro-visto";
const FLOAT_MS = 1700; // tiempo que la nube flota antes de subir
const LIFT_MS = 1100; // duración de la subida

/** Nube grande (SVG) con degradé perla → celeste hielo. */
function Cloud({ className = "", id, style }) {
  return (
    <svg viewBox="0 0 600 300" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5F6FA" />
          <stop offset="0.6" stopColor="#DCE2F0" />
          <stop offset="1" stopColor="#C5D2EE" />
        </linearGradient>
        <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#899BCB" stopOpacity="0" />
          <stop offset="1" stopColor="#899BCB" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <g fill={`url(#${id}-fill)`}>
        <circle cx="185" cy="170" r="82" />
        <circle cx="295" cy="125" r="112" />
        <circle cx="415" cy="160" r="88" />
        <circle cx="490" cy="205" r="56" />
        <circle cx="110" cy="210" r="52" />
        <rect x="110" y="170" width="380" height="92" rx="46" />
      </g>
      {/* Sombra suave en la base */}
      <rect x="110" y="200" width="380" height="62" rx="31" fill={`url(#${id}-shade)`} />
    </svg>
  );
}

/**
 * Pantalla de entrada: una nube grande flota y, al subir, deja ver la página.
 * Se muestra una vez por sesión; un clic o una tecla la saltea.
 */
export default function IntroCloud() {
  const [phase, setPhase] = useState("float"); // float → lift → done

  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains("intro-done")) {
      setPhase("done");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setPhase("lift"), reduce ? 400 : FLOAT_MS);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "lift") return;
    const t2 = setTimeout(() => setPhase("done"), LIFT_MS);
    return () => clearTimeout(t2);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    document.documentElement.classList.add("intro-done");
    document.documentElement.classList.remove("intro-active");
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, [phase]);

  // Saltear con clic o tecla
  useEffect(() => {
    if (phase !== "float") return;
    const skip = () => setPhase("lift");
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [phase]);

  if (phase === "done") return null;

  const lifting = phase === "lift";

  return (
    <div
      id="intro-cloud"
      role="presentation"
      onClick={() => phase === "float" && setPhase("lift")}
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden"
    >
      {/* Fondo noche que se desvanece mientras la nube sube */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-noche via-profundo to-noche transition-opacity ease-out"
        style={{ opacity: lifting ? 0 : 1, transitionDuration: `${LIFT_MS}ms`, transitionDelay: lifting ? "250ms" : "0ms" }}
      />

      {/* Estrellas */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: lifting ? 0 : 1,
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 12% 22%, #DCE2F0 50%, transparent 51%), radial-gradient(1px 1px at 78% 18%, #DCE2F0 50%, transparent 51%), radial-gradient(1.5px 1.5px at 64% 72%, #C5D2EE 50%, transparent 51%), radial-gradient(1px 1px at 30% 80%, #DCE2F0 50%, transparent 51%), radial-gradient(1.5px 1.5px at 88% 55%, #DCE2F0 50%, transparent 51%), radial-gradient(1px 1px at 45% 12%, #C5D2EE 50%, transparent 51%)",
        }}
      />

      {/* Resplandor */}
      <div
        className="absolute h-[60vmin] w-[60vmin] rounded-full bg-lavanda/25 blur-3xl transition-opacity duration-700"
        style={{ opacity: lifting ? 0 : 1 }}
      />

      {/* Nubes pequeñas a los costados */}
      <Cloud
        id="c-left"
        className="absolute left-[-6vw] top-[18%] w-[34vw] max-w-[320px] opacity-40 blur-[1px] transition-transform ease-in"
        style={{ transform: lifting ? "translateY(-100vh)" : "none", transitionDuration: `${LIFT_MS}ms` }}
      />
      <Cloud
        id="c-right"
        className="absolute bottom-[16%] right-[-8vw] w-[38vw] max-w-[360px] opacity-30 blur-[1px] transition-transform ease-in"
        style={{ transform: lifting ? "translateY(-110vh)" : "none", transitionDuration: `${LIFT_MS}ms` }}
      />

      {/* Nube principal: aparece, flota y sube */}
      <div
        className="relative transition-transform"
        style={{
          transform: lifting ? "translateY(-130vh) scale(1.15)" : "translateY(0)",
          transitionDuration: `${LIFT_MS}ms`,
          transitionTimingFunction: "cubic-bezier(0.55, 0, 0.35, 1)",
        }}
      >
        <div style={{ animation: "introAppear 0.8s ease-out both, floaty 3.2s ease-in-out 0.8s infinite" }}>
          <Cloud id="c-main" className="w-[78vw] max-w-[640px] drop-shadow-[0_20px_60px_rgba(137,155,203,0.45)]" />
        </div>
      </div>
    </div>
  );
}
