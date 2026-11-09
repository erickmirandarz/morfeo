import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { redFlags } from "@/data/content";

export const metadata = {
  title: "Banderas Rojas",
  description: redFlags.subtitle,
};

const severityStyles = {
  urgente: { label: "Urgencia", badge: "bg-red-500/15 text-red-300 ring-red-400/40", bar: "bg-red-400" },
  alta: { label: "Prioridad alta", badge: "bg-amber-500/15 text-amber-200 ring-amber-400/40", bar: "bg-amber-400" },
  moderada: { label: "Precaución", badge: "bg-hielo/15 text-hielo ring-hielo/40", bar: "bg-lavanda" },
};

export default function RedFlagsPage() {
  const { alerts, precautions, contraindications, disclaimer } = redFlags;

  return (
    <>
      <PageHeader icon="alert" eyebrow="Seguridad del paciente" title={redFlags.title} subtitle={redFlags.subtitle} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Aviso */}
        <div className="flex gap-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 text-sm text-amber-100">
          <Icon name="alert" className="h-5 w-5 shrink-0 text-amber-300" />
          <p>{disclaimer}</p>
        </div>

        {/* Alertas clínicas */}
        <h2 className="mt-14 text-2xl font-normal text-perla sm:text-3xl">Signos de alarma clínicos</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alerts.map((a) => {
            const s = severityStyles[a.severity] ?? severityStyles.moderada;
            return (
              <article
                key={a.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-acero/25 bg-profundo/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-lavanda/50"
              >
                <span className={`absolute inset-y-0 left-0 w-1 ${s.bar}`} />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-acero/30 text-lavanda transition-colors group-hover:bg-lavanda group-hover:text-noche">
                    <Icon name={a.icon} />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${s.badge}`}>{s.label}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-perla">{a.title}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-plata/85">
                  {a.signs.map((sign) => (
                    <li key={sign} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavanda" />
                      {sign}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-hielo/10 p-3 text-sm text-hielo">
                  <span className="font-semibold">Conducta: </span>
                  {a.action}
                </p>
              </article>
            );
          })}
        </div>

        {/* Precauciones + contraindicaciones */}
        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          <section className="lg:col-span-3">
            <h2 className="text-2xl font-normal text-perla sm:text-3xl">{precautions.title}</h2>
            <p className="mt-2 text-plata/75">{precautions.subtitle}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {precautions.approaches.map((ap) => (
                <div key={ap.name} className="rounded-2xl border border-acero/25 bg-profundo/60 p-6">
                  <h3 className="font-semibold text-hielo">{ap.name}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-plata/85">
                    {ap.avoid.map((x) => (
                      <li key={x} className="flex gap-2">
                        <Icon name="ban" className="h-4 w-4 shrink-0 text-red-300" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-2">
            <h2 className="text-2xl font-normal text-perla sm:text-3xl">{contraindications.title}</h2>
            <ul className="mt-6 space-y-3">
              {contraindications.items.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-xl border border-acero/25 bg-profundo/60 p-4 text-sm text-plata/85 transition-colors hover:border-red-400/40"
                >
                  <Icon name="ban" className="h-5 w-5 shrink-0 text-red-300" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
