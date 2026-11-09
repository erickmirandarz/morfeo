"use client";

import { useEffect, useMemo, useState } from "react";
import { booking } from "@/data/content";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const WEEKDAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

const sameDay = (a, b) =>
  a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const formatDate = (d) => {
  const s = d.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" });
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/* ------------------------------------------------------------------ */
/* Calendario                                                          */
/* ------------------------------------------------------------------ */
function Calendar({ today, selected, onSelect }) {
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  // Celdas del mes (semana empieza el lunes)
  const cells = useMemo(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const offset = (new Date(year, month, 1).getDay() + 6) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    return [
      ...Array(offset).fill(null),
      ...Array.from({ length: days }, (_, i) => new Date(year, month, i + 1)),
    ];
  }, [view]);

  const isPastMonth =
    view.getFullYear() < today.getFullYear() ||
    (view.getFullYear() === today.getFullYear() && view.getMonth() <= today.getMonth());

  const changeMonth = (delta) => setView((v) => new Date(v.getFullYear(), v.getMonth() + delta, 1));

  const isAvailable = (d) => d >= today && booking.workingDays.includes(d.getDay());

  return (
    <div className="card-dark p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={isPastMonth}
          aria-label="Mes anterior"
          className="rounded-full border border-lavanda/40 p-2 text-plata transition-colors hover:bg-acero disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <Icon name="chevronLeft" className="h-4 w-4" strokeWidth={2} />
        </button>
        <p className="font-brand text-lg tracking-[0.15em] text-perla">
          {MONTHS[view.getMonth()]} {view.getFullYear()}
        </p>
        <button
          type="button"
          onClick={() => changeMonth(1)}
          aria-label="Mes siguiente"
          className="rounded-full border border-lavanda/40 p-2 text-plata transition-colors hover:bg-acero"
        >
          <Icon name="chevronRight" className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs uppercase tracking-wider text-lavanda">
        {WEEKDAYS.map((d) => (
          <span key={d} className="py-1">{d}</span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />;
          const available = isAvailable(d);
          const isSelected = sameDay(d, selected);
          const isToday = sameDay(d, today);
          return (
            <button
              key={d.toISOString()}
              type="button"
              disabled={!available}
              onClick={() => onSelect(d)}
              aria-pressed={isSelected}
              aria-label={formatDate(d)}
              className={`relative aspect-square rounded-full text-sm transition-all duration-200 ${
                isSelected
                  ? "bg-gradient-to-br from-acero to-lavanda font-semibold text-perla shadow-lg shadow-lavanda/30"
                  : available
                    ? "text-perla hover:bg-acero/40"
                    : "cursor-not-allowed text-plata/25"
              } ${isToday && !isSelected ? "ring-1 ring-lavanda/70" : ""}`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-lavanda/15 pt-4 text-xs text-plata/70">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-acero to-lavanda" /> Seleccionado
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full ring-1 ring-lavanda/70" /> Hoy
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-plata/15" /> No disponible
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Campos del formulario                                               */
/* ------------------------------------------------------------------ */
const inputClass =
  "w-full rounded-xl border border-lavanda/25 bg-noche/60 px-4 py-2.5 text-perla placeholder:text-plata/40 outline-none transition-colors focus:border-lavanda focus:ring-2 focus:ring-lavanda/30";

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm text-hielo">{label}</span>
      {children}
    </label>
  );
}

function PillGroup({ name, options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={value === opt}
          onClick={() => onChange(name, opt)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-200 ${
            value === opt
              ? "border-transparent bg-gradient-to-r from-acero to-lavanda text-perla shadow-md"
              : "border-lavanda/30 text-plata hover:border-lavanda"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

const EMPTY = {
  nombre: "",
  edad: "",
  sexo: "",
  telefono: "",
  email: "",
  busca: "",
  problema: "",
  sentimiento: "",
};

/* ------------------------------------------------------------------ */
/* Sección completa                                                    */
/* ------------------------------------------------------------------ */
export default function BookingForm() {
  const [today, setToday] = useState(null); // se calcula en el navegador (la página es estática)
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [data, setData] = useState(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setToday(t);
  }, []);

  const set = (name, value) => setData((d) => ({ ...d, [name]: value }));
  const onInput = (e) => set(e.target.name, e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) return setError("Elegí un día y un horario en el calendario.");
    if (!data.sexo) return setError("Indicá tu sexo.");
    if (!data.busca) return setError("Indicá qué estás buscando.");
    setError("");
    // TODO: conectar con un servicio (email, Google Sheets, base de datos…) para recibir las solicitudes.
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setDate(null);
    setTime("");
    setData(EMPTY);
  };

  return (
    <section id="turno" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Turnos" title={booking.title} subtitle={booking.subtitle} />

      {sent ? (
        <div className="card-dark mx-auto mt-14 max-w-xl p-10 text-center">
          <span className="icon-ring mx-auto h-20 w-20 bg-acero/30">
            <Icon name="heart" className="h-9 w-9" strokeWidth={1.4} />
          </span>
          <p className="mt-6 text-xl text-perla">{booking.successMessage}</p>
          <p className="mt-3 font-light text-hielo">
            {formatDate(date)} · {time} hs
          </p>
          <button type="button" onClick={reset} className="btn-secondary mt-8">
            Pedir otro turno
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Calendario + horarios */}
          <div className="mx-auto w-full max-w-md space-y-5 lg:max-w-none">
            {today ? (
              <Calendar
                today={today}
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setTime("");
                }}
              />
            ) : (
              <div className="card-dark aspect-square animate-pulse" />
            )}

            <div
              className={`card-dark p-5 transition-opacity duration-300 ${date ? "opacity-100" : "pointer-events-none opacity-50"}`}
            >
              <p className="text-sm text-hielo">
                {date ? (
                  <>
                    Horarios para el <span className="text-perla">{formatDate(date)}</span>
                  </>
                ) : (
                  "Elegí un día para ver los horarios"
                )}
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {booking.timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`rounded-full border py-1.5 text-sm transition-all duration-200 ${
                      time === t
                        ? "border-transparent bg-gradient-to-r from-acero to-lavanda text-perla shadow-md"
                        : "border-lavanda/30 text-plata hover:border-lavanda"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Datos */}
          <div className="card-dark p-6 sm:p-8">
            <h3 className="text-xl font-normal text-perla">Tus datos</h3>
            <span className="mt-3 block h-0.5 w-12 rounded bg-lavanda" />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Nombre y apellido" className="sm:col-span-2">
                <input name="nombre" required value={data.nombre} onChange={onInput} className={inputClass} placeholder="Ej. Ana Pérez" autoComplete="name" />
              </Field>
              <Field label="Edad">
                <input name="edad" type="number" min="0" max="120" required value={data.edad} onChange={onInput} className={inputClass} placeholder="Años" />
              </Field>
              <Field label="Teléfono">
                <input name="telefono" type="tel" required value={data.telefono} onChange={onInput} className={inputClass} placeholder="Ej. 388 412 3456" autoComplete="tel" />
              </Field>
              <Field label="Email" className="sm:col-span-2">
                <input name="email" type="email" value={data.email} onChange={onInput} className={inputClass} placeholder="tu@email.com (opcional)" autoComplete="email" />
              </Field>

              <div className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-hielo">Sexo</span>
                <PillGroup name="sexo" options={booking.genderOptions} value={data.sexo} onChange={set} />
              </div>
              <div className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-hielo">¿Qué buscás?</span>
                <PillGroup name="busca" options={booking.lookingForOptions} value={data.busca} onChange={set} />
              </div>

              <Field label="¿Cuál es tu problema?" className="sm:col-span-2">
                <textarea name="problema" required rows={3} value={data.problema} onChange={onInput} className={inputClass} placeholder="Contanos brevemente qué te pasa" />
              </Field>
              <Field label="¿Cómo te sentís y por qué querés asistir a nuestro centro?" className="sm:col-span-2">
                <textarea name="sentimiento" rows={3} value={data.sentimiento} onChange={onInput} className={inputClass} placeholder="Escribí lo que quieras compartir" />
              </Field>
            </div>

            {error && (
              <p className="mt-5 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2.5 text-sm text-red-200">
                <Icon name="alert" className="h-4 w-4" /> {error}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-light text-plata/70">
                {date && time ? (
                  <>
                    Turno: <span className="text-perla">{formatDate(date)}</span> · {time} hs
                  </>
                ) : (
                  "Todavía no elegiste día y horario."
                )}
              </p>
              <button type="submit" className="btn-primary">
                Solicitar turno <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
