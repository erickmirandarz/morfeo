import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import CapsuleHero from "@/components/capsule/CapsuleHero";
import { Stars } from "@/components/Decor";
import { Donation, HowItWorks, Membership } from "@/components/HomeSections";
import Icon from "@/components/Icon";
import MissionVisionValues from "@/components/MissionVisionValues";
import SectionTitle from "@/components/SectionTitle";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import { about, brand, pillars, services, specialists } from "@/data/content";

const initials = (name) =>
  name
    .replace(/^(Lic\.|Dr\/a\.|Dr\.|Dra\.|Mg\.|Prof\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/* ------------------------------------------------------------------ */
/* Pilares: íconos en círculo (debajo del logo y el nombre)            */
/* ------------------------------------------------------------------ */
function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={pillars.title} />
      <ul className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
        {pillars.items.map((p) => {
          const words = p.label.split(" ");
          return (
            <li key={p.label} className="group flex flex-col items-center text-center">
              <span className="icon-ring relative h-28 w-28 border-lavanda bg-gradient-to-b from-profundo to-noche shadow-lg shadow-black/30 group-hover:-translate-y-1 group-hover:border-hielo group-hover:shadow-lavanda/25 sm:h-32 sm:w-32">
                <span className="absolute inset-2 rounded-full border border-lavanda/15" />
                <Icon name={p.icon} className="h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]" strokeWidth={1.1} />
              </span>
              <span className="mt-5 text-base font-light leading-snug text-plata sm:text-lg">
                {words[0]}
                {words.length > 1 && <span className="block">{words.slice(1).join(" ")}</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Servicios                                                            */
/* ------------------------------------------------------------------ */
function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Servicios" title={services.title} subtitle={services.subtitle} />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {services.items.map((s) => (
          <li
            key={s.title}
            className="card-light group flex flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lavanda/30"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-perla/70 text-acero ring-1 ring-acero/20 transition-all duration-300 group-hover:bg-acero group-hover:text-perla">
              <Icon name={s.icon} className="h-10 w-10" strokeWidth={1.3} />
            </span>
            <h3 className="mt-5 text-lg font-medium leading-snug text-profundo">{s.title}</h3>
            <span className="mt-3 block h-0.5 w-10 rounded bg-acero/60" />
            <p className="mt-3 text-sm font-light leading-relaxed text-profundo/75">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Nosotros: Somos Morfeo                                               */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Imagen / panel con la frase */}
        <div className="card-dark relative aspect-[4/3] w-full">
          {about.image ? (
            <Image src={about.image} alt="Nuestro centro" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          ) : (
            <>
              <Image
                src={brand.emblem}
                alt=""
                width={360}
                height={360}
                className="absolute -bottom-10 -right-10 opacity-60"
              />
              <Stars
                stars={[
                  { className: "left-10 top-10 h-5 w-5" },
                  { className: "left-1/2 top-16 h-3 w-3", delay: "1s" },
                ]}
              />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-noche/70 via-transparent to-transparent" />
          <p className="absolute bottom-8 left-8 max-w-[60%] font-brand text-2xl font-light italic leading-snug text-perla sm:text-3xl">
            {about.quote}
            <Icon name="heart" className="mt-2 h-6 w-6 text-lavanda" />
          </p>
        </div>

        {/* Texto */}
        <div>
          <span className="inline-flex rounded-full bg-hielo/15 px-4 py-1.5 text-sm text-hielo">{about.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-normal tracking-tight text-perla sm:text-5xl">{about.title}</h2>
          <span className="mt-5 block h-0.5 w-14 rounded bg-lavanda" />
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-plata/85">{about.text}</p>
          <a href={about.cta.href} className="btn-secondary group mt-8">
            {about.cta.label}
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
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

/* ------------------------------------------------------------------ */
/* Landing page completa                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      <CapsuleHero />
      <Pillars />
      <Services />
      <About />
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
