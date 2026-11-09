import Link from "next/link";
import { footer, navLinks, site } from "@/data/content";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-lavanda/20 bg-gradient-to-b from-profundo/60 to-noche">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Marca */}
        <div className="lg:col-span-2">
          <Logo size="md" />
          <p className="mt-6 font-medium text-perla">{site.name}</p>
          <p className="text-sm text-lavanda">{site.institution}</p>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-plata/80">{footer.about}</p>
        </div>

        {/* Navegación + institucional */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">Secciones</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-plata/80 transition-colors hover:text-lavanda">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-hielo">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footer.institutionalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-plata/80 transition-colors hover:text-lavanda">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-plata/80">
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
              <a href={`mailto:${site.contactEmail}`} className="break-all hover:text-lavanda">
                {site.contactEmail}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-acero/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-plata/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {site.year} {site.name}. Uso educativo.
          </p>
          <p>{footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
