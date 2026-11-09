"use client";

import { useState } from "react";
import { missionVisionValues } from "@/data/content";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

/**
 * Tarjetas Misión / Visión / Valores.
 * En escritorio: al pasar el cursor (o enfocar con teclado) una tarjeta
 * crece (flex-grow) y las demás se contraen. En móvil se apilan y se
 * expanden al tocar.
 */
export default function MissionVisionValues() {
  const { title, subtitle, items } = missionVisionValues;
  const [active, setActive] = useState(null);

  const growClass = (id) => {
    if (active === null) return "lg:flex-[1]";
    return active === id ? "lg:flex-[2.2]" : "lg:flex-[0.7]";
  };

  return (
    <section id="mision" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Nuestra esencia" title={title} subtitle={subtitle} />

      <div
        className="mt-14 flex flex-col gap-5 lg:h-[24rem] lg:flex-row"
        onMouseLeave={() => setActive(null)}
      >
        {items.map((item) => {
          const isActive = active === item.id;
          const isDimmed = active !== null && !isActive;
          return (
            <article
              key={item.id}
              tabIndex={0}
              onMouseEnter={() => setActive(item.id)}
              onFocus={() => setActive(item.id)}
              onBlur={() => setActive(null)}
              className={`group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border p-7 shadow-lg outline-none transition-all duration-500 ease-out ${growClass(
                item.id
              )} ${
                isActive
                  ? "border-lavanda/60 bg-gradient-to-br from-profundo via-profundo to-acero/50 shadow-acero/20"
                  : "border-lavanda/20 bg-profundo/70"
              } ${isDimmed ? "lg:opacity-70" : "opacity-100"} focus-visible:ring-2 focus-visible:ring-lavanda`}
            >
              {/* Brillo decorativo */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lavanda/20 blur-3xl transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />

              <span
                className={`icon-ring h-14 w-14 shrink-0 ${
                  isActive ? "border-hielo bg-acero/40" : ""
                }`}
              >
                <Icon name={item.icon} />
              </span>

              <h3 className={`mt-5 font-normal text-perla transition-all duration-300 ${isDimmed ? "text-2xl lg:text-xl" : "text-2xl"}`}>{item.title}</h3>
              {item.summary && (
                <p
                  className={`mt-3 leading-relaxed text-plata/85 ${
                    isActive ? "" : isDimmed ? "lg:line-clamp-3" : "lg:line-clamp-5"
                  }`}
                >
                  {item.summary}
                </p>
              )}

              {/* Lista de valores (siempre visible) */}
              {item.values && (
                <ul className={`mt-4 flex flex-wrap ${isDimmed ? "gap-2 lg:gap-1.5" : "gap-2"}`}>
                  {item.values.map((v) => (
                    <li
                      key={v}
                      className={`rounded-full border transition-colors duration-300 ${
                        isDimmed ? "px-3.5 py-1.5 text-sm lg:px-2.5 lg:py-1 lg:text-xs" : "px-3.5 py-1.5 text-sm"
                      } ${isActive ? "border-hielo/60 bg-acero/40 text-perla" : "border-lavanda/40 text-hielo"}`}
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              )}

              {/* Texto que aparece al expandirse */}
              {item.details?.length > 0 && (
                <div
                  className={`space-y-2 overflow-hidden leading-relaxed text-hielo transition-all duration-500 ${
                    isActive ? "mt-4 max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.details.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
