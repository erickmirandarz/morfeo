import Link from "next/link";
import { donation, howItWorks, membership } from "@/data/content";
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
/* Hacete socio                                                        */
/* ------------------------------------------------------------------ */
export function Membership() {
  const { title, subtitle, plans } = membership;
  return (
    <section id="beneficios" className="scroll-mt-20 bg-profundo/40 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Beneficios" title={title} subtitle={subtitle} />

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
          {plans.map((p) =>
            p.highlighted ? (
              <article
                key={p.id}
                className="card-light group relative p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 md:scale-105"
              >
                <Stars stars={[{ className: "right-8 top-8 h-5 w-5 !fill-acero" }]} />
                {p.badge && (
                  <span className="inline-flex rounded-full bg-profundo px-3 py-1 text-xs font-medium text-perla">
                    {p.badge}
                  </span>
                )}
                <h3 className="mt-4 text-2xl font-normal text-profundo">{p.name}</h3>
                <p className="mt-1 font-light text-profundo/70">{p.description}</p>
                <p className="mt-6 flex items-baseline gap-1 text-profundo">
                  <span className="text-4xl font-medium">{p.price}</span>
                  <span className="text-profundo/70">{p.period}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-profundo/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-acero text-perla">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.cta.href} className="btn-dark group/btn mt-8 w-full">
                  {p.cta.label}
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </article>
            ) : (
              <article
                key={p.id}
                className="card-dark group p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
              >
                <h3 className="text-2xl font-normal text-perla">{p.name}</h3>
                <p className="mt-1 font-light text-plata/75">{p.description}</p>
                <p className="mt-6 flex items-baseline gap-1 text-perla">
                  <span className="text-4xl font-medium">{p.price}</span>
                  <span className="text-plata/70">{p.period}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-plata/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-lavanda text-lavanda">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.cta.href} className="btn-secondary group/btn mt-8 w-full">
                  {p.cta.label}
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Un sueño, una oportunidad (donaciones)                              */
/* ------------------------------------------------------------------ */
export function Donation() {
  const { eyebrow, title, highlight, text, backgroundImage, cta } = donation;
  return (
    <section id="becas" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-lavanda/25 shadow-2xl shadow-black/40">
        {/* Fondo: foto de niños felices (o degradé mientras no esté la foto) */}
        {backgroundImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={backgroundImage}
            alt="Niños felices con las manos abiertas"
            className="absolute inset-0 h-full w-full object-cover object-[70%_100%] md:object-right-bottom"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-acero via-profundo to-noche" />
        )}
        {/* Velo: oscurece solo el lado del texto para que se lea */}
        {/* En celular: velo de arriba hacia abajo (los niños quedan visibles abajo) */}
        <div className="absolute inset-0 bg-gradient-to-b from-noche via-noche/85 to-transparent md:bg-gradient-to-r md:via-noche/40" />

        <div className="relative px-7 pt-14 pb-72 sm:px-12 sm:pt-20 md:min-h-[30rem] md:pb-20">
          <div className="max-w-md">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-hielo">{eyebrow}</span>
            <h2 className="mt-4 text-4xl font-normal leading-tight text-perla sm:text-5xl">
              {title}
              <span className="block text-lavanda">{highlight}</span>
            </h2>
            <div className="mt-6 space-y-3 text-lg font-light leading-relaxed text-plata/90">
              {text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>

            {/* Botón circular "Donar" */}
            <a
              href={cta.href || undefined}
              role={cta.href ? undefined : "button"}
              className="group relative mt-10 flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-full bg-gradient-to-br from-acero to-lavanda text-perla shadow-2xl shadow-lavanda/30 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 animate-ping rounded-full border-2 border-lavanda/50 [animation-duration:2.5s]" />
              <span className="absolute -inset-2.5 rounded-full border border-plata/30" />
              <Icon name="gift" className="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              <span className="mt-1.5 text-lg font-medium tracking-wide">{cta.label}</span>
            </a>
          </div>
        </div>
        <Waves className="h-16 opacity-50" />
      </div>
    </section>
  );
}
