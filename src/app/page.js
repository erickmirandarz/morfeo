import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { Stars, Waves } from "@/components/Decor";
import { Donation, HowItWorks, Membership } from "@/components/HomeSections";
import Icon from "@/components/Icon";
import MissionVisionValues from "@/components/MissionVisionValues";
import SectionTitle from "@/components/SectionTitle";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import { brand, featureCards, hero, pillars, specialists } from "@/data/content";

const initials = (name) =>
  name
    .replace(/^(Lic\.|Dr\.|Dra\.|Mg\.|Prof\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/* ------------------------------------------------------------------ */
/* Hero: banner tipo tarjeta con emblema a la derecha y ondas abajo     */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative px-4 pt-28 pb-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-acero/20 blur-3xl" />

      <div className="card-dark relative mx-auto max-w-7xl rounded-3xl">
        <Stars
          stars={[
            { className: "left-[45%] top-10 h-4 w-4" },
            { className: "left-[58%] top-24 h-2 w-2", delay: "1s" },
            { className: "right-[8%] top-16 h-6 w-6", delay: "2s" },
            { className: "right-[20%] top-[45%] h-3 w-3", delay: "0.5s" },
          ]}
        />

        <div className="relative grid items-center gap-6 px-7 pt-12 pb-32 sm:px-12 lg:grid-cols-2 lg:pt-16 lg:pb-40">
          <div className="relative z-10">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-hielo">
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-normal leading-tight tracking-tight text-perla sm:text-5xl xl:text-6xl">
              {hero.title}
              <span className="block text-lavanda">{hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-plata/85">{hero.subtitle}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={hero.primaryCta.href} className="btn-primary group">
                {hero.primaryCta.label}
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={hero.secondaryCta.href} className="btn-secondary">
                <Icon name="play" className="h-4 w-4" />
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Emblema */}
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute inset-10 rounded-full bg-lavanda/20 blur-3xl" />
            <Image
              src={brand.emblem}
              alt={`${brand.name} — emblema`}
              width={550}
              height={550}
              priority
              className="relative"
              style={{ animation: "floaty 7s ease-in-out infinite" }}
            />
          </div>
        </div>

        <Waves className="h-32 sm:h-40" />

        {/* Indicadores sobre las ondas */}
        <dl className="absolute inset-x-0 bottom-0 z-10 hidden grid-cols-3 gap-4 px-12 pb-8 sm:grid lg:w-1/2">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dd className="text-3xl font-light text-perla">{s.value}</dd>
              <dt className="mt-1 text-xs uppercase tracking-wider text-hielo/90">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pilares: íconos dentro de círculos con borde lavanda                 */
/* ------------------------------------------------------------------ */
function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={pillars.title} />
      <ul className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
        {pillars.items.map((p) => {
          // Etiqueta en dos líneas, como en el manual de marca ("Tecnología / y ciencia")
          const words = p.label.split(" ");
          const first = words[0];
          const rest = words.slice(1).join(" ");
          return (
            <li key={p.label} className="group flex flex-col items-center text-center">
              <span className="icon-ring relative h-28 w-28 border-lavanda bg-gradient-to-b from-profundo to-noche shadow-lg shadow-black/30 group-hover:-translate-y-1 group-hover:border-hielo group-hover:shadow-lavanda/25 sm:h-32 sm:w-32">
                <span className="absolute inset-2 rounded-full border border-lavanda/15" />
                <Icon name={p.icon} className="h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]" strokeWidth={1.1} />
              </span>
              <span className="mt-5 text-base font-light leading-snug text-plata sm:text-lg">
                {first}
                {rest && <span className="block">{rest}</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tarjetas destacadas: una clara y una oscura                          */
/* ------------------------------------------------------------------ */
function FeatureCards() {
  const { light, dark } = featureCards;
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-2 lg:px-8">
      <article className="card-light group p-8 sm:p-10">
        <Stars stars={[{ className: "right-[38%] top-8 h-4 w-4 !fill-lavanda" }]} />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-acero/25" />
        <Icon
          name={light.icon}
          className="pointer-events-none absolute right-8 top-1/2 h-28 w-28 -translate-y-1/2 text-acero/70 transition-transform duration-500 group-hover:scale-110"
          strokeWidth={0.9}
        />
        <div className="relative max-w-[65%]">
          <h3 className="text-2xl font-normal text-profundo sm:text-3xl">{light.title}</h3>
          <span className="mt-3 block h-0.5 w-12 rounded bg-acero" />
          <p className="mt-4 font-light text-profundo/80">{light.text}</p>
          <Link href={light.cta.href} className="btn-dark group/btn mt-7">
            {light.cta.label}
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </article>

      <article className="card-dark group p-8 sm:p-10">
        <Stars
          stars={[
            { className: "right-16 top-8 h-6 w-6" },
            { className: "right-8 top-20 h-4 w-4", delay: "1.5s" },
          ]}
        />
        <div className="relative pb-10">
          <h3 className="text-2xl font-normal text-perla sm:text-3xl">
            {dark.title}
            <span className="block text-lavanda">{dark.highlight}</span>
          </h3>
          <p className="mt-4 max-w-md font-light text-plata/85">{dark.text}</p>
          <Link href={dark.cta.href} className="btn-primary group/btn mt-7">
            {dark.cta.label}
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
        <Waves className="h-20" />
      </article>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Especialistas                                                        */
/* ------------------------------------------------------------------ */
function Specialists() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Equipo" title={specialists.title} subtitle={specialists.subtitle} />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specialists.members.map((m, i) => (
          <li
            key={`${m.name}-${i}`}
            className="group rounded-2xl border border-lavanda/20 bg-profundo/60 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-lavanda/50 hover:shadow-acero/20"
          >
            {m.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={m.photo}
                alt={m.name}
                className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-lavanda/60 ring-offset-4 ring-offset-profundo"
              />
            ) : (
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-acero to-lavanda text-2xl font-light text-perla ring-2 ring-lavanda/60 ring-offset-4 ring-offset-profundo transition-transform duration-300 group-hover:scale-105">
                {initials(m.name)}
              </div>
            )}
            <h3 className="mt-6 font-medium text-perla">{m.name}</h3>
            <p className="mt-1 text-sm text-lavanda">{m.role}</p>
            <p className="mt-4 rounded-full bg-hielo/10 px-3 py-1.5 text-xs font-light text-hielo">{m.specialty}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeatureCards />
      <MissionVisionValues />
      <TechnologyCarousel />
      <Specialists />
      <HowItWorks />
      <BookingForm />
      <Membership />
      <Donation />
    </>
  );
}
