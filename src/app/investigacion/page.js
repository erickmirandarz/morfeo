import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { research } from "@/data/content";

export const metadata = {
  title: "Investigación",
  description: research.subtitle,
};

const initials = (name) =>
  name
    .replace(/^(Lic\.|Dr\.|Dra\.|Mg\.|Prof\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function ResearchPage() {
  const { authors, researchLines, publications } = research;

  return (
    <>
      <PageHeader icon="flask" eyebrow="Producción académica" title={research.title} subtitle={research.subtitle} />

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
        {/* Autores */}
        <section>
          <div className="flex items-center gap-3">
            <Icon name="user" className="h-6 w-6 text-lavanda" />
            <h2 className="text-2xl font-normal text-perla sm:text-3xl">Autores y creadores del sitio</h2>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {authors.map((a, i) => (
              <li
                key={`${a.name}-${i}`}
                className="rounded-2xl border border-acero/25 bg-profundo/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-lavanda/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-acero to-lavanda font-bold text-noche">
                    {initials(a.name)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-perla">{a.name}</h3>
                    <p className="text-sm text-lavanda">{a.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-plata/80">{a.bio}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Líneas de investigación */}
        <section>
          <div className="flex items-center gap-3">
            <Icon name="flask" className="h-6 w-6 text-lavanda" />
            <h2 className="text-2xl font-normal text-perla sm:text-3xl">Líneas de investigación</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {researchLines.map((l, i) => (
              <div
                key={l.title}
                className="relative overflow-hidden rounded-2xl border border-acero/25 bg-gradient-to-br from-profundo to-acero/20 p-6"
              >
                <span className="absolute right-4 top-2 text-6xl font-bold text-acero/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative text-lg font-semibold text-hielo">{l.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-plata/80">{l.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publicaciones */}
        <section>
          <div className="flex items-center gap-3">
            <Icon name="book" className="h-6 w-6 text-lavanda" />
            <h2 className="text-2xl font-normal text-perla sm:text-3xl">Publicaciones</h2>
          </div>
          <ul className="mt-8 divide-y divide-acero/20 overflow-hidden rounded-2xl border border-acero/25 bg-profundo/60">
            {publications.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 p-6 transition-colors hover:bg-acero/10 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-perla">{p.title}</h3>
                  <p className="mt-1 text-sm text-plata/70">
                    {p.authors} · {p.year}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full bg-hielo/15 px-3 py-1 text-xs font-medium text-hielo">{p.type}</span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border border-acero/40 px-3 py-1.5 text-sm text-plata transition-colors hover:bg-acero hover:text-perla"
                    >
                      Ver <Icon name="external" className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
