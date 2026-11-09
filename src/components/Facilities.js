import { facilities } from "@/data/content";
import SectionTitle from "./SectionTitle";
import ZoomableImage from "./ZoomableImage";

/** Sección "Instalaciones": plano del centro con vista ampliada. */
export default function Facilities() {
  const { eyebrow, title, subtitle, image, imageAlt, highlights, spaces } = facilities;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <ZoomableImage
        src={image}
        alt={imageAlt}
        width={1408}
        height={768}
        label="Ver plano completo"
        title="Plano del centro"
        className="mt-12"
      />

      {/* Datos destacados */}
      <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="card-dark p-5 text-center">
            <dd className="whitespace-nowrap font-brand text-3xl font-light text-lavanda sm:text-4xl">{h.value}</dd>
            <dt className="mt-2 text-sm font-light leading-snug text-plata/85">{h.label}</dt>
          </div>
        ))}
      </dl>

      {/* Otros espacios */}
      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {spaces.map((s) => (
          <li key={s} className="rounded-full border border-lavanda/30 px-4 py-1.5 text-sm text-hielo">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
