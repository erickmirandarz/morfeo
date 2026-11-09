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
    if (active === null) return "md:flex-[1]";
    return active === id ? "md:flex-[2.2]" : "md:flex-[0.7]";
  };

  return (
    <section id="mision" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="La cátedra" title={title} subtitle={subtitle} />

      <div
        className="mt-14 flex flex-col gap-5 md:h-[22rem] md:flex-row"
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
              onClick={() => setActive(isActive ? null : item.id)}
              className={`group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border p-7 shadow-lg outline-none transition-all duration-500 ease-out ${growClass(
                item.id
              )} ${
                isActive
                  ? "border-lavanda/60 bg-gradient-to-br from-profundo via-profundo to-acero/50 shadow-acero/20"
                  : "border-lavanda/20 bg-profundo/70"
              } ${isDimmed ? "md:opacity-70" : "opacity-100"} focus-visible:ring-2 focus-visible:ring-lavanda`}
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

              <h3 className="mt-5 text-2xl font-normal text-perla">{item.title}</h3>
              <p className={`mt-3 leading-relaxed text-plata/85 ${isDimmed ? "md:line-clamp-3" : ""}`}>
                {item.summary}
              </p>

              {/* Detalle que aparece al expandirse */}
              <ul
                className={`space-y-2 overflow-hidden text-sm text-hielo transition-all duration-500 ${
                  isActive ? "mt-5 max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavanda" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
