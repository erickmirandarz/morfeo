"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { capsuleStory, hero } from "@/data/content";
import { Waves } from "../Decor";
import Icon from "../Icon";

// La escena 3D se carga solo en el navegador y después del resto de la página
const CapsuleScene = dynamic(() => import("./CapsuleScene"), { ssr: false });

const STAGES = 1 + capsuleStory.steps.length; // hero + pasos

/** Opacidad de una etapa según el progreso del scroll (0 → 1). */
function stageOpacity(p, i) {
  const center = i / (STAGES - 1);
  const dist = Math.abs(p - center);
  const hold = 0.07; // tramo en el que la etapa se ve completa
  const fade = 0.11; // tramo de fundido
  return Math.min(1, Math.max(0, 1 - (dist - hold) / fade));
}

/* Ubicación del texto de cada etapa (escritorio): izquierda, derecha, izquierda, centro */
const PANEL_ALIGN = [
  "lg:items-center lg:justify-start lg:text-left",
  "lg:items-center lg:justify-end lg:text-left",
  "lg:items-center lg:justify-start lg:text-left",
  "lg:items-end lg:justify-center lg:text-center lg:pb-14",
];

function StepText({ step, center }) {
  return (
    <>
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">{step.eyebrow}</span>
      <h2 className="mt-4 text-3xl font-normal leading-tight tracking-tight text-perla sm:text-5xl">
        {step.title}
        <span className="block text-lavanda">{step.highlight}</span>
      </h2>
      <p className={`mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-plata/85 sm:text-lg ${center ? "" : "lg:mx-0"}`}>
        {step.text}
      </p>
      {step.primaryCta && (
        <div className={`mt-8 flex flex-wrap justify-center gap-4 ${center ? "" : "lg:justify-start"}`}>
          <a href={step.primaryCta.href} className="btn-primary group">
            <Icon name="calendar" className="h-4 w-4" />
            {step.primaryCta.label}
          </a>
          {step.secondaryCta && (
            <a href={step.secondaryCta.href} className="btn-secondary group">
              {step.secondaryCta.label}
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      )}
    </>
  );
}

export default function CapsuleHero() {
  const containerRef = useRef(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  // Progreso del scroll dentro de la sección (0 al entrar, 1 al salir)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      progressRef.current = p;
      setProgress(Math.round(p * 1000) / 1000);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Pausar el 3D cuando la sección no está en pantalla
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = [capsuleStory.heroWord, ...capsuleStory.steps.map((s) => s.word)];
  const goTo = (i) => {
    const el = containerRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (total * i) / (STAGES - 1), behavior: "smooth" });
  };

  return (
    <section id="inicio" ref={containerRef} className="relative" style={{ height: `${STAGES * 100}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-gradient-to-b from-noche via-profundo to-noche">
        {/* Resplandor de fondo */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acero/25 blur-3xl" />

        {/* Palabra gigante detrás de la cápsula */}
        {words.map((w, i) => {
          const o = stageOpacity(progress, i);
          return (
            <p
              key={w}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 select-none whitespace-nowrap text-center font-brand font-light leading-none tracking-[0.04em] text-transparent"
              style={{
                // Tamaño que entra siempre en el ancho de la pantalla, según la cantidad de letras
                fontSize: `min(14vw, ${(82 / (w.length * 0.75)).toFixed(2)}vw)`,
                WebkitTextStroke: "1.5px rgba(197, 210, 238, 0.38)",
                opacity: o,
                transform: `translateY(calc(-50% + ${(progress - i / (STAGES - 1)) * -140}px))`,
              }}
            >
              {w}
            </p>
          );
        })}

        {/* Escena 3D */}
        <div className="absolute inset-0">
          <CapsuleScene progressRef={progressRef} active={visible} />
        </div>

        {/* Degradé inferior para leer el texto en celular */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-noche via-noche/80 to-transparent lg:hidden" />

        {/* Textos de cada etapa */}
        {Array.from({ length: STAGES }).map((_, i) => {
          const o = stageOpacity(progress, i);
          const shift = (progress - i / (STAGES - 1)) * -120;
          const step = capsuleStory.steps[i - 1];
          const center = i === STAGES - 1;
          return (
            <div
              key={i}
              className={`absolute inset-0 z-10 mx-auto flex max-w-7xl items-end justify-center px-6 pb-16 pt-24 text-center sm:px-10 lg:px-12 ${PANEL_ALIGN[i] ?? ""}`}
              style={{ opacity: o, pointerEvents: o > 0.5 ? "auto" : "none" }}
              aria-hidden={o < 0.5}
            >
              <div className={`w-full max-w-xl lg:max-w-none ${center ? "lg:w-[60%]" : "lg:w-[46%]"}`} style={{ transform: `translateY(${shift}px)` }}>
                {i === 0 ? (
                  <>
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">{hero.eyebrow}</span>
                    <h1 className="mt-4 text-[2rem] font-normal leading-tight tracking-tight text-perla sm:mt-5 sm:text-5xl xl:text-6xl">
                      {hero.title}
                      <span className="block text-lavanda">{hero.highlight}</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-plata/85 lg:mx-0">{hero.subtitle}</p>
                    <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
                      <a href={hero.primaryCta.href} className="btn-primary group">
                        {hero.primaryCta.label}
                        <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <a href={hero.secondaryCta.href} className="btn-secondary">
                        <Icon name="calendar" className="h-4 w-4" />
                        {hero.secondaryCta.label}
                      </a>
                    </div>
                  </>
                ) : (
                  <StepText step={step} center={center} />
                )}
              </div>
            </div>
          );
        })}

        {/* Indicador de etapas */}
        <nav aria-label="Etapas" className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex lg:right-8">
          {words.map((w, i) => {
            const on = stageOpacity(progress, i) > 0.5;
            return (
              <button
                key={w}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a ${w}`}
                className={`w-2 rounded-full transition-all duration-300 ${on ? "h-8 bg-lavanda" : "h-2 bg-plata/30 hover:bg-plata/60"}`}
              />
            );
          })}
        </nav>

        {/* Invitación a hacer scroll */}
        <div
          className="pointer-events-none absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-hielo/80 lg:flex"
          style={{ opacity: Math.max(0, 1 - progress * 12) }}
        >
          <span className="flex h-9 w-6 justify-center rounded-full border border-hielo/50 pt-1.5">
            <span className="h-2 w-1 animate-bounce rounded-full bg-hielo" />
          </span>
          {capsuleStory.scrollHint}
        </div>

        <Waves className="h-20 opacity-60 sm:h-28" />
      </div>
    </section>
  );
}
