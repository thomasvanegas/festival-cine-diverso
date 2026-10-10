import React from 'react';
import { NavLink } from 'react-router-dom';

const YearBadges = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Subtle grunge texture */}
      <div className="absolute inset-0 bg-texture-196 opacity-[0.07] pointer-events-none mix-blend-overlay" />
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-festivalRed/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-festivalRed font-ample mb-2">Archivo del Festival</p>
          <h2 className="text-2xl md:text-3xl font-black font-futura text-white uppercase tracking-wide">
            Ediciones Anteriores
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 2026 — Edición actual (rojo de la identidad 2026) */}
          <NavLink to="/2026" className="relative group cursor-pointer" aria-label="IV Edición 2026, edición actual: ver selección oficial">
            <div className="relative overflow-hidden bg-festivalRed border border-red-400/60 rounded-2xl p-8 text-center transform group-hover:scale-[1.03] group-hover:border-white/70 transition-all duration-300 shadow-xl shadow-festivalRed/30 hover:shadow-2xl hover:shadow-festivalRed/40">
              <div className="absolute inset-0 bg-texture-188 opacity-[0.18] mix-blend-multiply pointer-events-none" />
              <div className="relative">
                <span className="inline-block bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest font-ample px-3 py-1 rounded-full mb-3">
                  Edición actual
                </span>
                <h3 className="text-5xl md:text-6xl font-black text-white font-futura mb-3">2026</h3>
                <p className="text-white text-sm font-medium font-sans italic">"La Memoria Revelada"</p>
                <div className="mt-4 text-xs text-white font-bold uppercase tracking-wider font-ample group-hover:underline">
                  Ver selección oficial →
                </div>
              </div>
            </div>
          </NavLink>

          {/* 2025 */}
          <NavLink to="/2025" className="relative group cursor-pointer">
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8 text-center transform group-hover:scale-[1.03] group-hover:border-festivalRed/60 transition-all duration-300 shadow-xl hover:shadow-festivalRed/10 hover:shadow-2xl">
              <h3 className="text-5xl md:text-6xl font-black text-white font-futura mb-3">2025</h3>
              <p className="text-zinc-400 text-sm font-light font-sans italic">"Historias que nos habitan"</p>
              <div className="mt-4 text-xs text-festivalRed font-bold uppercase tracking-wider font-ample group-hover:underline">
                Ver edición →
              </div>
            </div>
          </NavLink>

          {/* 2024 */}
          <NavLink to="/2024" className="relative group cursor-pointer">
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8 text-center transform group-hover:scale-[1.03] group-hover:border-festivalRed/60 transition-all duration-300 shadow-xl hover:shadow-festivalRed/10 hover:shadow-2xl">
              <h3 className="text-5xl md:text-6xl font-black text-white font-futura mb-3">2024</h3>
              <p className="text-zinc-400 text-sm font-light font-sans italic">"Todxs brillamos en la pantalla grande"</p>
              <div className="mt-4 text-xs text-festivalRed font-bold uppercase tracking-wider font-ample group-hover:underline">
                Ver edición →
              </div>
            </div>
          </NavLink>

          {/* 2023 */}
          <NavLink to="/2023" className="relative group cursor-pointer">
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8 text-center transform group-hover:scale-[1.03] group-hover:border-festivalRed/60 transition-all duration-300 shadow-xl hover:shadow-festivalRed/10 hover:shadow-2xl">
              <h3 className="text-5xl md:text-6xl font-black text-white font-futura mb-3">2023</h3>
              <p className="text-zinc-400 text-sm font-light font-sans italic">"Donde Todxs brillamos en la pantalla grande"</p>
              <div className="mt-4 text-xs text-festivalRed font-bold uppercase tracking-wider font-ample group-hover:underline">
                Ver edición →
              </div>
            </div>
          </NavLink>

        </div>
      </div>
    </section>
  );
};

export default YearBadges;
