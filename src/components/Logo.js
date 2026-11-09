import Image from "next/image";
import { brand } from "@/data/content";

/**
 * Logo Morfeo: emblema + wordmark.
 * El emblema es un PNG con fondo transparente, apto para
 * cualquier fondo oscuro de la paleta.
 */
export default function Logo({ size = "md", showTagline = true }) {
  const s = {
    sm: { img: 40, word: "text-xl tracking-[0.3em]", tag: "text-[8px] tracking-[0.18em]" },
    md: { img: 48, word: "text-2xl tracking-[0.32em]", tag: "text-[9px] tracking-[0.2em]" },
    lg: { img: 72, word: "text-4xl tracking-[0.35em]", tag: "text-[11px] tracking-[0.25em]" },
  }[size];

  return (
    <span className="flex items-center gap-3">
      <Image
        src={brand.emblem}
        alt=""
        width={s.img}
        height={s.img}
        className="transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className={`font-brand font-light uppercase text-perla ${s.word}`}>{brand.name}</span>
        {showTagline && (
          <span className={`mt-1.5 font-sans uppercase text-lavanda ${s.tag}`}>{brand.tagline}</span>
        )}
      </span>
    </span>
  );
}
