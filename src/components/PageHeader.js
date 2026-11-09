import Image from "next/image";
import { brand } from "@/data/content";
import { Stars, Waves } from "./Decor";
import Icon from "./Icon";

/** Encabezado común para las páginas internas (banner estilo Morfeo). */
export default function PageHeader({ icon, eyebrow, title, subtitle }) {
  return (
    <section className="px-4 pt-28 sm:px-6 lg:px-8">
      <div className="card-dark mx-auto max-w-7xl rounded-3xl">
        <Stars
          stars={[
            { className: "left-[12%] top-10 h-4 w-4" },
            { className: "right-[30%] top-14 h-3 w-3", delay: "1s" },
            { className: "right-[10%] top-1/3 h-5 w-5", delay: "2s" },
          ]}
        />
        <Image
          src={brand.emblem}
          alt=""
          width={320}
          height={320}
          className="pointer-events-none absolute -right-10 -top-6 hidden opacity-30 md:block"
        />
        <div className="relative px-7 pt-12 pb-28 text-center sm:px-12 sm:pb-32">
          {icon && (
            <span className="icon-ring mx-auto h-16 w-16 bg-acero/20">
              <Icon name={icon} className="h-7 w-7" strokeWidth={1.5} />
            </span>
          )}
          {eyebrow && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-lavanda/60 sm:w-16" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-hielo">{eyebrow}</span>
              <span className="h-px w-10 bg-lavanda/60 sm:w-16" />
            </div>
          )}
          <h1 className="mt-4 text-4xl font-normal tracking-tight text-perla sm:text-5xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-plata/80">{subtitle}</p>}
        </div>
        <Waves className="h-24 sm:h-28" />
      </div>
    </section>
  );
}
