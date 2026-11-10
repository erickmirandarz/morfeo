import Image from "next/image";
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

      <SessionDay />
    </section>
  );
}

/** "El día de tu sesión": qué traer y cómo es la sesión, momento a momento. */
function SessionDay() {
  const { eyebrow, title, reminder, duration, moments } = howItWorks.session;
  return (
    <div className="card-dark relative mt-20 overflow-hidden p-6 sm:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-acero/20 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-lavanda">{eyebrow}</p>
          <h3 className="mt-3 font-brand text-2xl font-light text-perla sm:text-3xl">{title}</h3>
          {duration && <p className="mt-2 text-sm text-plata/70">Duración aproximada: {duration}</p>}
        </div>

        {/* Recordatorio */}
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-lavanda/40 bg-noche/60 px-5 py-4 lg:mx-0">
          <span className="text-sm font-normal text-hielo">{reminder.title}</span>
          {reminder.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-acero/40 px-3 py-1 text-sm text-perla"
            >
              <Icon name="check" className="h-4 w-4 text-hielo" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Momentos de la sesión */}
      <ol className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {moments.map((m, i) => (
          <li key={m.title} className="relative flex gap-4 lg:flex-col">
            <span className="icon-ring h-14 w-14 shrink-0 bg-noche">
              <Icon name={m.icon} className="h-6 w-6" strokeWidth={1.4} />
            </span>
            {i < moments.length - 1 && (
              <span className="pointer-events-none absolute left-[4.25rem] right-0 top-7 hidden h-px bg-gradient-to-r from-lavanda/50 to-transparent lg:block" />
            )}
            <div>
              <p className="font-brand text-xs tracking-[0.2em] text-lavanda">{String(i + 1).padStart(2, "0")}</p>
              <h4 className="mt-1 text-base font-normal text-perla">{m.title}</h4>
              <p className="mt-1.5 text-sm font-light leading-relaxed text-plata/80">{m.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Merch Solidario — "Morfeo en tu Rutina"                             */
/* ------------------------------------------------------------------ */
export function Merch() {
  const { eyebrow, title, slogan, intro, heroImage, heroImageAlt, products, availability, alliance, scholarship, benefits } =
    merch;

  return (
    <section id="merch" className="scroll-mt-20 bg-profundo/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera: texto + foto de toda la línea */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="text-center lg:text-left">
            <div className="hidden lg:block">
              <SectionTitle eyebrow={eyebrow} title={title} align="left" />
            </div>
            <div className="lg:hidden">
              <SectionTitle eyebrow={eyebrow} title={title} />
            </div>
            <p className="mx-auto mt-5 max-w-xl font-brand text-xl font-light italic leading-snug text-lavanda sm:text-2xl lg:mx-0">
              “{slogan}”
            </p>
            <p className="mx-auto mt-5 max-w-xl font-light leading-relaxed text-plata/80 lg:mx-0">{intro}</p>
            <p className="mt-6 flex items-start justify-center gap-2 text-sm text-hielo/80 lg:justify-start">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
              {availability}
            </p>
          </div>

          {heroImage && (
            <figure className="group relative overflow-hidden rounded-3xl border border-lavanda/25 shadow-2xl shadow-black/50">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                width={1280}
                height={830}
                sizes="(min-width: 1024px) 700px, 100vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-perla/10" />
            </figure>
          )}
        </div>

        {/* Productos */}
        <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((p) => (
            <li
              key={p.name}
              className="card-light group flex flex-col text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lavanda/30"
            >
              {p.image ? (
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 300px, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <span className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-perla/80 text-acero ring-1 ring-acero/20 sm:h-24 sm:w-24">
                  <Icon name={p.icon} className="h-8 w-8 sm:h-12 sm:w-12" strokeWidth={1.2} />
                </span>
              )}
              <div className="flex flex-1 flex-col items-center p-4 sm:p-6">
                <h3 className="text-base font-medium leading-snug text-profundo sm:text-lg">{p.name}</h3>
                <span className="mt-3 block h-0.5 w-10 rounded bg-acero/60" />
                <p className="mt-3 text-xs font-light leading-relaxed text-profundo/75 sm:text-sm">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ¿Cómo funciona la alianza con comercios? */}
        <div className="mt-20">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-lavanda">{alliance.eyebrow}</span>
            <h3 className="mt-3 text-3xl font-normal text-perla sm:text-4xl">{alliance.title}</h3>
          </div>
          <div className="relative mt-10 grid gap-6 md:grid-cols-2">
            {/* Unión entre las dos partes (escritorio) */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lavanda/50 bg-noche font-brand text-xl text-lavanda md:flex">
              +
            </span>
            {alliance.parts.map((part) => (
              <article key={part.name} className="card-dark flex flex-col gap-4 p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="icon-ring h-14 w-14 shrink-0">
                    <Icon name={part.icon} className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h4 className="text-xl font-normal text-perla">{part.name}</h4>
                </div>
                <p className="font-light leading-relaxed text-plata/85">{part.text}</p>
                {part.reward && (
                  <p className="flex gap-2 rounded-2xl border border-lavanda/30 bg-acero/15 px-4 py-3 text-sm font-light leading-relaxed text-hielo">
                    <Icon name="gift" className="mt-0.5 h-4 w-4 shrink-0 text-lavanda" />
                    {part.reward}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

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

        {/* Beneficios para cada parte */}
        <h3 className="mt-20 text-center text-3xl font-normal text-perla sm:text-4xl">Beneficios para cada parte</h3>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article key={b.title} className="card-dark group flex flex-col items-center p-6 text-center">
              <span className="icon-ring h-14 w-14 group-hover:border-hielo group-hover:bg-acero/30">
                <Icon name={b.icon} className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h4 className="mt-4 text-lg font-normal text-perla">{b.title}</h4>
              <p className="mt-2 text-sm font-light leading-relaxed text-plata/85">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
