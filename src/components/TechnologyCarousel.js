"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { technology } from "@/data/content";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

const LEAVE_MS = 450; // duración de la animación de salida de la tarjeta frontal
const VISIBLE_BEHIND = 2; // cuántas tarjetas se ven asomando detrás

/**
 * "Nuestra Tecnología" como mazo de tarjetas apiladas.
 * Cada tarjeta: foto a la izquierda + información a la derecha.
 * Al tocar la flecha, la tarjeta de adelante baja y pasa al fondo del mazo,
 * y queda visible la siguiente.
 */
export default function TechnologyCarousel() {
  const { title, subtitle, items } = technology;
  const n = items.length;
  const [index, setIndex] = useState(0); // tarjeta que está adelante
  const [leaving, setLeaving] = useState(null); // "next" | "prev" | null
  const timer = useRef(null);

  const move = useCallback(
    (dir) => {
      if (leaving) return;
      setLeaving(dir);
      timer.current = setTimeout(() => {
        setIndex((i) => (i + (dir === "next" ? 1 : -1) + n) % n);
        setLeaving(null);
      }, LEAVE_MS);
    },
    [leaving, n]
  );

  const goTo = (i) => {
    if (i !== index && !leaving) setIndex(i);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  // Flechas del teclado cuando el mazo tiene el foco
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") move("next");
    if (e.key === "ArrowLeft") move("prev");
  };

  // Estilo de cada tarjeta según su posición en el mazo (0 = adelante)
  const cardStyle = (pos) => {
    if (pos === 0 && leaving === "next") {
      // La de adelante baja y se desvanece para irse al fondo
      return { transform: "translateY(55%) scale(0.9) rotate(-2deg)", opacity: 0, zIndex: n + 1 };
    }
    if (pos === 0 && leaving === "prev") {
      return { transform: "translateY(-20%) scale(0.95)", opacity: 0, zIndex: n + 1 };
    }
    // Mientras sale la de adelante, las demás avanzan un lugar
    const p = leaving === "next" ? Math.max(pos - 1, 0) : pos;
    const hidden = p > VISIBLE_BEHIND;
    return {
      transform: `translateY(${p * 20}px) scale(${1 - p * 0.05})`,
      opacity: hidden ? 0 : 1,
      filter: `brightness(${1 - p * 0.25})`,
      zIndex: n - pos,
      pointerEvents: p === 0 ? "auto" : "none",
    };
  };

  return (
    <section className="bg-profundo/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Equipamiento" title={title} subtitle={subtitle} />

        <div className="mt-14 flex items-center gap-3 sm:gap-6">
          {/* Flecha anterior */}
          <ArrowButton dir="prev" onClick={() => move("prev")} />

          {/* Mazo */}
          <div
            className="relative grid flex-1 pb-12 outline-none"
            tabIndex={0}
            onKeyDown={onKeyDown}
            aria-roledescription="carrusel"
            aria-label={title}
          >
            {items.map((item, i) => {
              const pos = (i - index + n) % n;
              return (
                <article
                  key={item.title}
                  aria-hidden={pos !== 0}
                  className="card-dark bg-profundo [grid-area:1/1] origin-bottom transition-all ease-out"
                  style={{ ...cardStyle(pos), transitionDuration: `${LEAVE_MS}ms` }}
                >
                  <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-10">
                    {/* Foto */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-lavanda/30 bg-noche/60">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 768px) 420px, 100vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          style={{ objectPosition: item.imagePosition || "center" }}
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-profundo to-acero/40 text-lavanda">
                          <span className="icon-ring h-20 w-20">
                            <Icon name={item.icon} className="h-9 w-9" strokeWidth={1.4} />
                          </span>
                          <span className="text-xs uppercase tracking-[0.25em] text-hielo/70">Foto próximamente</span>
                        </div>
                      )}
                    </div>

                    {/* Información */}
                    <div className="pb-2">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-hielo/15 px-3 py-1 text-xs font-medium text-hielo">
                          {item.tag}
                        </span>
                        <span className="font-brand text-sm tracking-[0.2em] text-lavanda">
                          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-normal text-perla sm:text-3xl">{item.title}</h3>
                      {item.subtitle && (
                        <p className="mt-1 font-brand text-sm italic tracking-wide text-lavanda">{item.subtitle}</p>
                      )}
                      <span className="mt-4 block h-0.5 w-12 rounded bg-lavanda" />
                      <p className="mt-4 font-light leading-relaxed text-plata/85">{item.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Flecha siguiente */}
          <ArrowButton dir="next" onClick={() => move("next")} />
        </div>

        {/* Indicadores */}
        <div className="mt-2 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              onClick={() => goTo(i)}
              aria-label={`Ver ${item.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-lavanda" : "w-2 bg-acero/60 hover:bg-acero"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowButton({ dir, onClick }) {
  const isNext = dir === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isNext ? "Siguiente tarjeta" : "Tarjeta anterior"}
      className={`group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lavanda/50 text-perla shadow-lg transition-all duration-300 hover:scale-110 hover:border-hielo hover:shadow-lavanda/30 sm:h-14 sm:w-14 ${
        isNext ? "bg-gradient-to-br from-acero to-lavanda" : "bg-profundo/80"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-lavanda/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      <Icon
        name={isNext ? "chevronRight" : "chevronLeft"}
        className={`relative h-6 w-6 transition-transform duration-300 ${
          isNext ? "group-hover:translate-x-0.5" : "group-hover:-translate-x-0.5"
        }`}
        strokeWidth={2}
      />
    </button>
  );
}
