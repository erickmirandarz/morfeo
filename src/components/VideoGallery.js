"use client";

import { useMemo, useState } from "react";
import { videos } from "@/data/content";
import Icon from "./Icon";

const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

function Placeholder({ large = false }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-profundo to-acero/40 text-lavanda">
      <Icon name="play" className={large ? "h-14 w-14" : "h-8 w-8"} />
      <span className={`font-medium text-hielo ${large ? "text-base" : "text-xs"}`}>Próximamente</span>
    </div>
  );
}

export default function VideoGallery() {
  const { categories, items } = videos;
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState(0);

  const filtered = useMemo(
    () => (category === categories[0] ? items : items.filter((v) => v.category === category)),
    [category, categories, items]
  );

  const current = filtered[selected] ?? filtered[0];

  const changeCategory = (c) => {
    setCategory(c);
    setSelected(0);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => changeCategory(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              c === category
                ? "bg-gradient-to-r from-acero to-lavanda text-perla shadow-md"
                : "border border-acero/30 bg-profundo/60 text-plata hover:border-lavanda/60 hover:text-perla"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-plata/70">No hay videos en esta categoría todavía.</p>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Reproductor */}
          <div className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-2xl border border-acero/30 bg-profundo shadow-2xl shadow-black/40">
              {current.youtubeId ? (
                <iframe
                  key={current.youtubeId}
                  src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?rel=0`}
                  title={current.title}
                  className="h-full w-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <Placeholder large />
              )}
            </div>
            <div className="mt-6">
              <span className="inline-flex rounded-full bg-hielo/15 px-3 py-1 text-xs font-medium text-hielo">
                {current.category}
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-perla">{current.title}</h2>
              <p className="mt-2 text-plata/80">{current.description}</p>
            </div>
          </div>

          {/* Lista */}
          <ul className="flex max-h-[36rem] flex-col gap-3 overflow-y-auto pr-1">
            {filtered.map((v, i) => {
              const isActive = v === current;
              return (
                <li key={v.title}>
                  <button
                    onClick={() => setSelected(i)}
                    className={`flex w-full gap-3 rounded-xl border p-2.5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-lavanda/60 bg-acero/25 shadow-md"
                        : "border-acero/20 bg-profundo/50 hover:-translate-y-0.5 hover:border-acero/50"
                    }`}
                  >
                    <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg">
                      {v.youtubeId ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={thumb(v.youtubeId)} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <Placeholder />
                      )}
                      {v.duration && (
                        <span className="absolute bottom-1 right-1 rounded bg-noche/80 px-1.5 text-[10px] text-perla">
                          {v.duration}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="line-clamp-2 text-sm font-medium text-perla">{v.title}</p>
                      <p className="mt-1 text-xs text-lavanda">{v.category}</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
