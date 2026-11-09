"use client";

import { useCallback, useEffect, useState } from "react";
import { technology } from "@/data/content";
import { Stars, Waves } from "./Decor";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

/**
 * Carrusel "Nuestra Tecnología": tarjeta destacada + avance automático,
 * flechas, puntos e índice lateral. Se pausa al pasar el cursor.
 */
export default function TechnologyCarousel() {
  const { title, subtitle, items } = technology;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go]);

  const current = items[index];

  return (
    <section className="bg-profundo/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Equipamiento" title={title} subtitle={subtitle} />

        <div
          className="mt-14 grid gap-6 lg:grid-cols-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Tarjeta principal */}
          <div className="card-dark p-8 lg:col-span-3 lg:p-10">
            <Stars
              stars={[
                { className: "right-12 top-10 h-6 w-6" },
                { className: "right-24 top-24 h-3 w-3", delay: "1.2s" },
              ]}
            />
            <Waves className="h-24 opacity-70" />
            {/* key fuerza la animación al cambiar de slide */}
            <div key={index} className="relative animate-[fadeIn_0.5s_ease-out]">
              <span className="inline-flex rounded-full bg-hielo/15 px-3 py-1 text-xs font-medium text-hielo">
                {current.tag}
              </span>
              <div className="icon-ring mt-6 h-20 w-20 bg-acero/20">
                <Icon name={current.icon} className="h-9 w-9" strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 text-2xl font-normal text-perla sm:text-3xl">{current.title}</h3>
              <p className="mt-4 max-w-xl font-light leading-relaxed text-plata/85">{current.description}</p>
            </div>

            <div className="relative mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir a ${items[i].title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-lavanda" : "w-2 bg-acero/60 hover:bg-acero"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Anterior"
                  className="rounded-full border border-plata/60 p-2 text-plata transition-colors hover:bg-acero hover:text-perla"
                >
                  <Icon name="chevronLeft" className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Siguiente"
                  className="rounded-full border border-plata/60 p-2 text-plata transition-colors hover:bg-acero hover:text-perla"
                >
                  <Icon name="chevronRight" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Índice lateral (apilamiento) */}
          <ul className="flex flex-col gap-3 lg:col-span-2">
            {items.map((item, i) => (
              <li key={item.title}>
                <button
                  onClick={() => setIndex(i)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                    i === index
                      ? "translate-x-1 border-lavanda/50 bg-acero/25 shadow-md"
                      : "border-acero/20 bg-profundo/50 hover:border-acero/50"
                  }`}
                >
                  <span
                    className={`icon-ring h-11 w-11 shrink-0 !border ${
                      i === index ? "border-hielo bg-acero/50" : "border-lavanda/50"
                    }`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-perla">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
