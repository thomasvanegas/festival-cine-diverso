import React from 'react';
import { NavLink } from 'react-router-dom';

const YearBadges = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <img src="/Fondo.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Coming 2025 */}
          <a href="https://drive.google.com/file/d/1BsMiXy4irsas0OQOtPvgnJ0nvl4wwz-H/view?usp=sharing" target='_blank' className="relative group animate-fade-in-up cursor-pointer">
            <div className="bg-white/80 backdrop-blur-md border border-green-200 rounded-2xl p-8 text-center text-green-900 transform group-hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="mb-4">
                <span className="text-sm font-medium bg-green-100/60 text-green-700 px-4 py-2 rounded-full">
                  DOSSIER
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">2025</h3>
              <p className="text-lg opacity-90">Conoce nuestro Dossier de prensa</p>
            </div>
          </a>

          {/* Selection 2024 */}
          <NavLink to="/2024" className="relative group animate-fade-in-up delay-200 cursor-pointer">
            <div className="bg-white/80 backdrop-blur-md border border-pink-200 rounded-2xl p-8 text-center text-pink-900 transform group-hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="mb-4">
                <span className="text-sm font-medium bg-pink-100/60 text-pink-700 px-4 py-2 rounded-full">
                  EDICIÓN ANTERIOR
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">2024</h3>
<p className="text-lg opacity-90"> "Todxs brillamos en la pantalla grande"</p>
            </div>
          </NavLink>

          {/* Selection 2023 */}
          <NavLink to="/2023" className="relative group animate-fade-in-up delay-400 cursor-pointer">
            <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-8 text-center text-blue-900 transform group-hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="mb-4">
                <span className="text-sm font-medium bg-blue-100/60 text-blue-700 px-4 py-2 rounded-full">
                  PRIMERA EDICIÓN
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">2023</h3>
<p className="text-lg opacity-90">"Donde Todxs brillamos en la pantalla grande"</p>
            </div>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default YearBadges;
