import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 bg-texture-238 opacity-[0.10] pointer-events-none mix-blend-overlay" />
      {/* Red glow accent top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-festivalRed/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Festival Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png" alt="FICIDI Logo" className="h-12 w-auto" />
            </div>
            <h3 className="text-lg font-black text-white mb-4 font-futura tracking-wide uppercase">
              Festival de Cine Diverso
            </h3>
            <p className="text-zinc-400 mb-6 leading-relaxed text-sm font-sans font-light">
              Celebrando la diversidad audiovisual y promoviendo narrativas LGBTIQ+
              que conectan culturas y construyen puentes sociales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/festivaldecinediverso"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-400 hover:border-festivalRed hover:text-festivalRed transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-festivalRed mb-6 font-futura tracking-widest uppercase">Enlaces Rápidos</h4>
            <ul className="space-y-3 font-sans">
              <li><NavLink to="/about" className="text-zinc-400 hover:text-white transition-colors text-sm">Quiénes Somos</NavLink></li>
              <li><NavLink to="/" className="text-zinc-400 hover:text-white transition-colors text-sm">Edición 2026</NavLink></li>
              <li><NavLink to="/2025" className="text-zinc-400 hover:text-white transition-colors text-sm">Edición 2025</NavLink></li>
              <li><NavLink to="/2024" className="text-zinc-400 hover:text-white transition-colors text-sm">Edición 2024</NavLink></li>
              <li><NavLink to="/filmmakers" className="text-zinc-400 hover:text-white transition-colors text-sm">Hacedores de Cine</NavLink></li>
              <li><NavLink to="/patrocinadores" className="text-zinc-400 hover:text-white transition-colors text-sm">Patrocinadores</NavLink></li>
            </ul>
          </div>

          {/* Participación */}
          <div>
            <h4 className="text-sm font-bold text-festivalRed mb-6 font-futura tracking-widest uppercase">Participación</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <a href="https://festhome.com/festival/festival-internacional-de-cine-diverso" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Inscríbete en Festhome
                </a>
              </li>
              <li><NavLink to="/#bases" className="text-zinc-400 hover:text-white transition-colors text-sm">Bases de participación</NavLink></li>
              <li><NavLink to="/" className="text-zinc-400 hover:text-white transition-colors text-sm">Fechas importantes</NavLink></li>
              <li><NavLink to="/" className="text-zinc-400 hover:text-white transition-colors text-sm">Categorías</NavLink></li>
              <li><NavLink to="/" className="text-zinc-400 hover:text-white transition-colors text-sm">Premios</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-festivalRed mb-6 font-futura tracking-widest uppercase">Contacto</h4>
            <div className="space-y-4 font-sans">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-festivalRed mt-0.5 flex-shrink-0" />
                <p className="text-zinc-400 text-sm leading-relaxed">festivaldecinediverso@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-festivalRed mt-0.5 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">@festivaldecinediverso</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-festivalRed mt-0.5 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">Barranquilla, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-xs font-sans text-center md:text-left">
              © 2026 Festival Internacional de Cine Diverso. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs font-sans">
              <a href="/privacidad" className="text-zinc-500 hover:text-festivalRed transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-zinc-500 hover:text-festivalRed transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
