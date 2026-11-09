import { howItWorks, merch } from "@/data/content";
import { Stars, Waves } from "./Decor";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

/* ------------------------------------------------------------------ */
/* ¿Cómo funciona?                                                     */
/* ------------------------------------------------------------------ */
export function HowItWorks() {
  const { title, subtitle, steps } = howItWorks;
  return (
    <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Paso a paso" title={title} subtitle={subtitle} />

      <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Línea que une los pasos (escritorio) */}
        <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-lavanda/50 to-transparent lg:block" />
        {steps.map((s, i) => (
          <li key={s.title} className="group relative flex flex-col items-center text-center">
            <span className="icon-ring relative h-20 w-20 bg-noche group-hover:-translate-y-1 group-hover:border-hielo group-hover:bg-acero/30">
              <Icon name={s.icon} className="h-8 w-8" strokeWidth={1.4} />
              <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-acero to-lavanda font-brand text-xs text-perla">
                {i + 1}
              </span>
            </span>
            <h3 className="mt-5 text-lg font-normal text-perla">{s.title}</h3>
            <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-plata/80">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Merch Solidario — "Morfeo en tu Rutina"                             */
/* ------------------------------------------------------------------ */
export function Merch() {
  const { eyebrow, title, slogan, intro, products, availability, scholarship, foundations } = merch;

  return (
    <section id="merch" className="scroll-mt-20 bg-profundo/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <p className="mx-auto mt-5 max-w-2xl text-center font-brand text-xl font-light italic leading-snug text-lavanda sm:text-2xl">
          “{slogan}”
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-center font-light leading-relaxed text-plata/80">{intro}</p>

        {/* Productos */}
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((p) => (
            <li
              key={p.name}
              className="card-light group flex flex-col items-center p-4 text-center transition-all sm:p-7 duration-300 hover:-translate-y-1.5 hover:shadow-lavanda/30"
            >
              <span className="relative flex h-16 w-16 items-center sm:h-24 sm:w-24 justify-center rounded-full bg-perla/80 text-acero ring-1 ring-acero/20 transition-all duration-300 group-hover:bg-acero group-hover:text-perla">
                <Icon name={p.icon} className="h-8 w-8 transition-transform sm:h-12 sm:w-12 duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.2} />
              </span>
              <h3 className="mt-4 text-base font-medium leading-snug text-profundo sm:mt-5 sm:text-lg">{p.name}</h3>
              <span className="mt-3 block h-0.5 w-10 rounded bg-acero/60" />
              <p className="mt-3 text-xs font-light leading-relaxed text-profundo/75 sm:text-sm">{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-hielo/80">
          <Icon name="pin" className="h-4 w-4 shrink-0 text-lavanda" />
          {availability}
        </p>

        {/* ¿Cómo funciona la beca solidaria? */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-lavanda/25 shadow-2xl shadow-black/40">
          {scholarship.backgroundImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={scholarship.backgroundImage}
              alt="Niños felices con las manos abiertas"
              className="absolute inset-0 h-full w-full object-cover object-[70%_100%] md:object-right-bottom"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-noche via-noche/90 to-noche/30 md:bg-gradient-to-r md:via-noche/75 md:to-transparent" />
          <Stars stars={[{ className: "right-10 top-10 h-5 w-5" }, { className: "right-24 top-24 h-3 w-3", delay: "1s" }]} />

          <div className="relative px-7 pt-12 pb-64 sm:px-12 sm:pt-16 md:max-w-[62%] md:pb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-hielo">{scholarship.eyebrow}</span>
            <h3 className="mt-4 text-3xl font-normal leading-tight text-perla sm:text-4xl">{scholarship.title}</h3>

            <div className="mt-8 flex items-center gap-5">
              <span className="font-brand text-6xl font-light text-lavanda sm:text-7xl">{scholarship.percent}</span>
              <p className="max-w-xs font-light leading-relaxed text-plata/90">{scholarship.percentText}</p>
            </div>

            <ol className="mt-8 space-y-4">
              {scholarship.steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-acero to-lavanda font-brand text-sm text-perla">
                    {i + 1}
                  </span>
                  <p className="pt-1 font-light leading-relaxed text-plata/90">{s}</p>
                </li>
              ))}
            </ol>
          </div>
          <Waves className="h-16 opacity-50" />
        </div>

        {/* Fundamento */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {foundations.map((f) => (
            <article key={f.title} className="card-dark group flex gap-5 p-7">
              <span className="icon-ring h-14 w-14 shrink-0 group-hover:border-hielo group-hover:bg-acero/30">
                <Icon name={f.icon} className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xl font-normal text-perla">{f.title}</h3>
                <p className="mt-2 font-light leading-relaxed text-plata/85">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
