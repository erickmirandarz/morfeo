"use client";

import { useEffect, useState } from "react";
import { navCta, navLinks, site } from "@/data/content";
import Icon from "./Icon";
import Logo from "./Logo";

const OFFSET = 120; // alto aproximado del menú fijo

/**
 * Menú fijo de la landing page. Cada enlace lleva a una sección de la
 * misma página (#inicio, #nosotros…) y se resalta la sección visible.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Sección activa: la más cercana (por arriba) a la parte inferior del menú,
      // sin importar el orden de los enlaces en el menú
      let current = ids[0];
      let best = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - OFFSET;
        if (top <= 0 && top > best) {
          best = top;
          current = id;
        }
      }
      // Al llegar al final de la página, marcar la última sección (Contacto)
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href) =>
    `relative px-4 py-2 text-sm transition-colors duration-200 after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:origin-left after:bg-lavanda after:transition-transform after:duration-300 ${
      active === href
        ? "text-perla after:scale-x-100"
        : "text-plata/80 after:scale-x-0 hover:text-perla hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-acero/30 bg-noche/90 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group" aria-label={`${site.name} — inicio`}>
          <Logo size="sm" />
        </a>

        {/* Enlaces escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href)} aria-current={active === link.href ? "true" : undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={navCta.href} className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">
            <Icon name="calendar" className="h-4 w-4" />
            {navCta.label}
          </a>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-plata transition-colors hover:bg-profundo lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                  active === link.href ? "bg-profundo text-perla" : "text-plata hover:bg-profundo/60"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={navCta.href} onClick={() => setOpen(false)} className="btn-primary mt-2 flex w-full text-sm">
              <Icon name="calendar" className="h-4 w-4" />
              {navCta.label}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
