"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navCta, navLinks, site } from "@/data/content";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-acero/30 bg-noche/90 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group" aria-label={`${site.name} — inicio`}>
          <Logo size="sm" />
        </Link>

        {/* Enlaces escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-colors duration-200 after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:origin-left after:bg-lavanda after:transition-transform after:duration-300 ${
                  isActive(link.href)
                    ? "text-perla after:scale-x-100"
                    : "text-plata/80 after:scale-x-0 hover:text-perla hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={navCta.href}
            className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex"
          >
            <Icon name="alert" className="h-4 w-4" />
            {navCta.label}
          </Link>

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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive(link.href) ? "bg-profundo text-perla" : "text-plata hover:bg-profundo/60"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={navCta.href}
              className="btn-primary mt-2 flex w-full text-sm"
            >
              <Icon name="alert" className="h-4 w-4" />
              {navCta.label}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
