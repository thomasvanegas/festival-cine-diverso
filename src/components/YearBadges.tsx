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

        <div className="grid md:grid-cols-3 gap-6">

          {/* 2025 — Dossier */}
          <a
            href="https://drive.google.com/file/d/1BsMiXy4irsas0OQOtPvgnJ0nvl4wwz-H/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer"
          >
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8 text-center transform group-hover:scale-[1.03] group-hover:border-festivalRed/60 transition-all duration-300 shadow-xl hover:shadow-festivalRed/10 hover:shadow-2xl">
              <div className="mb-4">
                <span className="text-xs font-bold bg-festivalRed/15 text-festivalRed border border-festivalRed/30 px-4 py-1.5 rounded-full font-ample tracking-wider uppercase">
                  Dossier
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white font-futura mb-3">2025</h3>
              <p className="text-zinc-400 text-sm font-light font-sans">Conoce nuestro Dossier de prensa</p>
              <div className="mt-4 text-xs text-festivalRed font-bold uppercase tracking-wider font-ample group-hover:underline">
                Ver dossier →
              </div>
            </div>
          </a>

          {/* 2024 */}
          <NavLink to="/2024" className="relative group cursor-pointer">
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8 text-center transform group-hover:scale-[1.03] group-hover:border-festivalRed/60 transition-all duration-300 shadow-xl hover:shadow-festivalRed/10 hover:shadow-2xl">
              <div className="mb-4">
                <span className="text-xs font-bold bg-white/5 text-zinc-300 border border-zinc-700 px-4 py-1.5 rounded-full font-ample tracking-wider uppercase">
                  Edición Anterior
                </span>
              </div>
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
              <div className="mb-4">
                <span className="text-xs font-bold bg-white/5 text-zinc-300 border border-zinc-700 px-4 py-1.5 rounded-full font-ample tracking-wider uppercase">
                  Primera Edición
                </span>
              </div>
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
