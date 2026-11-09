/**
 * Título de sección al estilo Morfeo: rótulo en mayúsculas espaciadas
 * entre dos líneas finas, título y subtítulo opcionales.
 */
export default function SectionTitle({ eyebrow, title, highlight, subtitle, align = "center" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
          {centered && <span className="h-px w-12 bg-lavanda/60 sm:w-20" />}
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-hielo sm:text-sm">
            {eyebrow}
          </span>
          <span className="h-px w-12 bg-lavanda/60 sm:w-20" />
        </div>
      )}
      {title && (
        <h2 className="mt-5 text-3xl font-normal tracking-tight text-perla sm:text-4xl">
          {title} {highlight && <span className="text-lavanda">{highlight}</span>}
        </h2>
      )}
      {subtitle && <p className="mt-4 font-light text-plata/80">{subtitle}</p>}
    </div>
  );
}
