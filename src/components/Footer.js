import { brand, contact, navLinks, site } from "@/data/content";
import Icon from "./Icon";
import Logo from "./Logo";

/** Pie de página = sección "Contacto" de la landing. */
export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative scroll-mt-20 border-t border-lavanda/20 bg-gradient-to-b from-profundo/60 to-noche"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Marca */}
        <div>
          <Logo size="md" />
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-plata/80">{site.description}</p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm text-plata/85">
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
              {contact.address}
            </li>
            <li className="flex items-start gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-lavanda">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-lavanda">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Navegación + redes */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">Seguinos</h3>
          <div className="mt-5 flex gap-3">
            {contact.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-ring h-11 w-11 !border hover:-translate-y-0.5 hover:border-hielo hover:bg-acero/30"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
          <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-hielo">Secciones</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-plata/80 transition-colors hover:text-lavanda">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Lema */}
        <div className="flex items-center lg:justify-end">
          <p className="font-brand text-2xl font-light italic leading-snug text-hielo">
            {contact.slogan.split(",")[0]},
            <span className="block text-lavanda">{contact.slogan.split(",").slice(1).join(",").trim()}</span>
            <Icon name="heart" className="mt-2 h-6 w-6 text-lavanda" />
          </p>
        </div>
      </div>

      <div className="border-t border-lavanda/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-plata/60 sm:px-6 lg:px-8">
          © {site.year} {brand.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
