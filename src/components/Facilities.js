"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { facilities } from "@/data/content";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

/** Sección "Instalaciones": plano del centro con vista ampliada. */
export default function Facilities() {
  const { eyebrow, title, subtitle, image, imageAlt, highlights, spaces } = facilities;
  const [open, setOpen] = useState(false);

  // Cerrar la vista ampliada con Escape y bloquear el scroll mientras está abierta
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {/* Plano */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mt-12 block w-full overflow-hidden rounded-3xl border border-lavanda/25 shadow-2xl shadow-black/50 outline-none focus-visible:ring-2 focus-visible:ring-lavanda"
        aria-label="Ver el plano completo"
      >
        <Image
          src={image}
          alt={imageAlt}
          width={1408}
          height={768}
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-noche/80 px-4 py-2 text-sm text-perla shadow-lg backdrop-blur transition-colors group-hover:bg-acero">
          <Icon name="external" className="h-4 w-4" />
          Ver plano completo
        </span>
      </button>

      {/* Datos destacados */}
      <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="card-dark p-5 text-center">
            <dd className="whitespace-nowrap font-brand text-3xl font-light text-lavanda sm:text-4xl">{h.value}</dd>
            <dt className="mt-2 text-sm font-light leading-snug text-plata/85">{h.label}</dt>
          </div>
        ))}
      </dl>

      {/* Otros espacios */}
      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {spaces.map((s) => (
          <li key={s} className="rounded-full border border-lavanda/30 px-4 py-1.5 text-sm text-hielo">
            {s}
          </li>
        ))}
      </ul>

      {/* Vista ampliada */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Plano completo del centro"
          className="fixed inset-0 z-[90] flex flex-col bg-noche/95 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <p className="text-sm text-hielo">
              Plano del centro <span className="text-plata/60 sm:hidden">· deslizá para recorrerlo</span>
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="rounded-full border border-lavanda/40 p-2 text-perla transition-colors hover:bg-acero"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>
          {/* En celular el plano se ve más grande y se puede desplazar */}
          <div className="flex-1 overflow-auto px-4 pb-6 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <Image
              src={image}
              alt={imageAlt}
              width={1408}
              height={768}
              sizes="1408px"
              className="mx-auto h-auto w-[1100px] max-w-none rounded-2xl sm:w-full sm:max-w-[1408px]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
