"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "./Icon";

/**
 * Imagen que se abre en pantalla completa al hacer clic (plano, organigrama…).
 * En celular la vista ampliada es más ancha que la pantalla y se puede desplazar.
 */
export default function ZoomableImage({ src, alt, width, height, label = "Ver completo", title, className = "" }) {
  const [open, setOpen] = useState(false);

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
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden rounded-3xl border border-lavanda/25 shadow-2xl shadow-black/50 outline-none focus-visible:ring-2 focus-visible:ring-lavanda ${className}`}
        aria-label={`${label}: ${title ?? alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-noche/80 px-4 py-2 text-sm text-perla shadow-lg backdrop-blur transition-colors group-hover:bg-acero">
          <Icon name="external" className="h-4 w-4" />
          {label}
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title ?? alt}
          className="fixed inset-0 z-[90] flex flex-col bg-noche/95 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <p className="text-sm text-hielo">
              {title} <span className="text-plata/60 sm:hidden">· deslizá para recorrerlo</span>
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
          <div className="flex-1 overflow-auto px-4 pb-6 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={`${width}px`}
              className="mx-auto h-auto w-[1100px] max-w-none rounded-2xl sm:w-auto sm:max-w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
